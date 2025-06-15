
import { useState } from "react";
import { Product, CartItem } from "../data/menuData";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (prod: Product) => {
    setCart((cart) => {
      // Buscar por ID exacto (que ahora incluye las variantes)
      const idx = cart.findIndex((i) => i.id === prod.id);
      if (idx >= 0) {
        const ncart = [...cart];
        ncart[idx].qty += 1;
        return ncart;
      }
      return [...cart, { ...prod, qty: 1, observations: "" }];
    });
  };

  const updateCart = (prodId: number, qty: number) => {
    setCart((cart) =>
      qty <= 0
        ? cart.filter((c) => c.id !== prodId)
        : cart.map((c) => (c.id === prodId ? { ...c, qty } : c))
    );
  };

  const updateCartObservations = (prodId: number, observations: string) => {
    setCart((cart) =>
      cart.map((c) => (c.id === prodId ? { ...c, observations } : c))
    );
  };

  const emptyCart = () => setCart([]);

  return {
    cart,
    addToCart,
    updateCart,
    updateCartObservations,
    emptyCart,
  };
};
