import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CheckoutNoticeModal } from '@/components/cart/CheckoutNoticeModal';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farm-Fresh | Fresh from farms. Fair for everyone.',
  description:
    'Farm-Fresh connects local farmers directly with urban households for fresh, nutritious produce at fair, transparent prices. A student startup prototype for Wadhwani Foundation Venture Journey.',
  keywords: [
    'farm fresh',
    'farm to home',
    'fresh vegetables',
    'fresh fruits',
    'local farmers',
    'direct agricultural marketplace',
    'Wadhwani Foundation Venture Journey',
  ],
  authors: [{ name: 'Farm-Fresh Team' }],
  openGraph: {
    title: 'Farm-Fresh | Farm to Home Marketplace',
    description:
      'Discover fresh fruits and vegetables from local farmers, delivered with care. Fair prices for farmers, fresh nutrition for homes.',
    siteName: 'Farm-Fresh',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1b4332',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1c2e24]">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1b4332] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-2 focus:outline-amber-400"
        >
          Skip to main content
        </a>

        <CartProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <CheckoutNoticeModal />
        </CartProvider>
      </body>
    </html>
  );
}
