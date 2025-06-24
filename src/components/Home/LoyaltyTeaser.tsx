
import React from 'react';
import { Star, Gift, Users, Truck } from 'lucide-react';

const LoyaltyTeaser = () => {
  const benefits = [
    { icon: Star, title: "Earn X-Points", desc: "Every ₦100 = 1 X-Point" },
    { icon: Gift, title: "Free Meals", desc: "Redeem points for favorites" },
    { icon: Truck, title: "Free Delivery", desc: "Members get free delivery" },
    { icon: Users, title: "VIP Treatment", desc: "Priority service & exclusive offers" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-raisin via-gray-800 to-raisin text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-spin-slow">
          <Star size={60} />
        </div>
        <div className="absolute top-20 right-20 animate-spin-slow delay-1000">
          <Gift size={40} />
        </div>
        <div className="absolute bottom-20 left-20 animate-spin-slow delay-2000">
          <Users size={50} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Join <span className="text-gamboge">X-Press Rewards</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Turn every meal into rewards! Our loyalty program gives you more reasons to love the X-Factor experience.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gamboge rounded-full flex items-center justify-center group-hover:bg-rosso transition-colors">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gamboge hover:bg-rosso text-white px-8 py-4 rounded-full font-bold transition-colors transform hover:scale-105"
              >
                Learn More
              </button>
              <button
                onClick={() => alert('Sign up simulation - Coming soon!')}
                className="border-2 border-gamboge text-gamboge hover:bg-gamboge hover:text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Join Now - FREE
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gamboge to-rosso rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 text-raisin">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Member Benefits</h3>
                  <p className="text-gray-600">Join thousands of happy members!</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Current X-Points</span>
                    <span className="font-bold text-gamboge">1,250</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Free Meals Earned</span>
                    <span className="font-bold text-freshness">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Member Since</span>
                    <span className="font-bold text-raisin">Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catering Teaser */}
        <div className="mt-20 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Planning an Event? <span className="text-gamboge">We've Got You Covered!</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From intimate gatherings to large corporate events, CatfishXpress Catering brings 
              the X-Factor experience to your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-raisin px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Explore Catering
              </button>
              <button
                onClick={() => alert('Catering quote request simulation!')}
                className="border-2 border-white text-white hover:bg-white hover:text-raisin px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyTeaser;
