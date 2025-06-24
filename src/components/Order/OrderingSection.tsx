
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, MapPin, CreditCard, CheckCircle, Truck } from 'lucide-react';

const OrderingSection = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, image: string, quantity: number}>>([]);
  const [orderType, setOrderType] = useState('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const quickMenu = [
    { id: 1, name: "Signature X-Press Bowl", price: 3500, image: "🍲" },
    { id: 2, name: "Grilled Catfish Supreme", price: 4200, image: "🐟" },
    { id: 3, name: "Spicy X-Press Deluxe", price: 3800, image: "🌶️" },
    { id: 4, name: "Family Feast Combo", price: 12500, image: "👨‍👩‍👧‍👦" },
    { id: 5, name: "Catfish Bites", price: 1800, image: "🍤" },
    { id: 6, name: "BBQ Catfish Platter", price: 4200, image: "🔥" }
  ];

  const addToCart = (item: typeof quickMenu[0]) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean) as typeof cart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleNext = () => {
    if (step === 1 && cart.length === 0) {
      alert('Please add items to your cart first!');
      return;
    }
    if (step === 3 && (!customerInfo.name || !customerInfo.phone)) {
      alert('Please fill in required customer information!');
      return;
    }
    setStep(step + 1);
  };

  const handleSubmitOrder = () => {
    const orderSummary = {
      orderNumber: 'CX' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: cart,
      total: getTotalPrice(),
      orderType: orderType,
      customer: customerInfo,
      estimatedTime: orderType === 'delivery' ? '35-45 minutes' : '15-20 minutes'
    };
    
    alert(`Order Confirmed! 🎉\n\nOrder #${orderSummary.orderNumber}\nTotal: ₦${orderSummary.total.toLocaleString()}\nEstimated ${orderType} time: ${orderSummary.estimatedTime}\n\nThank you for choosing CatfishXpress!`);
    
    // Reset form
    setStep(1);
    setCart([]);
    setCustomerInfo({ name: '', phone: '', email: '', address: '' });
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-4">
            Order <span className="text-gamboge">Online</span>
          </h2>
          <p className="text-xl text-gray-600">
            Fresh catfish delivered to your door in 4 easy steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[
              { num: 1, title: 'Menu Selection', icon: ShoppingCart },
              { num: 2, title: 'Cart Summary', icon: ShoppingCart },
              { num: 3, title: 'Checkout', icon: CreditCard },
              { num: 4, title: 'Confirmation', icon: CheckCircle }
            ].map(({ num, title, icon: Icon }) => (
              <div key={num} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  step >= num 
                    ? 'bg-gamboge text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <Icon size={20} />
                </div>
                <span className={`text-sm font-medium ${
                  step >= num ? 'text-gamboge' : 'text-gray-500'
                }`}>
                  {title}
                </span>
                {num < 4 && (
                  <div className={`h-1 w-full mt-2 ${
                    step > num ? 'bg-gamboge' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Menu Selection */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-raisin mb-6 text-center">
                Select Your Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickMenu.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{item.image}</div>
                      <h4 className="font-bold text-raisin">{item.name}</h4>
                      <p className="text-2xl font-bold text-gamboge">₦{item.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-gamboge text-white py-2 rounded-full font-semibold hover:bg-rosso transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Preview */}
              {cart.length > 0 && (
                <div className="mt-8 bg-gamboge text-white rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">Cart: {getTotalItems()} items</h4>
                      <p>Total: ₦{getTotalPrice().toLocaleString()}</p>
                    </div>
                    <button
                      onClick={handleNext}
                      className="bg-white text-gamboge px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
                    >
                      Review Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Cart Summary */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-raisin mb-6 text-center">
                Review Your Order
              </h3>
              <div className="bg-gray-50 rounded-xl p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.image}</span>
                      <div>
                        <h4 className="font-semibold text-raisin">{item.name}</h4>
                        <p className="text-gamboge font-bold">₦{item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-gamboge text-white rounded-full flex items-center justify-center hover:bg-rosso"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-gamboge">₦{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                >
                  Back to Menu
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-gamboge text-white rounded-full font-semibold hover:bg-rosso transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Checkout */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-raisin mb-6 text-center">
                Checkout Details
              </h3>
              
              {/* Order Type Selection */}
              <div className="mb-8">
                <h4 className="font-semibold text-raisin mb-4">Order Type</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      orderType === 'delivery'
                        ? 'border-gamboge bg-orange-50'
                        : 'border-gray-200 hover:border-gamboge'
                    }`}
                  >
                    <Truck className="mx-auto mb-2 text-gamboge" size={32} />
                    <h5 className="font-semibold">Delivery</h5>
                    <p className="text-sm text-gray-600">35-45 minutes</p>
                  </button>
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      orderType === 'pickup'
                        ? 'border-gamboge bg-orange-50'
                        : 'border-gray-200 hover:border-gamboge'
                    }`}
                  >
                    <MapPin className="mx-auto mb-2 text-gamboge" size={32} />
                    <h5 className="font-semibold">Pickup</h5>
                    <p className="text-sm text-gray-600">15-20 minutes</p>
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div className="mb-8">
                <h4 className="font-semibold text-raisin mb-4">Customer Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none"
                  />
                  {orderType === 'delivery' && (
                    <textarea
                      placeholder="Delivery Address *"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none md:col-span-2"
                      rows={3}
                      required
                    />
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h4 className="font-semibold text-raisin mb-4">Payment Method</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-center text-gray-600">
                    💳 Payment simulation - All payment methods accepted
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                >
                  Back to Cart
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-gamboge text-white rounded-full font-semibold hover:bg-rosso transition-colors"
                >
                  Place Order - ₦{getTotalPrice().toLocaleString()}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center">
              <div className="bg-freshness text-white rounded-2xl p-8 mb-8">
                <CheckCircle className="mx-auto mb-4" size={64} />
                <h3 className="text-3xl font-bold mb-4">Order Confirmed!</h3>
                <p className="text-xl opacity-90">
                  Thank you for choosing CatfishXpress
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-raisin mb-4">Order Summary</h4>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span>Order Type:</span>
                    <span className="capitalize font-semibold">{orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span className="font-semibold">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-bold text-gamboge">₦{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Time:</span>
                    <span className="font-semibold">
                      {orderType === 'delivery' ? '35-45 minutes' : '15-20 minutes'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmitOrder}
                className="bg-gamboge text-white px-8 py-4 rounded-full font-bold hover:bg-rosso transition-colors transform hover:scale-105"
              >
                Complete Order
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderingSection;
