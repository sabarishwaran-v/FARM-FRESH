import React from 'react';
import Link from 'next/link';
import { Sprout, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#143526] text-stone-200 border-t border-emerald-950/60 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-emerald-400 rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center">
                <Sprout className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Farm-Fresh
              </span>
            </Link>

            <p className="text-emerald-100 font-medium text-sm">
              &ldquo;Fresh from farms. Fair for everyone.&rdquo;
            </p>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Discover fresh fruits and vegetables from local farmers, delivered with care.
              Farm-Fresh is a student startup prototype developed for the Wadhwani Foundation Venture Journey to bridge regional growers directly with urban households.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
                Early-Stage Venture Prototype
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Shop Produce
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  About Our Concept
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Produce Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=vegetables"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fruits"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=leafy-greens"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Leafy Greens
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=seasonal"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Seasonal Produce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Placeholder (Strictly avoiding invented real business data) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Startup Contact
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Demonstration prototype hub for project reviews & farmer inquiries.
            </p>
            <div className="space-y-2 text-xs text-stone-300 pt-1">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-mono text-[11px] text-emerald-100">
                  contact@farmfresh-prototype.local
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>[Placeholder: Incubator & Hub Location]</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>[Placeholder: Demo Pilot Helpline]</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs text-emerald-300 hover:text-white underline font-medium"
              >
                <span>Visit Contact Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <p>
            &copy; {currentYear} Farm-Fresh. Developed for the Wadhwani Foundation Venture Journey.
          </p>
          <p className="text-[11px] text-stone-400">
            Front-End Demonstration Prototype &bull; Not for commercial orders
          </p>
        </div>
      </div>
    </footer>
  );
}
