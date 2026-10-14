'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllProducts, getCategories } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, Sprout } from 'lucide-react';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

function ProductsContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category');

  const allProducts = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => getCategories(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryOverride, setCategoryOverride] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Derive active category cleanly without setState inside an effect
  const activeCategory = categoryOverride ?? (urlCategory || 'all');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        // Category filter
        const matchesCategory =
          activeCategory === 'all' || product.category === activeCategory;

        // Search query filter
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.farmSource.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        // Default featured
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [allProducts, activeCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setCategoryOverride('all');
    setSortBy('featured');
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold">
            <Sprout className="w-3.5 h-3.5" />
            <span>Farmgate Produce Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            Fresh Fruits & Vegetables
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Directly from regional farms. Browse current seasonal harvests with transparent pricing and direct grower attribution.
          </p>
          <div className="pt-1 text-xs text-amber-800 bg-amber-50/90 border border-amber-200/80 px-3 py-1.5 rounded-xl inline-block font-medium">
            * Sample demonstration prices in INR (₹) for prototype evaluation.
          </div>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/80 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search produce by name, e.g. 'Tomatoes', 'Spinach', 'Apples'..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:bg-white transition-all"
                aria-label="Search produce"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 p-1"
                  aria-label="Clear search input"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1b4332] transition-colors cursor-pointer"
                aria-label="Sort products"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            <button
              onClick={() => setCategoryOverride('all')}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700 ${
                activeCategory === 'all'
                  ? 'bg-[#1b4332] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
              }`}
            >
              All Produce ({allProducts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryOverride(cat.slug)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700 ${
                  activeCategory === cat.slug
                    ? 'bg-[#1b4332] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
                }`}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Active Filter Status */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
          <span>
            Showing <strong className="text-stone-900 font-semibold">{filteredProducts.length}</strong> of{' '}
            {allProducts.length} items
          </span>
          {(searchQuery || activeCategory !== 'all' || sortBy !== 'featured') && (
            <button
              onClick={resetFilters}
              type="button"
              className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Friendly Empty State */
          <div className="bg-white rounded-3xl border border-stone-200/80 p-12 text-center max-w-lg mx-auto shadow-xs my-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-3xl mx-auto mb-4">
              🔍
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              No matching produce found
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo; in this category. Try adjusting your spelling or clearing active filters.
            </p>
            <button
              onClick={resetFilters}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] text-white text-xs font-semibold shadow-xs hover:bg-[#143526] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-stone-500">
          Loading produce catalogue...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
