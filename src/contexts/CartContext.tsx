
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  customizations?: {
    sides?: string[];
    extras?: string[];
    spiceLevel?: string;
    specialInstructions?: string;
  };
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateCustomizations: (id: number, customizations: CartItem['customizations']) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === newItem.id && 
        JSON.stringify(item.customizations) === JSON.stringify(newItem.customizations)
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id && 
          JSON.stringify(item.customizations) === JSON.stringify(newItem.customizations)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const updateCustomizations = (id: number, customizations: CartItem['customizations']) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, customizations } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      let itemTotal = item.price * item.quantity;
      
      // Add extra costs for customizations
      if (item.customizations?.sides) {
        itemTotal += item.customizations.sides.length * 500 * item.quantity; // ₦500 per side
      }
      if (item.customizations?.extras) {
        itemTotal += item.customizations.extras.length * 300 * item.quantity; // ₦300 per extra
      }
      
      return total + itemTotal;
    }, 0);
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    updateCustomizations,
    clearCart,
    getTotalItems,
    getTotalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
