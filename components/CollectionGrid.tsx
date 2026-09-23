"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus, Sparkles } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "summer" | "winter" | "new" | "tailored" | "accessories";
  categoryLabel: string;
  price: string;
  image: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "SCULPTED SILK TRENCH",
    category: "summer",
    categoryLabel: "SUMMER CAPSULE",
    price: "$680.00",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    badge: "RUNWAY EXCLUSIVE",
  },
  {
    id: "p2",
    name: "ASYMMETRIC PLEATED BLOUSE",
    category: "new",
    categoryLabel: "NEW ARRIVALS",
    price: "$340.00",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    badge: "EDITORIAL PICK",
  },
  {
    id: "p3",
    name: "MONOCHROME MINIMALIST BLAZER",
    category: "tailored",
    categoryLabel: "TAILORED ATELIER",
    price: "$520.00",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p4",
    name: "ARCHITECTURAL CARGO TROUSER",
    category: "summer",
    categoryLabel: "SUMMER CAPSULE",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p5",
    name: "STRUCTURED LEATHER TOTE",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    badge: "HAND-CRAFTED",
  },
  {
    id: "p6",
    name: "GEOMETRIC RUNWAY EYEWEAR",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p7",
    name: "OVERSIZED CASHMERE OVERCOAT",
    category: "winter",
    categoryLabel: "WINTER CAPSULE",
    price: "$890.00",
    image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80",
    badge: "LIMITED RUN",
  },
  {
    id: "p8",
    name: "DOUBLE-BREASTED MERINO SUIT",
    category: "tailored",
    categoryLabel: "TAILORED ATELIER",
    price: "$780.00",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  },
];

const TABS = [
  { id: "all", label: "ALL" },
  { id: "summer", label: "SUMMER" },
  { id: "winter", label: "WINTER" },
  { id: "new", label: "NEW ARRIVALS" },
  { id: "tailored", label: "TAILORED" },
  { id: "accessories", label: "ACCESSORIES" },
];

export default function CollectionGrid({
  onWishlistToggle,
}: {
  onWishlistToggle?: (id: string, isSaved: boolean) => void;
}) {
  const [activeTab, setActiveTab] = useState("all");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({
    p1: true,
    p2: true,
  });
  const [visibleCount, setVisibleCount] = useState(8);

  const toggleHeart = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !wishlist[id];
    setWishlist((prev) => ({ ...prev, [id]: nextState }));
    if (onWishlistToggle) {
      onWishlistToggle(id, nextState);
    }
  };

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="collection" className="w-full bg-white text-black py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black/10 relative">
      <div className="w-full max-w-[96vw] 2xl:max-w-[2100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#ff461e] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HAUTE CURATION</span>
            </div>
            <h2 className="font-[family-name:var(--font-anton)] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black">
              OUR COLLECTION
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 transition-all duration-200 border rounded-none ${
                  activeTab === tab.id
                    ? "bg-[#ff461e] text-white border-[#ff461e] shadow-md shadow-[#ff461e]/30"
                    : "bg-neutral-100 text-neutral-600 border-neutral-300 hover:text-black hover:border-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProducts.slice(0, visibleCount).map((product) => {
              const isSaved = !!wishlist[product.id];

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-white border border-black/10 overflow-hidden transition-all duration-300 hover:border-black/30 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Image Container with Hover Scale */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                      loading="lazy"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={(e) => toggleHeart(e, product.id)}
                      aria-label="Save to wishlist"
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                        isSaved
                          ? "bg-[#ff461e] text-white shadow-md scale-105"
                          : "bg-white/80 text-black hover:bg-white hover:scale-110 shadow-sm"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 stroke-[2] ${
                          isSaved ? "fill-white" : ""
                        }`}
                      />
                    </button>

                    {/* Quick Add Overlay Button on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="w-full bg-black text-white hover:bg-[#ff461e] text-xs font-bold tracking-[0.15em] uppercase py-2.5 flex items-center justify-center gap-1.5 transition-colors duration-200">
                        <Plus className="w-3.5 h-3.5" />
                        <span>QUICK VIEW & ADD</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 flex flex-col gap-1 flex-1 justify-between bg-white">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-semibold block">
                        {product.categoryLabel}
                      </span>
                      <h3 className="font-semibold text-sm tracking-wide text-neutral-900 group-hover:text-[#ff461e] transition-colors duration-200 line-clamp-1 mt-0.5">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-black/5 mt-2">
                      <span className="font-[family-name:var(--font-anton)] text-lg tracking-wider text-black">
                        {product.price}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                        IN STOCK
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* VIEW MORE Button Centered Below Grid */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setVisibleCount((prev) => (prev >= 8 ? 8 : prev + 4))}
            className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-black bg-white hover:bg-black hover:text-white text-black text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300"
          >
            <span>VIEW MORE PIECES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff461e] group-hover:bg-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
