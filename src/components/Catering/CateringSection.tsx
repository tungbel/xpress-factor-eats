
import React from 'react';
import { ChefHat, Users, Scale, Truck, CheckCircle, Settings, Smile, Calendar, ScrollText } from 'lucide-react';

const CateringSection = () => {
  const cateringProcess = [
    {
      icon: ScrollText,
      title: "Inquiry",
      description: "Fill out our easy online form with your event details and preferences"
    },
    {
      icon: ChefHat,
      title: "Menu Selection",
      description: "Customize from our diverse catering options to match your event perfectly"
    },
    {
      icon: Calendar,
      title: "Booking Confirmation",
      description: "Secure your date with our dedicated catering team"
    },
    {
      icon: Truck,
      title: "Event Day Delivery & Setup",
      description: "Fresh, on-time service with professional presentation"
    },
    {
      icon: Smile,
      title: "Follow-up",
      description: "Ensuring your complete satisfaction and gathering feedback"
    }
  ];

  const cateringStyles = [
    {
      title: "Signature Platters",
      description: "Elegant appetizer assortments perfect for cocktail hours and networking events",
      features: ["Mixed catfish bites", "Gourmet dipping sauces", "Beautiful presentation", "Serves 10-50 guests"],
      price: "From ₦15,000"
    },
    {
      title: "Buffet Extravaganza",
      description: "Full-service hot meal setups with complete serving stations",
      features: ["Multiple catfish preparations", "Variety of sides & salads", "Chafing dishes included", "Per-person pricing"],
      price: "₦2,500 per person"
    },
    {
      title: "Individual Meal Boxes",
      description: "Convenient, hygienic portions perfect for corporate events",
      features: ["Individually packaged meals", "Customizable options", "Easy distribution", "Branded packaging available"],
      price: "From ₦1,800 per box"
    },
    {
      title: "Live Stations",
      description: "Interactive cooking experience with our skilled chefs",
      features: ["Chef-attended stations", "Fresh preparation on-site", "Guest interaction", "Entertainment value"],
      price: "From ₦50,000"
    }
  ];

  const largeEventCapabilities = [
    {
      icon: Users,
      title: "Dedicated Specialist",
      description: "Personal event coordinator for seamless planning and execution"
    },
    {
      icon: Scale,
      title: "Scalable Production",
      description: "Industrial kitchen capacity to serve 500+ guests without compromising quality"
    },
    {
      icon: Truck,
      title: "Advanced Logistics",
      description: "Fleet management and coordinated delivery for multiple locations"
    },
    {
      icon: CheckCircle,
      title: "Rigorous Food Safety",
      description: "HACCP-certified processes ensuring the highest safety standards"
    },
    {
      icon: Settings,
      title: "Robust Equipment",
      description: "Professional-grade serving equipment and backup systems"
    }
  ];

  const setupOptions = [
    {
      title: "Drop-Off Service",
      description: "Simple delivery of perfectly packaged meals to your location",
      price: "No additional charge",
      includes: ["Insulated packaging", "Serving utensils", "Setup instructions"]
    },
    {
      title: "Standard Buffet Setup",
      description: "Complete buffet arrangement with basic presentation",
      price: "+ ₦5,000",
      includes: ["Table setup", "Chafing dishes", "Serving utensils", "Basic decoration"]
    },
    {
      title: "Full-Service Experience",
      description: "Complete service with wait staff and premium presentation",
      price: "+ ₦15,000",
      includes: ["Professional servers", "Premium table settings", "Elegant presentation", "Service coordination"]
    },
    {
      title: "Live Station Service",
      description: "Chef-attended cooking stations for interactive dining",
      price: "+ ₦25,000",
      includes: ["Professional chef", "Cooking equipment", "Interactive presentation", "Custom menu creation"]
    }
  ];

  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-raisin mb-6">
            CatfishXpress Catering: <br />
            <span className="text-gamboge">Elevate Your Event with Flavour!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bring the X-Factor to your special occasions! From intimate gatherings to grand celebrations, 
            we deliver premium catfish catering that transforms any event into an unforgettable culinary experience.
          </p>
        </div>

        {/* Catering Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Our Simple <span className="text-gamboge">Catering Process</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {cateringProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  {index < cateringProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gamboge opacity-30"></div>
                  )}
                  <h4 className="text-lg font-bold text-raisin mb-3 group-hover:text-gamboge transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Catering Styles & Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Catering Styles & <span className="text-gamboge">Packages</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cateringStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-raisin">{style.title}</h4>
                    <span className="text-lg font-bold text-gamboge">{style.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{style.description}</p>
                  <ul className="space-y-2">
                    {style.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="text-freshness mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Events Capability */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-raisin to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Handling Large Events <span className="text-gamboge">(500+ Guests)</span>
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our expertise shines when the stakes are high. We specialize in large-scale events 
                with the infrastructure and experience to deliver flawlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {largeEventCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rosso transition-colors">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-gamboge transition-colors">
                      {capability.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Setup & Presentation Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Setup & <span className="text-gamboge">Presentation Options</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-raisin mb-2">{option.title}</h4>
                  <div className="text-xl font-bold text-gamboge mb-3">{option.price}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{option.description}</p>
                </div>
                <ul className="space-y-2">
                  {option.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-xs text-gray-700">
                      <CheckCircle size={12} className="text-freshness mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-gamboge to-rosso rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <ChefHat className="absolute top-6 left-6 animate-pulse" size={40} />
              <Users className="absolute top-6 right-6 animate-pulse delay-1000" size={35} />
              <Smile className="absolute bottom-6 left-6 animate-pulse delay-2000" size={30} />
              <Calendar className="absolute bottom-6 right-6 animate-pulse delay-500" size={35} />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make Your Event Unforgettable?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let us bring the X-Factor to your special occasion. Our catering team is ready to 
                create a customized experience that will have your guests talking for years to come.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg">200+</h4>
                  <p className="text-sm opacity-90">Events Catered</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg">99%</h4>
                  <p className="text-sm opacity-90">Client Satisfaction</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-lg">10,000+</h4>
                  <p className="text-sm opacity-90">Guests Served</p>
                </div>
              </div>

              <button
                onClick={() => alert('Catering quote request simulation!\n\nThank you for your interest in CatfishXpress Catering! Our team will contact you within 24 hours to discuss your event details and provide a customized quote.\n\nEvent planning made delicious! 🎉')}
                className="bg-white text-raisin px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 mb-4"
              >
                Get a Custom Catering Quote Today!
              </button>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => alert('Full catering menu download simulation - A comprehensive PDF menu would be downloaded here!')}
              className="border-2 border-gamboge text-gamboge hover:bg-gamboge hover:text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              📥 Download Full Catering Menu
            </button>
            <button
              onClick={() => alert('Catering gallery simulation - Beautiful photos of our catered events would be displayed here!')}
              className="border-2 border-rosso text-rosso hover:bg-rosso hover:text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              📸 View Our Catering Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
