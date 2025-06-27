
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Order = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, createOrder } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: user?.email || '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (orderType === 'delivery' && !customerInfo.address) {
      toast({
        title: "Missing Address",
        description: "Please provide a delivery address.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Create order in database
      const orderId = await createOrder(customerInfo, orderType);

      // Create checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          orderId,
          successUrl: `${window.location.origin}/payment-success`,
          cancelUrl: `${window.location.origin}/order`
        }
      });

      if (error) {
        throw error;
      }

      // Simulate payment success for demo
      toast({
        title: "Order Created!",
        description: "Redirecting to payment confirmation...",
      });

      setTimeout(() => {
        navigate('/payment-success');
      }, 2000);

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "There was an issue processing your order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? 5.00 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Complete Your Order</h1>
          
          {items.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-semibold">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₦{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (8%):</span>
                      <span>₦{tax.toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>₦{deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-xl font-bold pt-2 border-t">
                      <span>Total:</span>
                      <span className="text-gamboge">₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-6">
                  {/* Order Type */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Order Type</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setOrderType('delivery')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          orderType === 'delivery'
                            ? 'border-gamboge bg-orange-50'
                            : 'border-gray-200 hover:border-gamboge'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">🚚</div>
                          <div className="font-semibold">Delivery</div>
                          <div className="text-sm text-gray-600">35-45 minutes</div>
                        </div>
                      </button>
                      <button
                        onClick={() => setOrderType('pickup')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          orderType === 'pickup'
                            ? 'border-gamboge bg-orange-50'
                            : 'border-gray-200 hover:border-gamboge'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏪</div>
                          <div className="font-semibold">Pickup</div>
                          <div className="text-sm text-gray-600">15-20 minutes</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                        required
                      />
                      {orderType === 'delivery' && (
                        <textarea
                          name="address"
                          placeholder="Delivery Address *"
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                          rows={3}
                          required
                        />
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-gamboge text-white py-4 rounded-lg font-bold text-lg hover:bg-rosso transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : `Pay Now - ₦${total.toLocaleString()}`}
                  </button>
                </div>
              </div>
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
