
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDialog from './CartDialog';

const CartButton: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();

  if (totalItems === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex items-center space-x-2 bg-gamboge text-white px-4 py-2 rounded-full hover:bg-rosso transition-colors"
      >
        <ShoppingCart size={20} />
        <span className="font-medium">₦{getTotalPrice().toLocaleString()}</span>
        <span className="absolute -top-2 -right-2 bg-rosso text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
          {totalItems}
        </span>
      </button>
      
      <CartDialog 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default CartButton;
