export type ProductCategory = 'vegetables' | 'fruits' | 'leafy-greens' | 'seasonal';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  price: number; // in INR
  unit: string;  // e.g. "kg", "dozen", "bunch"
  description: string;
  farmSource: string; // Regional farm origin e.g. "Kaveri Basin Collective"
  image: string;
  fallbackIcon: string; // Icon or emoji for fallback
  isFeatured?: boolean;
  freshnessTime?: string; // e.g. "Harvested within 24h"
}

export interface Category {
  id: ProductCategory;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
