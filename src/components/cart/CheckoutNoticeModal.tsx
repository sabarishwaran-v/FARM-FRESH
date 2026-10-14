'use client';

import React, { useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { AlertCircle, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function CheckoutNoticeModal() {
  const { isCheckoutModalOpen, closeCheckoutModal } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCheckoutModalOpen) {
        closeCheckoutModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCheckoutModalOpen, closeCheckoutModal]);

  if (!isCheckoutModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
      >
        {/* Top Header Color Stripe */}
        <div className="h-2.5 bg-gradient-to-r from-emerald-600 via-[#1b4332] to-amber-500" />

        {/* Close Button */}
        <button
          onClick={closeCheckoutModal}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-emerald-700 cursor-pointer"
          aria-label="Close notice"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Notice Icon & Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                Prototype Demonstration
              </span>
              <p className="text-xs text-stone-700 mt-0.5">Wadhwani Foundation Venture Journey</p>
            </div>
          </div>

          {/* Headline */}
          <h2
            id="checkout-modal-title"
            className="text-xl md:text-2xl font-bold text-stone-900 leading-tight mb-3"
          >
            Demonstration Website Notice
          </h2>

          {/* Required Exact Notice Message */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 mb-5 text-sm text-stone-800 font-medium leading-relaxed">
            &ldquo;This is a demonstration website. Online ordering and payment are not yet available.&rdquo;
          </div>

          {/* Context Details */}
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed mb-6">
            Farm-Fresh is currently being designed and presented as a student startup prototype.
            Our team is currently validating customer interest, local farmer aggregation logistics,
            and farm-to-table supply chains before launching full-scale transactional ordering and
            payment processing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-stone-100">
            <button
              onClick={closeCheckoutModal}
              type="button"
              className="flex-1 py-3 px-5 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white font-semibold text-sm transition-all shadow-xs cursor-pointer text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Back to Shopping
            </button>
            <Link
              href="/about"
              onClick={closeCheckoutModal}
              className="py-3 px-5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-colors text-center inline-flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-stone-500"
            >
              <span>Learn About the Concept</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
