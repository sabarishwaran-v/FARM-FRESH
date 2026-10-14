'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Sprout, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Venture Prototype Top Ribbon */}
      <div className="bg-[#143526] text-emerald-100 text-[11px] md:text-xs py-1.5 px-4 text-center font-medium border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
          <span>
            Wadhwani Foundation Venture Journey Prototype &bull; Direct Farm-to-Home Concept
          </span>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-emerald-700 rounded-lg p-1"
            aria-label="Farm-Fresh Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b4332] text-emerald-300 flex items-center justify-center shadow-xs group-hover:bg-[#143526] transition-colors">
              <Sprout className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1b4332] leading-none">
                Farm-Fresh
              </span>
              <span className="text-[10px] tracking-wider font-semibold uppercase text-stone-700 leading-tight mt-0.5">
                Farm to Home
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-emerald-700 ${
                    active
                      ? 'bg-emerald-50 text-[#1b4332] shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Cart & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              type="button"
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/60 text-[#1b4332] transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-emerald-700"
              aria-label={`Open shopping cart with ${totalItems} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-stone-900 text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold">
                Basket
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-700"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-emerald-50 text-[#1b4332]'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <ArrowRight className="w-4 h-4 text-emerald-700" />}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-stone-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-50 text-[#1b4332] font-semibold text-sm"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Shopping Basket</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-200/80 font-bold">
                  {totalItems} items
                </span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
