
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Truck, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';

const XPressDelivery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gamboge to-rosso text-white">
          <div className="container mx-auto px-4 text-center">
            <Truck className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              X-Press <span className="text-white">Delivery</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Fresh catfish delivered to your door in 30 minutes or less
            </p>
            <button className="bg-white text-raisin px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Order Now
            </button>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Delivery <span className="text-gamboge">Areas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { area: 'Lagos Island', time: '25-30 mins', fee: '₦500' },
                { area: 'Victoria Island', time: '20-25 mins', fee: '₦400' },
                { area: 'Ikoyi', time: '15-20 mins', fee: '₦300' },
                { area: 'Lekki Phase 1', time: '30-35 mins', fee: '₦600' },
                { area: 'Surulere', time: '25-30 mins', fee: '₦500' },
                { area: 'Yaba', time: '20-25 mins', fee: '₦400' }
              ].map((location, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg border">
                  <MapPin className="text-gamboge mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{location.area}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{location.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gamboge font-bold">{location.fee}</span>
                      <span className="ml-1">delivery fee</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              How X-Press <span className="text-gamboge">Delivery</span> Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Order Online', desc: 'Browse menu and place your order', icon: '📱' },
                { step: 2, title: 'We Prepare', desc: 'Fresh catfish cooked to perfection', icon: '👨‍🍳' },
                { step: 3, title: 'X-Press Delivery', desc: 'Hot delivery in 30 minutes', icon: '🚗' },
                { step: 4, title: 'Enjoy!', desc: 'Taste the X-Factor at home', icon: '😋' }
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-gamboge text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Need Help?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="text-gamboge mr-2" size={24} />
                <span className="text-lg font-semibold text-foreground">+234 800 XPRESS</span>
              </div>
              <div className="text-lg text-muted-foreground">Available 24/7</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default XPressDelivery;
