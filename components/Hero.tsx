"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const totalFrames = 180;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let isMounted = true;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Function to render a specific frame onto the canvas
    const renderFrame = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = loadedImages[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      // Fit height so character's full body and head are NEVER cut off on wide screens
      const vRatio = canvasHeight / imgHeight;
      const hRatio = canvasWidth / imgWidth;
      const isMobile = window.innerWidth < 768;

      // On desktop/ultrawide, fit to height so head and feet remain fully visible
      // On narrow mobile, scale up slightly to keep focal point balanced
      const ratio = isMobile ? Math.max(hRatio, vRatio) : vRatio;

      const renderWidth = imgWidth * ratio;
      const renderHeight = imgHeight * ratio;

      // Position floor grounded at bottom
      const shiftY = canvasHeight - renderHeight;
      // On wide screens, position cubes/character to right-center (0.75) leaving left open for RD FASHION text
      const focalX = isMobile ? 0.65 : canvasWidth > renderWidth ? 0.75 : 0.5;
      const shiftX = (canvasWidth - renderWidth) * focalX;

      // Draw background fill to blend seamlessly at sides
      ctx.fillStyle = "#828b8d";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.drawImage(img, 0, 0, imgWidth, imgHeight, shiftX, shiftY, renderWidth, renderHeight);
      currentFrameIndexRef.current = index;
    };

    // Update canvas resolution matching device pixel ratio
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }

      renderFrame(currentFrameIndexRef.current);
    };

    // Preload all 180 frames sequentially and asynchronously
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/hero-frames/ezgif-frame-${frameNum}.png`;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        const progress = Math.round((loadedCount / totalFrames) * 100);
        setLoadingProgress(progress);

        if (i === 1) {
          updateCanvasSize();
          renderFrame(0);
        }

        if (loadedCount === totalFrames) {
          setIsLoaded(true);
          renderFrame(currentFrameIndexRef.current);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // GSAP ScrollTrigger Setup
    const isMobile = window.innerWidth < 768;
    const pinDistanceMultiplier = isMobile ? 1.8 : 3.0; // Shorter scrub distance on mobile

    const ctx = gsap.context(() => {
      const letters = textRef.current?.querySelectorAll<HTMLElement>("span.hero-letter");

      // Initially hide the letters completely
      if (letters && letters.length > 0) {
        gsap.set(letters, { opacity: 0, y: 24 });
      }

      const frameTracker = { frame: 0 };

      // Single timeline pinned over the hero section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * pinDistanceMultiplier}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Scrub character animation frames linearly from 0 to totalFrames - 1
      tl.to(
        frameTracker,
        {
          frame: totalFrames - 1,
          ease: "none",
          duration: 1.0,
          onUpdate: () => {
            const nextIndex = Math.min(
              totalFrames - 1,
              Math.max(0, Math.round(frameTracker.frame))
            );
            if (nextIndex !== currentFrameIndexRef.current) {
              renderFrame(nextIndex);
            }
          },
        },
        0
      );

      // 2. Synchronized text reveal:
      // USER REQUEST: Make RD FASHION reveal EARLY in the scroll sequence (at 0.15 instead of 0.70)
      if (letters && letters.length > 0) {
        tl.to(
          letters,
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            stagger: 0.025,
            ease: "power2.out",
          },
          0.15 // Reveals early right as character begins standing up!
        );
      }
    }, containerRef);


    return () => {
      isMounted = false;
      window.removeEventListener("resize", updateCanvasSize);
      ctx.revert();
    };
  }, []);

  const wordRD = "RD".split("");
  const wordFashion = "FASHION".split("");

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#7c8180] select-none"
      style={{
        background:
          "radial-gradient(circle at 65% 50%, #b8babd 0%, #8b9193 45%, #6a7071 100%)",
      }}
    >
      {/* HTML5 Canvas rendering the preloaded 180 hero frames */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Preloading Progress Bar (subtle luxury indicator at top edge while loading) */}
      {!isLoaded && (
        <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
          <div
            className="h-1 bg-[#e63946] transition-all duration-200"
            style={{ width: `${loadingProgress}%` }}
          />
          <div className="flex justify-between items-center px-6 py-2 text-[10px] tracking-[0.25em] text-neutral-800 uppercase font-mono font-medium">
            <span>RD FASHION ATELIER // SEQUENCE LOADING</span>
            <span>{loadingProgress}%</span>
          </div>
        </div>
      )}

      {/* Subtle Studio Vignette for cinematic editorial depth */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      {/* Synchronized "RD FASHION" Wordmark Reveal in Empty Left Half */}
      <div
        ref={textRef}
        className="absolute left-6 md:left-14 lg:left-24 top-1/2 -translate-y-1/2 z-20 pointer-events-none max-w-xl"
      >
        <h1 className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 leading-none">
          {/* "RD" in bold black, heavy weight font */}
          <span className="font-[family-name:var(--font-anton)] text-7xl sm:text-8xl md:text-9xl text-black font-black tracking-tight leading-none drop-shadow-sm">
            {wordRD.map((char, index) => (
              <span
                key={`rd-${index}`}
                className="hero-letter inline-block opacity-0 translate-y-6"
              >
                {char}
              </span>
            ))}
          </span>

          {/* "FASHION" in lighter weight, bold red, wide letter spacing */}
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#e63946] tracking-[0.25em] sm:tracking-[0.3em] uppercase leading-none font-sans">
            {wordFashion.map((char, index) => (
              <span
                key={`fashion-${index}`}
                className="hero-letter inline-block opacity-0 translate-y-6"
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
        {/* Strictly no buttons, no "Make an appointment", no "Learn more" anywhere */}
      </div>
    </section>
  );
}
