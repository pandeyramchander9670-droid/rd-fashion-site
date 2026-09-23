"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialPoster from "@/components/EditorialPoster";
import SummerBento from "@/components/SummerBento";
import CollectionGrid from "@/components/CollectionGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const [wishlistCount, setWishlistCount] = useState(2);

  const handleWishlistToggle = (_id: string, isSaved: boolean) => {
    setWishlistCount((prev) => (isSaved ? prev + 1 : Math.max(0, prev - 1)));
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] selection:bg-[#ff461e] selection:text-white">
      {/* Editorial Navigation */}
      <Navbar wishlistCount={wishlistCount} cartCount={1} />

      {/* Hero with GSAP ScrollTrigger 180-Frame Canvas Scrub & Synced Wordmark Reveal */}
      <main>
        <Hero />

        {/* Section 2: DITTO SAME as Image 2 Reference - "FIND YOUR TRUE STYLE HERE" with animated letters & character */}
        <EditorialPoster />

        {/* Section 3: DITTO SAME as Image 3 Reference - "SUMMER COLLECTION" Bento Collage */}
        <SummerBento />

        {/* Our Collection Product Grid */}
        <CollectionGrid onWishlistToggle={handleWishlistToggle} />
      </main>

      {/* Luxury Typographic Footer */}
      <Footer />
    </div>
  );
}


