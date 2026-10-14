'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { SafeImage } from './SafeImage';
import { ShoppingBag, Check, Plus, Minus, MapPin } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((i) => i.product.id === product.id);
  const currentQty = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vegetables':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'fruits':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
      case 'leafy-greens':
        return 'bg-green-50 text-green-800 border-green-200/80';
      case 'seasonal':
        return 'bg-orange-50 text-orange-800 border-orange-200/80';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/70 shadow-sm hover:shadow-md hover:border-emerald-600/30 transition-all duration-250 overflow-hidden">
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          fallbackIcon={product.fallbackIcon}
          category={product.categoryName}
        />

        {/* Category Pill */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm shadow-xs ${getCategoryColor(
            product.category
          )}`}
        >
          {product.categoryName}
        </span>

        {/* Freshness Badge if available */}
        {product.freshnessTime && (
          <span className="absolute bottom-2 left-2 text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-900/75 text-white/95 backdrop-blur-xs flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {product.freshnessTime}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        {/* Farm Origin */}
        <div className="flex items-center gap-1 text-xs text-stone-700 font-medium mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span className="truncate">{product.farmSource}</span>
        </div>

        {/* Product Title */}
        <h3 className="font-semibold text-stone-900 text-base md:text-lg leading-snug line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-700 line-clamp-2 mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Pricing and Action Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-xs text-stone-700 block font-medium">Sample Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg md:text-xl font-bold text-[#1b4332]">
                ₹{product.price}
              </span>
              <span className="text-xs text-stone-700 font-medium">
                /{product.unit}
              </span>
            </div>
          </div>

          {/* Cart Control */}
          {currentQty === 0 ? (
            <button
              onClick={handleAdd}
              type="button"
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#1b4332] hover:bg-[#143526] text-white active:scale-95'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center bg-emerald-50/90 border border-emerald-200 rounded-xl p-1 gap-1">
              <button
                onClick={() => updateQuantity(product.id, currentQty - 1)}
                type="button"
                className="w-7 h-7 rounded-lg bg-white text-emerald-900 flex items-center justify-center shadow-xs hover:bg-emerald-100/70 active:scale-95 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-700"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center text-xs font-bold text-emerald-950">
                {currentQty}
              </span>
              <button
                onClick={() => updateQuantity(product.id, currentQty + 1)}
                type="button"
                className="w-7 h-7 rounded-lg bg-[#1b4332] text-white flex items-center justify-center shadow-xs hover:bg-[#143526] active:scale-95 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-700"
                aria-label={`Increase quantity of ${product.name}`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
