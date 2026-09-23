"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SWATCHES = [
  { id: "caramel", bg: "#9e5e33", label: "Caramel / Black Raglan", image: "/images/summer-bento-stairs.jpg" },
  { id: "black", bg: "#171717", label: "Onyx / Off-White Raglan", image: "/images/product-raglan-black-white.jpg" },
  { id: "dusty-rose", bg: "#c96f73", label: "Heritage Pink Henley", image: "/images/product-henley-pink.jpg" },
  { id: "chalk-rose", bg: "linear-gradient(135deg, #f5f5f5 50%, #c96f73 50%)", label: "Chalk / Rose Raglan", image: "/images/product-raglan-white-pink.jpg" },
  { id: "rose-chalk", bg: "linear-gradient(135deg, #c96f73 50%, #f5f5f5 50%)", label: "Rose / Chalk Raglan", image: "/images/product-raglan-pink-white.jpg" },
];

const PILL_TAGS = [
  "100% COTTON WAFFLE KNIT",
  "RAGLAN & HENLEY CUTS",
  "BREATHABLE THERMAL WEAVE",
  "MENSWEAR CAPSULE",
];

export default function SummerBento() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [selectedSwatch, setSelectedSwatch] = useState("caramel");
  const activeSwatch = SWATCHES.find((s) => s.id === selectedSwatch) || SWATCHES[0];

  return (
    <section
      id="summer-bento"
      className="w-full bg-[#f4f5f7] text-neutral-900 py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 select-none relative overflow-hidden flex flex-col justify-center border-t border-black/10"
    >
      {/* Container expanding across wide screens without being small */}
      <div className="w-full max-w-[96vw] 2xl:max-w-[2100px] mx-auto">
        {/* Symmetrical 2-Column Bento Grid matching Reference Image 3 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
          
          {/* Overlapping Center Asterisk Badge at the exact central junction */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black border-2 border-white/20 items-center justify-center shadow-2xl">
            <span className="text-[#ff461e] text-3xl font-black leading-none select-none">
              ✱
            </span>
          </div>

          {/* ================= LEFT QUADRANT (6 cols) ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5">
            {/* Top Card: Model on Stairs with 5 Swatches */}
            <div className="relative aspect-[16/11] flex-1 rounded-[30px] md:rounded-[38px] overflow-hidden border-2 border-black/15 bg-white group shadow-xl">
              <img
                key={activeSwatch.id}
                src={`${basePath}${activeSwatch.image}`}
                alt={`RD Fashion Menswear - ${activeSwatch.label}`}
                className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
              />

              {/* 5 Stacked Circular Color Swatches on the Right Side */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex flex-col gap-2.5 z-20 bg-white/85 backdrop-blur-md p-2 rounded-full border border-black/15 shadow-md">
                {SWATCHES.map((swatch) => (
                  <button
                    key={swatch.id}
                    onClick={() => setSelectedSwatch(swatch.id)}
                    title={swatch.label}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedSwatch === swatch.id
                        ? "border-[#ff461e] scale-115 shadow-md shadow-[#ff461e]/40 ring-2 ring-black/20"
                        : "border-black/30 hover:scale-110"
                    }`}
                    style={{ background: swatch.bg }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom: 4 Rounded Pill Tags (Aligned to same width as stairs card) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {PILL_TAGS.map((tag, idx) => (
                <div
                  key={idx}
                  className="rounded-full border border-black/20 bg-white hover:border-black hover:bg-black hover:text-white transition-colors py-3.5 px-4 text-center text-xs sm:text-sm font-mono tracking-wider uppercase text-neutral-800 shadow-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT QUADRANT (6 cols) ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5">
            {/* Top Card: Cyan Box with "SUMMER COLLECTION" */}
            <div className="bg-[#7ec8d9] text-black rounded-[30px] md:rounded-[38px] p-6 sm:p-10 md:p-12 flex flex-col justify-between border-2 border-black/20 shadow-xl flex-1 min-h-[320px]">
              {/* Top Row: Mini Notice on Top Right */}
              <div className="flex justify-end">
                <div className="text-right font-[family-name:var(--font-anton)] text-xs sm:text-sm md:text-base tracking-wider uppercase leading-tight text-black/90">
                  TRENDY
                  <br />
                  STYLES FOR A
                  <br />
                  LIMITED TIME!
                </div>
              </div>

              {/* Center Massive Headline: SUMMER COLLECTION */}
              <div className="my-4">
                <h3 className="font-[family-name:var(--font-anton)] text-5xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight leading-[0.86] uppercase text-black">
                  SUMMER
                  <br />
                  COLLECTION
                </h3>
              </div>

              {/* Bottom Row: Asterisk Description */}
              <div className="pt-3 border-t border-black/20 flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed text-black/90">
                <span className="text-[#ff461e] text-lg font-bold leading-none">✱✱</span>
                <p>
                  Whether you&apos;re looking for bold prints or classic neutrals, we have something for everyone.
                </p>
              </div>
            </div>

            {/* Bottom Row: [Smiling Peace-Signs Model] + [Vertical Cyan EXPLORE Pill] */}
            <div className="flex gap-4 sm:gap-5 h-[240px] sm:h-[280px] md:h-[300px]">
              {/* Left Item: Playful Model with Sunglasses (flex-1) */}
              <div className="flex-1 rounded-[30px] md:rounded-[38px] overflow-hidden border-2 border-black/15 bg-white group relative shadow-xl">
                <img
                  src={`${basePath}/images/summer-bento-peace.jpg`}
                  alt="RD Fashion Happy Summer Style"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase tracking-wider block leading-tight">
                    SUMMER STATE OF MIND
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-200 font-mono mt-0.5 block">
                    LIMITED EDITION STREETWEAR
                  </span>
                </div>
              </div>

              {/* Right Item: Vertical Cyan Pill with Arrow and "EXPLORE" (Aligned to right edge) */}
              <a
                href="#collection"
                className="group w-36 sm:w-44 md:w-52 bg-[#7ec8d9] hover:bg-[#65bdd2] text-black rounded-[30px] md:rounded-[38px] p-5 sm:p-7 flex flex-col items-center justify-between border-2 border-black/20 shadow-xl transition-all duration-300 hover:-translate-y-1 select-none"
              >
                {/* Arrow Up-Right */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-[#7ec8d9] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
                </div>

                {/* Vertical "EXPLORE" Wordmark */}
                <div className="font-[family-name:var(--font-anton)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-black">
                  EXPLORE
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
