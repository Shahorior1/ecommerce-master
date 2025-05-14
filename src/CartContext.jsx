import React, { createContext, useState, useContext, useEffect } from 'react';

// Sample product images for demo purposes
import product1 from './assets/413.png';
import product2 from './assets/420.png';
import product3 from './assets/424.png';

// Create context
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // For demonstration purposes, let's add some sample items if cart is empty
  // In a real application, we wouldn't do this
  useEffect(() => {
    // Only for demo
    if (cartItems.length === 0) {
      // setCartItems([
      //   {
      //     id: 1,
      //     title: 'Great Value Rising Crust Frozen Pizza, Supreme',
      //     price: 8.99,
      //     quantity: 2,
      //     image: product1
      //   },
      //   {
      //     id: 3,
      //     title: 'Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza',
      //     price: 14.99,
      //     quantity: 1,
      //     image: product3
      //   }
      // ]);
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if item is already in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if already in cart
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get cart total items count
  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get cart subtotal
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get shipping cost (free shipping over $50)
  const getShippingCost = () => {
    const subtotal = getSubtotal();
    return subtotal > 50 ? 0 : 4.99;
  };

  // Get cart total
  const getTotal = () => {
    return getSubtotal() + getShippingCost();
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemsCount,
    getSubtotal,
    getShippingCost,
    getTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext; 