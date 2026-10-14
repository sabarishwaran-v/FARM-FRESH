import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ProductCard } from '@/components/ui/ProductCard';
import { getCategories, getFeaturedProducts } from '@/data/products';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Users,
  HeartHandshake,
  Sprout,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export default function HomePage() {
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7f4] via-[#FDFBF7] to-[#FDFBF7] pt-12 md:pt-20 pb-16 md:pb-24 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-[#1b4332] text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Farm-to-Home Marketplace Concept</span>
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b4332] tracking-tight leading-[1.12]">
                Fresh from Farms.{' '}
                <span className="block text-stone-900 mt-1">
                  Fair for Everyone.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Shop fresh fruits and vegetables while supporting the farmers who
                grow them. A simpler connection between farms and homes.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1b4332] hover:bg-[#143526] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  <span>Explore Fresh Produce</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-base font-semibold shadow-2xs transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700"
                >
                  <span>Meet Our Farmers</span>
                </Link>
              </div>

              {/* Prototype Note Pill */}
              <div className="pt-2 text-xs text-stone-500 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Student Startup Prototype &bull; Wadhwani Foundation Venture Journey</span>
              </div>
            </div>

            {/* Right Column: Hero Visual composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Background Blob */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-200/50 via-amber-100/40 to-emerald-100/60 rounded-3xl blur-xl transform -rotate-1"></div>

                {/* Main Visual Card */}
                <div className="relative rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-xl aspect-[4/3] sm:aspect-[5/4]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80"
                    alt="Fresh harvested fruits and vegetables directly from local farm"
                    fill
                    priority
                    className="object-cover"
                    fallbackIcon="🥬"
                    category="Farm Harvest"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Highlight Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-white/95 text-stone-900 text-xs font-semibold backdrop-blur-md shadow-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Daily Harvest Batch</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-[#1b4332]/90 text-white text-xs font-semibold backdrop-blur-md shadow-xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Transparent Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE STRIP */}
      <section className="py-10 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1: Fresh Produce */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-[#1b4332] flex items-center justify-center shrink-0">
                <Sprout className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-stone-900 text-base">
                  Fresh Produce
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Harvested at peak natural freshness and brought directly from regional growers to minimize shelf time.
                </p>
              </div>
            </div>

            {/* Value 2: Fair Prices */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-800 flex items-center justify-center shrink-0">
                <TrendingDown className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-stone-900 text-base">
                  Fair Prices
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fair farmgate returns for growers while keeping everyday fruits and vegetables reasonable for city households.
                </p>
              </div>
            </div>

            {/* Value 3: Supporting Local Farmers */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-[#1b4332] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-stone-900 text-base">
                  Supporting Local Farmers
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Empowering regional farm families and agricultural communities through direct market access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Catalogue Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Explore by Category
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Browse our diverse produce selection gathered straight from regional growers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group relative flex flex-col bg-white rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-emerald-600/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackIcon="🥦"
                    category={cat.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    {cat.itemCount} Items Available
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#1b4332] transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                    <span>Browse {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                Featured Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332] mt-2">
                Fresh Harvest Highlights
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Hand-picked everyday essentials from our regional farming partners.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-xl font-medium">
                * Sample demonstration prices
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1b4332] hover:bg-[#143526] px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <span>View Full Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid of at least 8 sample products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom Mobile Link */}
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/products"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b4332] text-white font-semibold text-sm shadow-xs"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Simple Concept
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              How Farm-Fresh Works
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Connecting urban families directly with local farmers in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#1b4332] flex items-center justify-center font-bold text-lg mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Discover
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Browse available fruits and vegetables harvested directly from local growers.
                Check harvest sources and transparent pricing for every item.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#1b4332] flex items-center justify-center font-bold text-lg mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Choose
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Select produce and add it to your cart. Review units, quantities, and
                sample demonstration totals for your household needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#1b4332] flex items-center justify-center font-bold text-lg mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Connect
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The concept connects customers with local farmers, reducing intermediary layers
                so produce arrives crisp and farmers receive equitable prices.
              </p>
            </div>
          </div>

          {/* Explicit Order Fulfilment Prototype Indicator */}
          <div className="mt-10 p-4 rounded-2xl bg-stone-100/90 border border-stone-200 text-stone-700 text-xs md:text-sm flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              <strong className="font-semibold text-stone-900">Prototype Phase Notice:</strong> Real order fulfilment is not yet connected. This website is an early-stage prototype built for the Wadhwani Foundation Venture Journey to demonstrate the marketplace flow.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHY FARM-FRESH? */}
      <section className="py-16 md:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Why Farm-Fresh?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              A thoughtful model built to benefit both producers and consumer households.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-[#FDFBF7] border border-stone-200/70 hover:border-emerald-600/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-[#1b4332] flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Fairer opportunities for farmers
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                By shortening the distribution chain, growers can retain a larger share of the end-consumer price and gain predictable local market demand for their seasonal crops.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-[#FDFBF7] border border-stone-200/70 hover:border-emerald-600/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-[#1b4332] flex items-center justify-center mb-5">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Fresh produce for households
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Bypassing multiple days of intermediate storage and mandi transit means vegetables and fruits reach kitchens quicker, preserving crisp texture and natural nutritional value.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-[#FDFBF7] border border-stone-200/70 hover:border-emerald-600/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-[#1b4332] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                A more direct supply chain
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Minimizing unnecessary handling stages reduces transit-related food loss and wastage while providing consumers with transparent information regarding where their food was grown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FARMER CALL-TO-ACTION */}
      <section className="py-16 md:py-20 bg-[#1b4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-300 bg-white/10 px-3.5 py-1 rounded-full">
              Grower Collaboration
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Are you a local farmer?
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Join our growing community and explore a simpler way to reach customers.
            </p>

            <div className="pt-2">
              <Link
                href="/contact?subject=farmer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm sm:text-base shadow-lg transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-amber-200 cursor-pointer"
              >
                <span>Interested in Joining?</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-emerald-200/70 pt-2">
              * Note: Farmer registration is currently being explored in pilot research phases. Get in touch to share feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
