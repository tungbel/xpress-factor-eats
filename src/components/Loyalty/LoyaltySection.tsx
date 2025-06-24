import React from 'react';
import { Star, Gift, Truck, Users, Award, Crown, Check } from 'lucide-react';

const LoyaltySection = () => {
  const benefits = [
    {
      icon: Star,
      title: "Earn X-Points",
      description: "Earn 1 X-Point for every ₦100 spent on delicious catfish meals",
      value: "1 point = ₦100"
    },
    {
      icon: Gift,
      title: "Free Meals & Treats",
      description: "Redeem points for your favorite dishes and exclusive member treats",
      value: "100 points = Free meal"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Members enjoy complimentary delivery on all orders over ₦2,000",
      value: "Always free for members"
    },
    {
      icon: Crown,
      title: "VIP Treatment",
      description: "Priority service, exclusive offers, and first access to new menu items",
      value: "Exclusive perks"
    },
    {
      icon: Award,
      title: "Birthday Rewards",
      description: "Special birthday treats and double points during your birthday month",
      value: "Monthly surprises"
    },
    {
      icon: Users,
      title: "Referral Bonuses",
      description: "Earn bonus points when you refer friends to the X-Factor experience",
      value: "500 bonus points"
    }
  ];

  const tiers = [
    {
      name: "Bronze X-Press",
      range: "0 - 999 points",
      color: "from-amber-600 to-amber-800",
      perks: ["Basic point earning", "Member-only offers", "Birthday treat"]
    },
    {
      name: "Silver X-Press",
      range: "1,000 - 2,999 points",
      color: "from-gray-400 to-gray-600",
      perks: ["1.25x point multiplier", "Free delivery", "Exclusive menu previews"]
    },
    {
      name: "Gold X-Press",
      range: "3,000 - 4,999 points",
      color: "from-yellow-400 to-yellow-600",
      perks: ["1.5x point multiplier", "Priority service", "Monthly free appetizer"]
    },
    {
      name: "Platinum X-Press",
      range: "5,000+ points",
      color: "from-purple-400 to-purple-600",
      perks: ["2x point multiplier", "VIP treatment", "Quarterly free meal"]
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up Free",
      description: "Join X-Press Rewards in seconds with just your name and phone number"
    },
    {
      step: "2",
      title: "Earn Points",
      description: "Collect X-Points with every purchase - ₦100 spent = 1 point earned"
    },
    {
      step: "3",
      title: "Level Up",
      description: "Advance through Bronze, Silver, Gold, and Platinum tiers for better rewards"
    },
    {
      step: "4",
      title: "Redeem & Enjoy",
      description: "Use points for free meals, exclusive offers, and special member perks"
    }
  ];

  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Star className="text-gamboge mr-3 animate-pulse" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-raisin">
              X-Press <span className="text-gamboge">Rewards</span>
            </h2>
            <Star className="text-gamboge ml-3 animate-pulse" size={40} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every meal brings you closer to amazing rewards! Join thousands of satisfied customers 
            who are earning points, unlocking perks, and enjoying the full X-Factor experience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-raisin mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-gamboge bg-opacity-10 text-gamboge px-4 py-2 rounded-full font-semibold text-sm">
                    {benefit.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Membership Tiers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Membership <span className="text-gamboge">Tiers</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-raisin mb-2">{tier.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{tier.range}</p>
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="text-sm text-gray-700 flex items-center">
                        <Check size={14} className="text-freshness mr-2 flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            How It <span className="text-gamboge">Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gamboge opacity-30"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-raisin mb-3 group-hover:text-gamboge transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gamboge to-rosso rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <Star className="absolute top-4 left-4 animate-pulse" size={30} />
            <Gift className="absolute top-4 right-4 animate-pulse delay-1000" size={25} />
            <Crown className="absolute bottom-4 left-4 animate-pulse delay-2000" size={35} />
            <Award className="absolute bottom-4 right-4 animate-pulse delay-500" size={28} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Earning Rewards?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join over 10,000 satisfied members who are already enjoying the X-Factor rewards experience!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">10,000+</h4>
                <p className="text-sm opacity-90">Happy Members</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">₦2M+</h4>
                <p className="text-sm opacity-90">Points Redeemed</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">500+</h4>
                <p className="text-sm opacity-90">Free Meals Daily</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Sign up simulation - Welcome to X-Press Rewards! 🎉')}
                className="bg-white text-raisin px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Join Free Today
              </button>
              <button
                onClick={() => alert('Member login simulation')}
                className="border-2 border-white text-white hover:bg-white hover:text-raisin px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Member Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
