'use client';

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useSyncExternalStore,
} from 'react';
import { Product, CartItem } from '@/types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
  lastAddedProduct: Product | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'farmfresh_cart_v1';
const CART_UPDATE_EVENT = 'farmfresh_cart_updated';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(CART_UPDATE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CART_UPDATE_EVENT, callback);
  };
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '[]';
  try {
    return localStorage.getItem(CART_STORAGE_KEY) || '[]';
  } catch {
    return '[]';
  }
}

function getServerSnapshot(): string {
  return '[]';
}

function saveCartToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(CART_UPDATE_EVENT));
  } catch (err) {
    console.warn('Failed to save cart to localStorage', err);
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);

  // Idiomatic React 18/19 hydration-safe synchronization with localStorage
  const rawItemsJson = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const items: CartItem[] = useMemo(() => {
    try {
      const parsed = JSON.parse(rawItemsJson);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [rawItemsJson]);

  const addItem = useCallback(
    (product: Product, quantity: number = 1) => {
      const existingIndex = items.findIndex((item) => item.product.id === product.id);
      let updated: CartItem[];
      if (existingIndex > -1) {
        updated = [...items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
      } else {
        updated = [...items, { product, quantity }];
      }
      saveCartToStorage(updated);

      setLastAddedProduct(product);
      setTimeout(() => {
        setLastAddedProduct(null);
      }, 2000);
    },
    [items]
  );

  const removeItem = useCallback(
    (productId: string) => {
      const updated = items.filter((item) => item.product.id !== productId);
      saveCartToStorage(updated);
    },
    [items]
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      const updated = items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      saveCartToStorage(updated);
    },
    [items, removeItem]
  );

  const clearCart = useCallback(() => {
    saveCartToStorage([]);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const openCheckoutModal = useCallback(() => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  }, []);

  const closeCheckoutModal = useCallback(() => {
    setIsCheckoutModalOpen(false);
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        isCheckoutModalOpen,
        openCheckoutModal,
        closeCheckoutModal,
        lastAddedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
