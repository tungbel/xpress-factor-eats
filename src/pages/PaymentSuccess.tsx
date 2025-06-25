
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useCart } from '@/contexts/CartContext';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();
  }, [clearCart]);

  const orderId = `CX${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <CheckCircle size={80} className="text-freshness mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Payment Successful!
              </h1>
              <p className="text-xl text-muted-foreground">
                Thank you for your order. Your catfish is being prepared!
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-card border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Order Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-semibold text-foreground">#{orderId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estimated Delivery:</span>
                  <span className="font-semibold text-foreground flex items-center">
                    <Clock size={16} className="mr-2" />
                    25-30 minutes
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Delivery Address:</span>
                  <span className="font-semibold text-foreground flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Your Location
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => navigate(`/delivery-tracking?orderId=${orderId}`)}
                className="w-full bg-gamboge text-white py-4 rounded-full font-bold text-lg hover:bg-rosso transition-colors"
              >
                Track Your Order
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full bg-gray-200 text-gray-800 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
              <p className="text-sm text-muted-foreground">
                Our chefs are preparing your order with fresh catfish. You'll receive SMS updates on your order status, 
                and you can track your delivery in real-time using the link above.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
