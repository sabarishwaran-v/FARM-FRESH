# Farm-Fresh: Farm-to-Home Marketplace Prototype

> **"Fresh from farms. Fair for everyone."**  
> *Discover fresh fruits and vegetables from local farmers, delivered with care.*

Farm-Fresh is a farm-to-home marketplace concept developed as an early-stage startup prototype for the **Wadhwani Foundation Venture Journey**. It connects local farmers directly with urban households, enabling growers to receive fair realization prices while allowing consumers to buy crisp, farmgate fruits and vegetables at honest rates.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Local Development Instructions](#local-development-instructions)
5. [Production Build Instructions](#production-build-instructions)
6. [Deploying to Vercel](#deploying-to-vercel)
7. [How to Replace Sample Product Images](#how-to-replace-sample-product-images)
8. [How to Update Product Prices & Units](#how-to-update-product-prices--units)
9. [How to Connect a Live Email / Contact Service](#how-to-connect-a-live-email--contact-service)
10. [Prototype Limitations](#prototype-limitations)
11. [Suggested Future Improvements](#suggested-future-improvements)

---

## Project Overview

- **Mission**: Empower regional farmers with higher farmgate share and predictable household demand, while cutting out unnecessary intermediaries so urban families receive produce within hours of morning harvest.
- **Venture Context**: Created for academic evaluation and venture acceleration in the Wadhwani Foundation Venture Journey.
- **Design Philosophy**: Clean white and light cream backgrounds, deep forest green primary (`#1b4332`), fresh emerald accents, and warm golden highlights. Subtle shadows, rounded cards, accessible focus rings, and high mobile responsiveness.

---

## Key Features

- **Home Page (`/`)**:
  - Hero section with clear value proposition and dual CTAs (*"Explore Fresh Produce"* & *"Meet Our Farmers"*).
  - Trust / value strip: Fresh Produce, Fair Prices, and Supporting Local Farmers.
  - Category exploration cards (Vegetables, Fruits, Leafy Greens, Seasonal Produce) with working category filters.
  - Featured product showcase with INR demonstration prices and instant cart action.
  - 3-step "How It Works" journey explaining the direct distribution concept.
  - "Why Farm-Fresh?" value pillars.
  - Farmer engagement call-to-action leading directly to inquiry touchpoints.

- **Product Catalogue (`/products`)**:
  - Live, instant product name and farm origin text search.
  - Category filtering tabs (All, Vegetables, Fruits, Leafy Greens, Seasonal Produce).
  - URL query parameter support (e.g. `/products?category=leafy-greens`).
  - Price sorting (Low to High, High to Low), alphabetical sorting, and featured sorting.
  - Dynamic result counter and one-click filter reset.
  - Friendly empty state when search filters return no items.

- **Demonstration Shopping Cart**:
  - Reactive slide-over basket accessible from any page via navigation bar.
  - Quantity steppers (`+` / `-`), individual item removal, line-item totals in INR, and basket clearing.
  - Automatic persistence using browser `localStorage` (`useSyncExternalStore` ensuring hydration safety).
  - Checkout trigger displaying a clear notice:
    > *"This is a demonstration website. Online ordering and payment are not yet available."*

- **About Page (`/about`)**:
  - Detailed breakdown of agricultural challenges faced by rural growers and urban consumers.
  - Direct supply chain model explanation with 24-hour harvest-to-home cycle.
  - Dual-sided benefit comparison between farmers and households.
  - Long-term vision and student venture roadmap.

- **Contact Page (`/contact`)**:
  - Professional inquiry form with client-side field validation and email format checks.
  - Pre-fills subject from URL parameters (e.g. `?subject=farmer`).
  - Prototype demonstration disclaimer stating messages are for testing.
  - Clear placeholders for official incubator contacts, avoiding invented physical addresses.

---

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS v4
- **State Management**: React State + `useSyncExternalStore` for hydration-safe `localStorage` synchronization
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono
- **Deployment Platform**: Vercel-ready (zero backend dependencies or API secrets required)

---

## Local Development Instructions

### Prerequisites
- Node.js `v18.18+` or `v20+` (Tested on Node.js `v24`)
- npm `v9+` or `v10+`

### Setup Steps

1. Clone or navigate into the project directory:
   ```bash
   cd farm-fresh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Production Build Instructions

To test a production-grade build locally before deploying:

1. Run the build command:
   ```bash
   npm run build
   ```

2. Start the production server locally:
   ```bash
   npm run start
   ```

3. Run the linter to verify code cleanliness:
   ```bash
   npm run lint
   ```

---

## Deploying to Vercel

The application is completely self-contained and requires **no environment variables or backend databases** to run.

### Option A: Via Vercel Web Dashboard (Recommended for beginners)
1. Push this repository to your GitHub, GitLab, or Bitbucket account.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your `farm-fresh` repository.
5. In the configuration screen:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./` (or the folder where `package.json` resides)
   - **Environment Variables**: None required!
6. Click **"Deploy"**. Your site will be live on a `*.vercel.app` URL within 1–2 minutes.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```
Follow the interactive prompts to deploy. For production deployment, run:
```bash
vercel --prod
```

---

## How to Replace Sample Product Images

All product entries are centralized in `src/data/products.ts`.

Each product item contains an `image` URL and a `fallbackIcon` emoji:
```typescript
{
  id: 'tomatoes-country',
  name: 'Farm-Fresh Tomatoes',
  category: 'vegetables',
  categoryName: 'Vegetables',
  price: 40,
  unit: 'kg',
  farmSource: 'Kolar Farmer Collective, Karnataka',
  image: 'https://images.unsplash.com/...',
  fallbackIcon: '🍅',
}
```

### To use local images instead of external URLs:
1. Save your photograph inside the `public/images/products/` folder (e.g. `public/images/products/tomatoes.jpg`).
2. Update the `image` field in `src/data/products.ts` to `/images/products/tomatoes.jpg`.
3. If using another external image host, add the domain to `remotePatterns` in `next.config.ts`:
   ```typescript
   // next.config.ts
   images: {
     remotePatterns: [
       { protocol: 'https', hostname: 'your-image-domain.com' }
     ]
   }
   ```
4. The custom `SafeImage` component automatically handles image fallbacks if any image fails to load.

---

## How to Update Product Prices & Units

All product pricing is maintained in `src/data/products.ts`.

To change a price or unit:
1. Open `src/data/products.ts`.
2. Locate the product in the `PRODUCTS` array.
3. Modify the `price` (number in INR) or `unit` (e.g. `'kg'`, `'dozen'`, `'bunch'`, `'250g'`).
   ```typescript
   {
     id: 'spinach-palak',
     name: 'Fresh Native Spinach (Palak)',
     price: 25, // Updated price in INR
     unit: 'bunch',
     ...
   }
   ```
4. Save the file. Changes will reflect immediately across the Home page highlights, Products catalogue, and Cart calculations.

---

## How to Connect a Live Email / Contact Service

Currently, `src/app/contact/page.tsx` performs front-end validation and displays a prototype demonstration message. When you are ready to connect a live transactional email service, follow one of these simple options:

### Option 1: Formspree (No backend code required)
1. Create a free form at [formspree.io](https://formspree.io).
2. In `src/app/contact/page.tsx`, replace the simulated `setTimeout` in `handleSubmit` with a `fetch` call:
   ```typescript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

### Option 2: Resend with Next.js App Router API Route
1. Install Resend: `npm install resend`
2. Create `src/app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   import { NextResponse } from 'next/server';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const { name, email, subject, message } = await req.json();
     await resend.emails.send({
       from: 'Farm-Fresh <onboarding@resend.dev>',
       to: 'your-team@example.com',
       subject: `[Farm-Fresh Contact] ${subject} - ${name}`,
       text: `From: ${name} (${email})\n\n${message}`,
     });
     return NextResponse.json({ success: true });
   }
   ```

---

## Prototype Limitations

1. **Demonstration Shopping Cart**: The cart demonstrates basket calculation, item quantity adjustments, and total summation in INR. Online order dispatching and payment gateways (e.g. Razorpay, Stripe) are deliberately not connected.
2. **Mock Pricing & Sourcing**: Displayed product rates and farm sources represent typical regional agricultural benchmarks for prototype testing, not live electronic mandi ticker rates.
3. **No Database / Authentication**: User accounts, order history, and farmer inventories are simulated on the front end without backend infrastructure.
4. **No Real Email Dispatch**: The contact form validates user inputs without sending real emails over SMTP.

---

## Suggested Future Improvements

- **Farmer Portal**: Dedicated dashboard where registered farmers can declare upcoming harvest dates, crop yields, and minimum reserve prices.
- **Apartment Community Group Buying**: Feature allowing apartment resident associations to pool daily orders for zero delivery cost.
- **Live Logistics Tracking**: SMS / WhatsApp automated notifications tracking morning harvests from regional farm collection centers to apartment drop-off points.
- **Cold-Chain Route Optimization**: Algorithmic delivery route planning to ensure leafy greens reach homes within 3 hours of dispatch.
- **Regional Languages**: Localization in regional languages (Kannada, Telugu, Tamil, Hindi) for enhanced farmer accessibility.

---

## License & Attribution

Created for the **Wadhwani Foundation Venture Journey**. Designed and built with Next.js, React, and Tailwind CSS.
