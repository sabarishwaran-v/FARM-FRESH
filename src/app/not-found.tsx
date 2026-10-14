import React from 'react';
import Link from 'next/link';
import { Sprout, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#1b4332] flex items-center justify-center mx-auto shadow-xs">
          <Sprout className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            404 &bull; Page Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Looks like this plot is empty
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-semibold transition-colors"
          >
            <span>Browse Produce</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
