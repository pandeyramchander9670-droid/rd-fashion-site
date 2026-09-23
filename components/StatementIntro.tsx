"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StatementIntro() {
  return (
    <section id="statement" className="relative bg-[#0f0f11] text-white py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Subtle ambient red glow in the background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#e63946]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8 max-w-4xl"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#e63946] text-xs font-semibold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
            <span>Autumn / Summer 2025 Statement</span>
          </div>

          {/* Headline */}
          <h2 className="font-[family-name:var(--font-anton)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white">
            FIND YOUR <span className="text-[#e63946]">TRUE STYLE</span> HERE.
            <br />
            <span className="text-neutral-400 font-light font-sans text-3xl sm:text-5xl md:text-6xl block mt-3 tracking-normal">
              Architecture woven into human form.
            </span>
          </h2>

          {/* Supporting paragraph */}
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            RD FASHION is built on the philosophy of sharp discipline, uncompromised materials, and 
            sculptural silhouettes. Designed in our European ateliérs for those who walk through the world 
            with deliberate poise.
          </p>

          {/* Call to action */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="group relative inline-flex items-center gap-3 bg-[#e63946] hover:bg-[#c92a37] text-white px-9 py-4 font-bold text-sm tracking-[0.2em] uppercase rounded-none transition-all duration-300 shadow-xl shadow-[#e63946]/20 hover:shadow-[#e63946]/40 hover:-translate-y-0.5"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#summer-capsule"
              className="text-neutral-300 hover:text-white text-xs tracking-[0.25em] uppercase font-semibold py-4 border-b border-neutral-700 hover:border-white transition-all duration-200"
            >
              View Lookbook 25
            </a>
          </div>

          {/* Grid of micro-metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 w-full mt-4">
            <div>
              <span className="text-[#e63946] font-mono text-xs block mb-1 tracking-wider">01 // SILHOUETTES</span>
              <p className="text-white font-medium text-sm">Sculptural Precision</p>
              <p className="text-neutral-500 text-xs mt-1">Engineered draping and clean geometric lines.</p>
            </div>
            <div>
              <span className="text-[#e63946] font-mono text-xs block mb-1 tracking-wider">02 // TEXTILES</span>
              <p className="text-white font-medium text-sm">Pure Raw Materials</p>
              <p className="text-neutral-500 text-xs mt-1">100% natural silks, heavy twill, and bespoke wools.</p>
            </div>
            <div>
              <span className="text-[#e63946] font-mono text-xs block mb-1 tracking-wider">03 // EDITIONS</span>
              <p className="text-white font-medium text-sm">Numbered Limited Drops</p>
              <p className="text-neutral-500 text-xs mt-1">Exclusively numbered garments made to endure.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
