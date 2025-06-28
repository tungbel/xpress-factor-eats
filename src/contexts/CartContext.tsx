
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
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

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  createOrder: (customerInfo: CustomerInfo, orderType: 'delivery' | 'pickup') => Promise<string>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  const addItem = (newItem: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...currentItems, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
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
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const createOrder = async (customerInfo: CustomerInfo, orderType: 'delivery' | 'pickup'): Promise<string> => {
    try {
      const subtotal = getTotalPrice();
      const tax = subtotal * 0.08; // 8% tax
      const deliveryFee = orderType === 'delivery' ? 5.00 : 0;
      const total = subtotal + tax + deliveryFee;

      // Generate order number
      const orderNumber = `CX${Date.now().toString().slice(-8)}`;

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user?.id || null,
          order_number: orderNumber,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone,
          customer_address: customerInfo.address || null,
          order_type: orderType,
          subtotal,
          tax,
          delivery_fee: deliveryFee,
          total,
          status: 'pending',
          payment_status: 'pending',
          estimated_delivery_time: new Date(Date.now() + (orderType === 'delivery' ? 45 : 20) * 60000).toISOString()
        })
        .select()
        .single();

      if (orderError || !order) {
        throw orderError || new Error('Failed to create order');
      }

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        menu_item_id: item.id,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity,
        customizations: item.customizations || {}
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        throw itemsError;
      }

      toast({
        title: "Order Created!",
        description: `Your order #${orderNumber} has been placed successfully.`
      });

      clearCart();
      return order.id;
    } catch (error) {
      console.error('Error creating order:', error);
      toast({
        title: "Error",
        description: "Failed to create order. Please try again.",
        variant: "destructive"
      });
      throw error;
    }
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      createOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};
