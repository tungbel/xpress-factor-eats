
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Order = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCart();
  const { toast } = useToast();

  const handlePayment = () => {
    // Simulate payment processing
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
    });

    // Simulate payment delay
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Complete Your Order</h1>
          
          {items.length > 0 ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-semibold">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-gamboge">₦{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full bg-gamboge text-white py-4 rounded-lg font-bold text-lg hover:bg-rosso transition-colors"
              >
                Pay Now - ₦{getTotalPrice().toLocaleString()}
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
              <button
                onClick={() => navigate('/menu')}
                className="bg-gamboge text-white px-8 py-4 rounded-lg font-bold hover:bg-rosso transition-colors"
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;
