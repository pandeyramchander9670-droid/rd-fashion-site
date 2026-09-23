"use client";

import React from "react";

export default function EditorialPoster() {
  const line1 = "FIND YOUR TRUE".split("");
  const line2 = "STYLE HERE".split("");

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1200px] flex flex-col justify-between overflow-hidden bg-[#d6d8db] select-none border-t border-black/10">
      {/* Halftone Dot Matrix Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45 z-0"
        style={{
          backgroundImage: "radial-gradient(#4b5563 1.2px, transparent 1.2px)",
          backgroundSize: "13px 13px",
        }}
      />

      {/* Subtle architectural urban vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.03] via-transparent to-black/[0.08] z-0" />

      {/* Top Editorial Nav Bar */}
      <div className="relative z-30 w-full px-6 sm:px-12 md:px-16 pt-5 pb-3 flex items-center justify-between text-black font-semibold text-xs md:text-sm tracking-wider uppercase border-b border-black/10">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-base md:text-lg tracking-tighter">(((•)))</span>
          <span className="font-[family-name:var(--font-anton)] text-xl md:text-2xl tracking-wider">
            RD FASHION
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em]">
          <a href="#collection" className="hover:text-[#ff461e] transition-colors">
            NEW ARRIVALS
          </a>
          <a href="#summer-bento" className="hover:text-[#ff461e] transition-colors">
            BRANDS
          </a>
          <a href="#collection" className="hover:text-[#ff461e] transition-colors">
            ALL PRODUCTS
          </a>
        </div>

        <div className="flex items-center gap-6 text-xs md:text-sm font-bold tracking-[0.15em]">
          <a href="#collection" className="hover:text-[#ff461e] transition-colors">
            CART(2)
          </a>
          <a href="#collection" className="hover:text-[#ff461e] transition-colors">
            LOGIN
          </a>
        </div>
      </div>

      {/* Main Poster Canvas Stage (Contained inside viewport) */}
      <div className="relative z-10 w-full flex-1 px-6 sm:px-12 md:px-16 flex flex-col justify-between items-center overflow-hidden">
        
        {/* Top-Left Vertical "SUMMER IS COMING" Badge */}
        <div className="absolute left-6 md:left-12 top-4 z-30 flex flex-col items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shadow-md">
            ✱
          </div>
          <div className="bg-[#7ec8d9] text-black px-2.5 py-4 rounded-xl border border-black/20 shadow-md [writing-mode:vertical-rl] rotate-180 font-[family-name:var(--font-anton)] text-xs md:text-sm tracking-[0.2em] font-bold uppercase">
            SUMMER IS COMING
          </div>
        </div>

        {/* Top-Right Rotating "30% OFF SALE" Circular Stamp Sticker */}
        <div className="absolute right-6 md:right-12 top-4 z-30">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer drop-shadow-xl">
            {/* Spinning Outer Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="posterCirclePathFinal"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="#000000"
                stroke="#111"
                strokeWidth="1.5"
              />
              <text fill="#ffffff" fontSize="7.8" fontWeight="bold" letterSpacing="1.2">
                <textPath href="#posterCirclePathFinal" startOffset="0%">
                  ★ SUMMER SALE ★ SUMMER SALE ★ SUMMER SALE ★
                </textPath>
              </text>
            </svg>

            {/* Inner Vibrant Red Badge */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#ff461e] border-2 md:border-[3px] border-white flex flex-col items-center justify-center text-white shadow-xl">
              <span className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl md:text-3xl leading-none">
                30%
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest uppercase leading-tight font-sans">
                OFF SALE
              </span>
            </div>
          </div>
        </div>

        {/* Giant Typographic Headlines across Full Viewport */}
        <div className="w-full flex flex-col items-center text-center pt-3 md:pt-4 z-10">
          {/* Line 1: FIND YOUR TRUE */}
          <h2 className="font-[family-name:var(--font-anton)] text-5xl sm:text-7xl md:text-[8vw] lg:text-[9.5vw] xl:text-[11vw] leading-[0.84] text-black tracking-tight uppercase flex justify-center flex-wrap gap-x-2 md:gap-x-4">
            {line1.map((char, i) => (
              <span
                key={`line1-${i}`}
                className="inline-block transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:text-[#ff461e] cursor-default"
                style={{
                  animation: `letterFloat 3.8s ease-in-out infinite ${i * 0.08}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          {/* Line 2: STYLE HERE */}
          <h2 className="font-[family-name:var(--font-anton)] text-5xl sm:text-7xl md:text-[8vw] lg:text-[9.5vw] xl:text-[11vw] leading-[0.84] text-black tracking-tight uppercase flex justify-center flex-wrap gap-x-2 md:gap-x-4 mt-0.5">
            {line2.map((char, i) => (
              <span
                key={`line2-${i}`}
                className="inline-block transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:text-[#ff461e] cursor-default"
                style={{
                  animation: `letterFloat 3.8s ease-in-out infinite ${(i + 14) * 0.08}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Center Cutout Character (Transparent PNG) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[68%] sm:h-[75%] md:h-[82%] z-20 pointer-events-none flex justify-center items-end">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/editorial-model-cutout.png`}
            alt="RD Fashion Editorial Model"
            className="h-full w-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Bottom Stage Controls (Left Subtext, Center Scroll, Right Button) */}
        <div className="relative z-30 w-full pb-3 flex items-end justify-between">
          {/* Left Column: Subtext & Date */}
          <div className="flex flex-col gap-2 text-black">
            <div>
              <p className="font-[family-name:var(--font-anton)] text-sm sm:text-base md:text-lg tracking-wide uppercase leading-tight">
                NEW SUMMER COLLECTIONS!
              </p>
              <p className="font-[family-name:var(--font-anton)] text-sm sm:text-base md:text-lg tracking-wide uppercase leading-tight text-[#ff461e]">
                GO! GET IT NOW!!!
              </p>
            </div>

            <div className="text-[11px] font-mono text-neutral-800 tracking-widest font-semibold">
              <span>23-02</span>
              <br />
              <span>2025</span>
            </div>
          </div>

          {/* Center: Scroll Down Indicator */}
          <div className="hidden sm:flex flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-neutral-900 font-bold">
            <span>SCROLL DOWN</span>
            <span className="w-5 h-7 rounded-full border-2 border-black flex items-start justify-center p-1">
              <span className="w-1 h-2 bg-black rounded-full animate-bounce" />
            </span>
          </div>

          {/* Right Column: Cyan SHOP NOW Pill Button */}
          <div>
            <a
              href="#summer-bento"
              className="inline-flex items-center justify-center bg-[#7ec8d9] hover:bg-[#65bdd2] text-black font-[family-name:var(--font-anton)] text-xl sm:text-2xl md:text-3xl tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl border border-black/20 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 uppercase"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Infinite Marquee Tape */}
      <div className="w-full bg-black py-3 overflow-hidden flex whitespace-nowrap border-y border-neutral-800 relative z-30">
        <div className="animate-marquee items-center gap-10 text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white font-[family-name:var(--font-anton)]">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="hover:text-[#ff461e] transition-colors cursor-pointer">
                SUMMER SALE
              </span>
              <span className="text-[#ff461e] text-sm font-sans">✱</span>
              <span className="hover:text-[#7ec8d9] transition-colors cursor-pointer">
                SUMMER IS COMING
              </span>
              <span className="text-[#ff461e] text-sm font-sans">✱</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
