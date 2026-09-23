"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const featureTags = [
  { title: "Material", desc: "100% Grade-A Mulberry Silk" },
  { title: "Cut", desc: "Architectural Drape & Dropped Hem" },
  { title: "Breathability", desc: "Natural Climate Weave" },
  { title: "Details", desc: "Hand-Burnished Horn Buttons" },
  { title: "Origin", desc: "Tailored in Como, Italy" },
  { title: "Edition", desc: "Limited Run of 120 Units" },
];

export default function SummerFeature() {
  return (
    <section id="summer-capsule" className="bg-[#0f0f11] text-white py-28 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative group">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/10 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
                alt="RD Fashion Summer Capsule Feature"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating editorial badge */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#e63946] font-bold block">
                  CAPSULE EXCLUSIVE
                </span>
                <span className="text-white text-xs font-medium tracking-wider">
                  LOOK 04 — SUMMER 2025
                </span>
              </div>

              {/* Price & quick title at bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h4 className="font-[family-name:var(--font-anton)] text-2xl text-white tracking-wide">
                    THE MONOLITH TRENCH
                  </h4>
                  <p className="text-neutral-400 text-xs tracking-wider uppercase mt-1">
                    Lightweight Technical Gabardine
                  </p>
                </div>
                <span className="text-[#e63946] font-[family-name:var(--font-anton)] text-2xl">
                  $820
                </span>
              </div>
            </div>

            {/* Overlapping secondary detail preview */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 aspect-square border-2 border-[#e63946] bg-black overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
                alt="Fabric Detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-2 text-center">
                <span className="text-[9px] uppercase tracking-widest text-white font-bold bg-black/70 px-2 py-1">
                  MACRO DETAIL
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Feature Tags */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#e63946]">
              <span>SUMMER 2025 // EDITORIAL CAPSULE</span>
            </div>

            <h2 className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] uppercase">
              WEIGHTLESS POWER.
              <br />
              <span className="text-neutral-400 font-light font-sans text-2xl sm:text-3xl tracking-normal block mt-2">
                Engineered for sweltering capitals and seaside soirees.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              Crafted in collaboration with historic mills in Northern Italy, the Summer 2025 capsule 
              reimagines lightweight tailoring. By utilizing porous open-weave silks and high-twist wools, 
              each piece holds crisp, commanding structure without heat retention.
            </p>

            {/* Feature Tags Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {featureTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white/[0.03] border border-white/10 hover:border-[#e63946]/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-1.5 text-[#e63946] text-[10px] tracking-widest font-mono uppercase mb-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{tag.title}</span>
                  </div>
                  <span className="text-white text-xs font-medium block">
                    {tag.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex items-center gap-5">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#e63946] hover:text-white px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>EXPLORE CAPSULE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-neutral-500 text-xs tracking-wider">
                COMPLIMENTARY WORLDWIDE COURIER
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
