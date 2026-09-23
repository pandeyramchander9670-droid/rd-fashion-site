"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#ebecef] text-neutral-800 pt-20 pb-12 border-t border-black/10 overflow-hidden select-none">
      {/* Repeating watermark typography pattern in light grey */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.04] flex flex-col justify-around">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap font-[family-name:var(--font-anton)] text-8xl md:text-9xl text-black tracking-[0.2em] transform -rotate-3"
          >
            RD FASHION &nbsp; RD FASHION &nbsp; RD FASHION &nbsp; RD FASHION &nbsp; RD FASHION
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[96vw] 2xl:max-w-[2100px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 z-10">
        {/* Top Newsletter & Brand Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-black/10">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl text-black tracking-tight">
                RD
              </span>
              <span className="text-[#ff461e] text-2xl md:text-3xl font-light tracking-[0.25em] uppercase font-sans font-bold">
                FASHION
              </span>
            </div>
            <p className="text-neutral-600 text-xs md:text-sm font-normal max-w-md leading-relaxed">
              Architectural luxury, designed with deliberate precision. Join the private atelier registry 
              for private runway invitations and capsule access.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {subscribed ? (
              <div className="p-4 bg-white border border-[#ff461e] text-[#ff461e] text-xs uppercase tracking-widest font-bold shadow-sm">
                Welcome to the RD Fashion Registry. Confirmation dispatched.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL FOR ATELIER PRIVILEGES"
                  className="flex-1 bg-white border border-black/20 px-4 py-3.5 text-xs text-black placeholder-neutral-500 tracking-wider focus:outline-none focus:border-[#ff461e] transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-[#ff461e] hover:bg-[#e03d17] text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>JOIN REGISTRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Standard Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 text-xs border-b border-black/10">
          {/* Column 1: Find a Store */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-black font-bold uppercase tracking-[0.2em] text-xs mb-1">
              FIND A STORE
            </h4>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Milan Flagship (Via Montenapoleone)
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Paris Atelier (Rue Saint-Honoré)
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              New York Salon (Madison Avenue)
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Tokyo Ginza Store
            </a>
            <a href="#" className="text-[#ff461e] font-semibold hover:underline transition-colors mt-1">
              Book Private Salon Appointment →
            </a>
          </div>

          {/* Column 2: Get Help */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-black font-bold uppercase tracking-[0.2em] text-xs mb-1">
              GET HELP
            </h4>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Client Concierge
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Shipping & Global Delivery
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Track Consignment
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Complimentary Returns
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Garment Preservation Guide
            </a>
          </div>

          {/* Column 3: About */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-black font-bold uppercase tracking-[0.2em] text-xs mb-1">
              ABOUT RD FASHION
            </h4>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              The Architecture of RD
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Sustainability & Raw Silk
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Milan Runway Archive
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Atelier Careers
            </a>
            <a href="#" className="text-neutral-600 hover:text-black transition-colors">
              Press Inquiries
            </a>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-black font-bold uppercase tracking-[0.2em] text-xs mb-1">
              FOLLOW THE HOUSE
            </h4>
            <div className="flex items-center gap-3 py-1.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-white border border-black/15 rounded-full hover:bg-[#ff461e] hover:text-white transition-all text-neutral-800 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2.5 bg-white border border-black/15 rounded-full hover:bg-[#ff461e] hover:text-white transition-all text-neutral-800 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 bg-white border border-black/15 rounded-full hover:bg-[#ff461e] hover:text-white transition-all text-neutral-800 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <p className="text-neutral-500 text-[11px] leading-relaxed mt-1">
              Follow @RDFashionOfficial for runway access and atelier drops.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px] tracking-wider gap-4">
          <p>© {new Date().getFullYear()} RD FASHION INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-black transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#" className="hover:text-black transition-colors">
              COOKIE SETTINGS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
