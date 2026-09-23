"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "summer" | "winter" | "new" | "tailored" | "accessories";
  categoryLabel: string;
  price: string;
  image: string;
  badge?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "RAGLAN WAFFLE KNIT — ONYX / CHALK",
    category: "new",
    categoryLabel: "FLAGSHIP CAPSULE",
    price: "₹280",
    image: `${basePath}/images/product-raglan-black-white.jpg`,
    badge: "MAIN RUNWAY",
  },
  {
    id: "p2",
    name: "HERITAGE WAFFLE HENLEY — DUSTY ROSE",
    category: "summer",
    categoryLabel: "PLAIN SINGLE TONE",
    price: "₹300",
    image: `${basePath}/images/product-henley-pink.jpg`,
    badge: "BESTSELLER",
  },
  {
    id: "p3",
    name: "RAGLAN WAFFLE KNIT — CARAMEL / ONYX",
    category: "new",
    categoryLabel: "SUMMER CAPSULE",
    price: "₹280",
    image: `${basePath}/images/product-raglan-brown-black.jpg`,
    badge: "NEW ARRIVAL",
  },
  {
    id: "p4",
    name: "RAGLAN WAFFLE KNIT — CHALK / ROSE",
    category: "summer",
    categoryLabel: "SUMMER CAPSULE",
    price: "₹280",
    image: `${basePath}/images/product-raglan-white-pink.jpg`,
    badge: "EDITORIAL PICK",
  },
  {
    id: "p5",
    name: "RAGLAN WAFFLE KNIT — ROSE / CHALK",
    category: "summer",
    categoryLabel: "SUMMER CAPSULE",
    price: "₹280",
    image: `${basePath}/images/product-raglan-pink-white.jpg`,
    badge: "LIMITED RUN",
  },
  {
    id: "p6",
    name: "TAILORED RELAXED PLEATED TROUSER",
    category: "tailored",
    categoryLabel: "MENSWEAR ESSENTIAL",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    badge: "STAPLE",
  },
  {
    id: "p7",
    name: "MINIMALIST LEATHER COMMUTER PACK",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p8",
    name: "CHRONO MONOCHROME SUNGLASSES",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff461e]" />
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
