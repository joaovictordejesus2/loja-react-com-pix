//João Victor de Jesus Augusto PD015
import { createContext, useContext, useEffect, useState } from "react";

// Cria o contexto do carrinho
const CartContext = createContext();

// Necessário para usar o carrinho em qualquer componente
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Estado do carrinho (carregar do armazenamento local)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Sempre que o carrinho mudar, salva no armazenamento local
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona item ao carrinho
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Remove item do carrinho
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // Altera quantidade de produtos
  function updateQuantity(id, qty) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  }

  // Calcula total em reais
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
