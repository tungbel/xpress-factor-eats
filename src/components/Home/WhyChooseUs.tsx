
import React from 'react';
import { ChefHat, Users, Truck, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ChefHat,
      title: "Farm-Fresh from Afadapa Fishery",
      description: "Our partnership with Afadapa Fishery ensures every catfish is sourced fresh, sustainable, and of the highest quality. From pond to plate in record time.",
      stats: "Fresh Daily"
    },
    {
      icon: Truck,
      title: "Lightning-Fast Service",
      description: "Experience the X-Press difference! Our streamlined kitchen operations and optimized delivery system get your meal to you faster than ever.",
      stats: "< 15 mins"
    },
    {
      icon: Users,
      title: "Customer-Centric Experience",
      description: "Every aspect of our service is designed around you. From customizable orders to personalized recommendations, your satisfaction is our priority.",
      stats: "98% Satisfaction"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "We stand behind every dish with our X-Factor guarantee. Not satisfied? We'll make it right or your money back, no questions asked.",
      stats: "100% Guarantee"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-4">
            Why Choose <span className="text-gamboge">CatfishXpress?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just serve catfish – we deliver an experience that combines tradition, innovation, 
            and the freshest ingredients to create something truly special.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group hover:bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-raisin group-hover:text-gamboge transition-colors">
                        {reason.title}
                      </h3>
                      <span className="text-sm font-semibold text-rosso bg-red-50 px-3 py-1 rounded-full">
                        {reason.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Afadapa Fishery Spotlight */}
        <div className="bg-gradient-to-r from-freshness to-gamboge rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 animate-pulse">
              <ChefHat size={40} />
            </div>
            <div className="absolute bottom-4 left-4 animate-pulse delay-1000">
              <ChefHat size={30} />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🐟 Proudly Sourced from Afadapa Fishery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-bold mb-2">Since 1995</h4>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">100% Natural</h4>
                <p className="text-sm opacity-90">No Artificial Growth</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Daily Fresh</h4>
                <p className="text-sm opacity-90">Pond to Plate</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Our exclusive partnership with Afadapa Fishery means every catfish meets the highest standards 
              of freshness, sustainability, and taste. This is what makes our X-Factor truly special.
            </p>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-freshness px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
