"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "VOGUE RUNWAY", subtitle: "Official Feature 2025" },
  { name: "MILANO MODA", subtitle: "Main Stage Presentation" },
  { name: "HARPER'S BAZAAR", subtitle: "Editorial Showcase" },
  { name: "L'OFFICIEL PARIS", subtitle: "Design Honors" },
  { name: "ELLE ATELIER", subtitle: "Best Tailoring" },
  { name: "GQ SELECT", subtitle: "Capsule Award" },
];

export default function BrandStrip() {
  return (
    <section id="collaborations" className="bg-[#141416] py-14 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-[#e63946] font-semibold">
              Global Editorial Partners & Collaborators
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 hidden sm:inline-block">
              Paris / Milan / Tokyo / New York
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 pt-4 items-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#e63946]/40 transition-all duration-300 cursor-pointer"
              >
                <span className="font-[family-name:var(--font-anton)] text-lg md:text-xl tracking-wider text-neutral-300 group-hover:text-white transition-colors duration-200 text-center">
                  {partner.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 group-hover:text-[#e63946] transition-colors duration-200 mt-1">
                  {partner.subtitle}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
