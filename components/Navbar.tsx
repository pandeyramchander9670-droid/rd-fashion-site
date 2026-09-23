"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

interface NavbarProps {
  wishlistCount?: number;
  cartCount?: number;
}

export default function Navbar({ wishlistCount = 2, cartCount = 1 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm py-3.5 text-black"
          : "bg-gradient-to-b from-black/10 via-transparent to-transparent py-5 text-black"
      }`}
    >
      <div className="w-full max-w-[96vw] 2xl:max-w-[2100px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <span className="font-[family-name:var(--font-anton)] text-2xl md:text-3xl tracking-tight text-black">
            RD
          </span>
          <span className="text-[#ff461e] text-xl md:text-2xl font-light tracking-[0.25em] uppercase font-sans font-bold">
            Fashion
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase text-neutral-800">
          <a
            href="#summer-bento"
            className="transition-colors duration-200 hover:text-[#ff461e]"
          >
            Summer Capsule
          </a>
          <a
            href="#collection"
            className="transition-colors duration-200 hover:text-[#ff461e]"
          >
            Collection
          </a>
          <a
            href="#collection"
            className="transition-colors duration-200 hover:text-[#ff461e]"
          >
            Editorial
          </a>
          <a
            href="#collection"
            className="transition-colors duration-200 hover:text-[#ff461e]"
          >
            Runway
          </a>
        </nav>


        {/* Action Icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className={`p-1.5 rounded-full transition-colors hover:text-[#e63946] ${
              scrolled ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <a
            href="#collection"
            aria-label="Wishlist"
            className={`relative p-1.5 rounded-full transition-colors hover:text-[#e63946] ${
              scrolled ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e63946] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </a>
          <button
            aria-label="Shopping Bag"
            className={`relative p-1.5 rounded-full transition-colors hover:text-[#e63946] ${
              scrolled ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white dark:bg-white dark:text-black border border-white/20 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-1.5 rounded-full transition-colors ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f11]/98 border-b border-white/10 px-8 py-6 flex flex-col gap-4 text-white text-sm font-medium tracking-[0.15em] uppercase">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#e63946] py-1 transition-colors"
          >
            Collection
          </a>
          <a
            href="#summer-capsule"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#e63946] py-1 transition-colors"
          >
            Summer Capsule
          </a>
          <a
            href="#statement"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#e63946] py-1 transition-colors"
          >
            Editorial
          </a>
          <a
            href="#collaborations"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#e63946] py-1 transition-colors"
          >
            Partners
          </a>
        </div>
      )}
    </header>
  );
}
