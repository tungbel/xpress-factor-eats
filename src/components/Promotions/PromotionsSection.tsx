
import React from 'react';
import { Gift, Clock, Users, Star, Calendar, Percent } from 'lucide-react';

const PromotionsSection = () => {
  const currentDeals = [
    {
      id: 1,
      title: "Grand Opening Special",
      description: "50% off your first order when you try CatfishXpress for the first time",
      discount: "50% OFF",
      validUntil: "Valid until Dec 31, 2024",
      code: "WELCOME50",
      terms: "First-time customers only. Minimum order ₦2,000. Cannot be combined with other offers.",
      icon: Gift,
      color: "from-gamboge to-rosso",
      popular: true
    },
    {
      id: 2,
      title: "Family Feast Friday",
      description: "Every Friday, get our Family Combo for 4 people at a special discounted price",
      discount: "₦3,000 OFF",
      validUntil: "Every Friday",
      code: "FAMILYFRIDAY",
      terms: "Valid only on Fridays. Family Combo includes 4 mains, 4 sides, and drinks.",
      icon: Users,
      color: "from-freshness to-gamboge",
      popular: false
    },
    {
      id: 3,
      title: "Student Power Lunch",
      description: "Show your student ID and get 25% off all lunch orders between 11 AM - 3 PM",
      discount: "25% OFF",
      validUntil: "Ongoing for students",
      code: "STUDENT25",
      terms: "Valid student ID required. Lunch hours only (11 AM - 3 PM). Dine-in and takeaway.",
      icon: Clock,
      color: "from-rosso to-raisin",
      popular: true
    },
    {
      id: 4,
      title: "X-Press Loyalty Double Points",
      description: "Join our loyalty program and earn double X-Points on all purchases this month",
      discount: "2X POINTS",
      validUntil: "This month only",
      code: "DOUBLE2024",
      terms: "Must be X-Press Rewards member. Double points apply to all purchases in December.",
      icon: Star,
      color: "from-purple-500 to-gamboge",
      popular: false
    },
    {
      id: 5,
      title: "Catering Early Bird",
      description: "Book your catering event 2 weeks in advance and save big on your total bill",
      discount: "15% OFF",
      validUntil: "Advanced bookings",
      code: "EARLYBIRD15",
      terms: "Minimum 20 guests. Must book at least 14 days in advance. Subject to availability.",
      icon: Calendar,
      color: "from-raisin to-freshness",
      popular: false
    },
    {
      id: 6,
      title: "Refer a Friend Bonus",
      description: "Refer friends to CatfishXpress and both of you get rewarded with free meals",
      discount: "FREE MEAL",
      validUntil: "Ongoing program",
      code: "REFER2024",
      terms: "Friend must make their first purchase. Both referrer and referee get free meal voucher.",
      icon: Users,
      color: "from-gamboge to-freshness",
      popular: true
    }
  ];

  const seasonalPromotions = [
    {
      season: "Holiday Special",
      title: "New Year, New Flavors",
      description: "Celebrate the new year with our limited-time festive menu",
      image: "🎊"
    },
    {
      season: "Valentine's Day",
      title: "Date Night Deluxe",
      description: "Romantic dinner packages for couples who love great catfish",
      image: "💕"
    },
    {
      season: "Independence Day",
      title: "Nigerian Pride Menu",
      description: "Celebrating our heritage with traditional catfish preparations",
      image: "🇳🇬"
    }
  ];

  return (
    <section id="promos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Percent className="text-gamboge mr-3 animate-pulse" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-raisin">
              Current <span className="text-gamboge">Promotions</span>
            </h2>
            <Gift className="text-rosso ml-3 animate-pulse" size={40} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on these amazing deals! From grand opening specials to loyalty rewards, 
            we've got delicious ways to save on your X-Factor experience.
          </p>
        </div>

        {/* Current Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentDeals.map((deal) => {
            const Icon = deal.icon;
            return (
              <div
                key={deal.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden relative"
              >
                {/* Popular Badge */}
                {deal.popular && (
                  <div className="absolute top-4 right-4 bg-rosso text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    🔥 Popular
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${deal.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-2 left-2 opacity-20">
                    <Icon size={40} />
                  </div>
                  <div className="relative z-10">
                    <div className="text-right mb-2">
                      <span className="text-2xl font-bold">{deal.discount}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{deal.title}</h3>
                    <p className="text-sm opacity-90">{deal.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-raisin">Promo Code:</span>
                      <span className="bg-gamboge bg-opacity-10 text-gamboge px-3 py-1 rounded-full text-sm font-bold">
                        {deal.code}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <Clock size={14} className="inline mr-1" />
                      {deal.validUntil}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-raisin mb-2">Terms & Conditions:</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{deal.terms}</p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => alert(`Promo code ${deal.code} copied to clipboard!\n\n${deal.title}\n${deal.description}\n\nUse code: ${deal.code}\n${deal.validUntil}`)}
                      className="flex-1 bg-gamboge text-white py-2 px-4 rounded-full font-semibold hover:bg-rosso transition-colors"
                    >
                      Use Code
                    </button>
                    <button
                      onClick={() => alert(`Sharing ${deal.title}!\n\nCheck out this amazing deal at CatfishXpress: ${deal.discount} with code ${deal.code}!\n\n${deal.description}`)}
                      className="px-4 py-2 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seasonal Promotions Preview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Upcoming <span className="text-gamboge">Seasonal</span> Promotions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalPromotions.map((promo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="text-4xl mb-4">{promo.image}</div>
                <h4 className="text-lg font-bold text-raisin mb-2">{promo.season}</h4>
                <h5 className="text-md font-semibold text-gamboge mb-3">{promo.title}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup for Exclusive Deals */}
        <div className="bg-gradient-to-r from-gamboge to-rosso rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Gift className="absolute top-6 left-6 animate-bounce" size={40} />
            <Star className="absolute top-6 right-6 animate-bounce delay-1000" size={35} />
            <Percent className="absolute bottom-6 left-6 animate-bounce delay-2000" size={30} />
            <Users className="absolute bottom-6 right-6 animate-bounce delay-500" size={35} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Deal!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Be the first to know about exclusive promotions, flash sales, and special member-only offers. 
              Join our mailing list and get 10% off your next order!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-raisin font-medium focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                onClick={() => alert('Newsletter signup simulation!\n\nThank you for subscribing to CatfishXpress deals! 📧\n\nYou\'ll receive exclusive offers and be the first to know about new promotions. Check your email for a 10% off welcome coupon! 🎉')}
                className="bg-white text-raisin px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe & Save
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">50+</h4>
                <p className="text-sm opacity-90">Active Promotions</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">5,000+</h4>
                <p className="text-sm opacity-90">Newsletter Subscribers</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">₦500K+</h4>
                <p className="text-sm opacity-90">Total Savings This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * All promotions are subject to terms and conditions. Offers cannot be combined unless specified. 
            CatfishXpress reserves the right to modify or cancel promotions at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
