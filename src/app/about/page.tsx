import React from 'react';
import Link from 'next/link';
import {
  Sprout,
  Users,
  TrendingDown,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Scale,
} from 'lucide-react';

export const metadata = {
  title: 'About Farm-Fresh | Farm to Home Venture Journey',
  description:
    'Learn about the Farm-Fresh concept, our mission to bridge local farmers with urban households, and our student venture journey with the Wadhwani Foundation.',
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[#1b4332] text-xs font-semibold">
            <Sprout className="w-4 h-4 text-emerald-700" />
            <span>Our Mission & Concept</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b4332] tracking-tight leading-tight">
            Bridging the Gap Between Rural Harvests and Urban Kitchens
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Farm-Fresh is an early-stage startup concept designed to establish a direct, transparent channel between regional agricultural growers and urban households.
          </p>
          <div className="pt-2">
            <span className="inline-block text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Student Startup Prototype &bull; Wadhwani Foundation Venture Journey
            </span>
          </div>
        </div>

        {/* 1. THE PROBLEM */}
        <section className="bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-xs space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              The Agricultural Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              The Dual Challenge in Traditional Food Distribution
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Traditional agricultural supply chains in India involve multiple intermediaries—village aggregators, commission agents, regional APMC wholesale mandis, transport brokers, and neighborhood retail stalls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* The Farmer's Challenge */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                For Local Farmers
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Small and marginal farmers often receive only a small fraction of the end-consumer rupee. Facing volatile mandi spot pricing, high commission deductions, and delayed settlements, growers bear high cultivation risks with unpredictable economic returns.
              </p>
            </div>

            {/* The Consumer's Challenge */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-200/80 text-stone-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                For Urban Households
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                By the time fruits and vegetables reach urban kitchens through conventional wholesale chains, they are often 3 to 5 days old, having experienced prolonged transit heat and repeated handling. Consumers pay premium prices for degraded freshness and have zero visibility into farm origins.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE FARM-FRESH CONCEPT */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Our Proposed Solution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332]">
              The Farm-Fresh Marketplace Model
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              A simplified, digital farmgate platform that aggregates demand from neighborhood apartment clusters and sources directly from regional farmer collectives within a 50–150 km radius.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                Direct Farmgate Sourcing
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Purchasing directly from regional growers at agreed, stable farmgate rates that reward quality harvests without arbitrary commission cuts.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                Shortened Harvest-to-Home Cycle
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                By routing produce directly from harvest centers to urban hubs, transit time is reduced to under 24 hours, locking in crisp texture and nutrients.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">
                Transparent Provenance
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every crate and produce listing identifies the regional grower collective or district source, cultivating accountability and customer trust.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DUAL-SIDED BENEFIT BREAKDOWN */}
        <section className="bg-gradient-to-br from-[#f2f7f4] to-[#fbfbf8] rounded-3xl border border-emerald-200/60 p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded-full">
              Mutual Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332]">
              How Direct Connections Benefit Both Groups
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              When unnecessary intermediaries are minimized, value can be rebalanced equitably between producer and consumer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Farmers Column */}
            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-emerald-200/70 space-y-4">
              <div className="flex items-center gap-2.5 text-[#1b4332] font-bold text-base">
                <Users className="w-5 h-5" />
                <span>Value for Farmers</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fairer realization rates compared to distress mandi sales.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Predictable demand forecasts based on recurring household orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero predatory intermediary cuts or unrecorded weight deductions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Recognition and direct pride in supplying city families.</span>
                </li>
              </ul>
            </div>

            {/* Households Column */}
            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-emerald-200/70 space-y-4">
              <div className="flex items-center gap-2.5 text-[#1b4332] font-bold text-base">
                <HeartHandshake className="w-5 h-5" />
                <span>Value for Urban Households</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Farm-fresh produce delivered within 24 hours of morning harvest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Reasonable, honest everyday prices without speculative retail markups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clear transparency on farm locations and seasonal availability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>The satisfaction of directly supporting local farming livelihoods.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. THE LONG-TERM VISION & VENTURE CONTEXT */}
        <section className="bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Future Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Our Long-Term Vision
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Our vision is to build a scalable, cooperative agricultural supply network that minimizes food waste, supports sustainable cultivation techniques, and transforms how urban communities interact with the sources of their food.
          </p>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            As we progress through the <strong>Wadhwani Foundation Venture Journey</strong>, our focus is on interviewing local growers, surveying apartment resident communities, validating unit economics, and building lean prototypes to refine the user experience before investing in cold-chain assets.
          </p>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Project Stage: Concept Prototype & Validation</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Share Feedback or Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
