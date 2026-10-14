'use client';

import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
    openCheckoutModal,
  } = useCart();

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#1b4332]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2
                  id="cart-drawer-title"
                  className="text-lg font-bold text-stone-900"
                >
                  Your Fresh Basket
                </h2>
                <p className="text-xs text-stone-700">
                  {totalItems === 0
                    ? 'No items selected yet'
                    : `${totalItems} item${totalItems === 1 ? '' : 's'} ready for review`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  type="button"
                  className="text-xs text-stone-700 hover:text-red-700 font-medium px-2 py-1 rounded transition-colors cursor-pointer"
                  title="Clear all items"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={closeCart}
                type="button"
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300/80 text-stone-700 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700"
                aria-label="Close basket"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-stone-100">
            {items.length === 0 ? (
              /* Empty State */
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl mb-4">
                  🧺
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">
                  Your basket is currently empty
                </h3>
                <p className="text-xs text-stone-700 max-w-xs mb-6 leading-relaxed">
                  Explore fresh farm produce, crisp vegetables, and seasonal fruits harvested by our local partners.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Explore Fresh Produce</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              /* Items List */
              items.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-center">
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shrink-0">
                    <SafeImage
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      fallbackIcon={item.product.fallbackIcon}
                      category={item.product.categoryName}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-stone-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-stone-700 truncate mb-1.5">
                      {item.product.farmSource}
                    </p>
                    <div className="text-xs font-medium text-stone-700">
                      ₹{item.product.price}/{item.product.unit}
                    </div>
                  </div>

                  {/* Stepper & Line Total */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <div className="text-sm font-bold text-[#1b4332]">
                      ₹{item.product.price * item.quantity}
                    </div>
                    <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 p-0.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        type="button"
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                        aria-label={`Decrease ${item.product.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        type="button"
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                        aria-label={`Increase ${item.product.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      type="button"
                      className="text-stone-700 hover:text-red-700 p-0.5 transition-colors"
                      title="Remove item"
                      aria-label={`Remove ${item.product.name} from basket`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 p-6 bg-stone-50/70 space-y-4">
              {/* Demonstration Notice */}
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-900 leading-relaxed">
                <span className="font-semibold">Demonstration Mode:</span> Items and prices are for prototype demonstration.
              </div>

              {/* Subtotal Calculation */}
              <div className="space-y-1.5 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Demonstration Delivery</span>
                  <span className="font-semibold text-emerald-800">Free (Demo)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Estimated Total</span>
                  <span className="text-[#1b4332]">₹{subtotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={openCheckoutModal}
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 active:scale-[0.99]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={closeCart}
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-stone-200/60 text-stone-700 font-medium text-xs transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
