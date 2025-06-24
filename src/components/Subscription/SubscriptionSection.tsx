
import React, { useState } from 'react';
import { Calendar, Truck, Star, Gift, CheckCircle, Clock } from 'lucide-react';

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('weekly');

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly X-Press',
      frequency: 'Every Week',
      meals: 7,
      price: 18000,
      savings: '₦2,500',
      popular: false,
      description: 'Perfect for individuals who want fresh catfish weekly'
    },
    {
      id: 'biweekly',
      name: 'Bi-Weekly Feast',
      frequency: 'Every 2 Weeks',
      meals: 14,
      price: 32000,
      savings: '₦6,800',
      popular: true,
      description: 'Most popular choice for families and catfish lovers'
    },
    {
      id: 'monthly',
      name: 'Monthly Deluxe',
      frequency: 'Every Month',
      meals: 30,
      price: 65000,
      savings: '₦16,500',
      popular: false,
      description: 'Best value for the ultimate X-Factor experience'
    }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose your delivery days and easily modify or pause anytime"
    },
    {
      icon: Truck,
      title: "Priority Delivery",
      description: "Subscribers get first priority with free delivery on all orders"
    },
    {
      icon: Star,
      title: "Exclusive Menu Items",
      description: "Access to subscriber-only dishes and seasonal specialties"
    },
    {
      icon: Gift,
      title: "Member Perks",
      description: "Extra X-Points, surprise treats, and exclusive discounts"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Choose Your Plan",
      description: "Select the meal plan that fits your lifestyle and appetite",
      icon: Calendar
    },
    {
      step: 2,
      title: "Customize Preferences",
      description: "Set your favorite dishes, dietary preferences, and delivery schedule",
      icon: Star
    },
    {
      step: 3,
      title: "Enjoy Regular Delivery",
      description: "Fresh catfish meals delivered right to your door on schedule",
      icon: Truck
    },
    {
      step: 4,
      title: "Manage Anytime",
      description: "Pause, modify, or cancel your subscription with full flexibility",
      icon: CheckCircle
    }
  ];

  const features = [
    "🐟 Farm-fresh catfish from Afadapa Fishery",
    "🚚 Free priority delivery",
    "⭐ Exclusive subscriber menu items",
    "🎁 Bonus X-Points with every delivery",
    "📅 Flexible scheduling and modifications",
    "💰 Significant savings vs. individual orders",
    "🔄 Pause or cancel anytime",
    "👨‍🍳 Chef-curated meal variety"
  ];

  return (
    <section id="subscription" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Calendar className="text-gamboge mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-raisin">
              Meal <span className="text-gamboge">Subscriptions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Never run out of your favorite catfish meals! Subscribe and save with regular deliveries 
            of farm-fresh X-Factor goodness, plus exclusive perks just for subscribers.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-4 ring-gamboge' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-rosso text-white px-4 py-1 rounded-b-lg font-semibold text-sm">
                  🔥 Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-raisin mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gamboge">₦{plan.price.toLocaleString()}</span>
                    <span className="text-gray-500">/{plan.frequency.toLowerCase()}</span>
                  </div>
                  <div className="bg-freshness bg-opacity-10 text-freshness px-4 py-2 rounded-full font-semibold text-sm inline-block">
                    Save {plan.savings}
                  </div>
                </div>

                {/* Plan Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Meals Included</span>
                    <span className="font-semibold">{plan.meals} meals</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Delivery Frequency</span>
                    <span className="font-semibold">{plan.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cost per Meal</span>
                    <span className="font-semibold text-gamboge">₦{Math.round(plan.price / plan.meals).toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    alert(`Selected ${plan.name}! Subscription setup simulation - You'll save ${plan.savings} compared to individual orders.`);
                  }}
                  className={`w-full py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gamboge to-rosso text-white hover:from-rosso hover:to-gamboge'
                      : 'bg-gamboge text-white hover:bg-rosso'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Subscriber <span className="text-gamboge">Benefits</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-raisin mb-3 group-hover:text-gamboge transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            How It <span className="text-gamboge">Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group relative">
                  <div className="w-16 h-16 bg-white border-4 border-gamboge rounded-full flex items-center justify-center mx-auto mb-4 text-gamboge text-2xl font-bold group-hover:bg-gamboge group-hover:text-white transition-all">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gamboge opacity-30"></div>
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

        {/* Features List */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-center text-raisin mb-8">
            What's <span className="text-gamboge">Included</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-lg">{feature.split(' ')[0]}</span>
                <span className="text-gray-700">{feature.substring(feature.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Frequently Asked <span className="text-gamboge">Questions</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I pause or cancel my subscription?",
                answer: "Absolutely! You have full control over your subscription. Pause anytime for up to 3 months or cancel with no penalties."
              },
              {
                question: "How far in advance can I modify my delivery?",
                answer: "You can modify your next delivery up to 24 hours before the scheduled delivery time through our app or website."
              },
              {
                question: "What if I'm not satisfied with a meal?",
                answer: "We stand behind every meal with our X-Factor guarantee. If you're not 100% satisfied, we'll replace it or refund you."
              },
              {
                question: "Are there any setup fees or commitments?",
                answer: "No setup fees and no long-term commitments. Start, pause, or cancel your subscription anytime with complete flexibility."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-raisin mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-raisin to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Calendar className="absolute top-6 left-6 animate-pulse" size={40} />
            <Clock className="absolute top-6 right-6 animate-pulse delay-1000" size={35} />
            <Gift className="absolute bottom-6 left-6 animate-pulse delay-2000" size={30} />
            <Star className="absolute bottom-6 right-6 animate-pulse delay-500" size={35} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Subscribe & Save?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of subscribers who never worry about their next delicious catfish meal. 
              Start your subscription today and taste the convenience!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">500+</h4>
                <p className="text-sm opacity-90">Active Subscribers</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">98%</h4>
                <p className="text-sm opacity-90">Satisfaction Rate</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-lg">₦50K+</h4>
                <p className="text-sm opacity-90">Average Annual Savings</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Subscription signup simulation - Welcome to X-Press Subscriptions! 🎉')}
                className="bg-gamboge hover:bg-rosso text-white px-8 py-4 rounded-full font-bold transition-colors transform hover:scale-105"
              >
                Start My Subscription
              </button>
              <button
                onClick={() => alert('More info simulation - Contact our subscription specialists!')}
                className="border-2 border-white text-white hover:bg-white hover:text-raisin px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
