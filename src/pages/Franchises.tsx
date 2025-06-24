import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Store, TrendingUp, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const Franchises = () => {
  const benefits = [
    {
      icon: <Store className="text-gamboge" size={48} />,
      title: 'Proven Business Model',
      description: 'Join a successful and tested restaurant concept'
    },
    {
      icon: <TrendingUp className="text-rosso" size={48} />,
      title: 'Growing Market',
      description: 'Tap into Nigeria\'s expanding food service industry'
    },
    {
      icon: <Users className="text-freshness" size={48} />,
      title: 'Full Support',
      description: 'Training, marketing, and operational support included'
    },
    {
      icon: <Award className="text-gamboge" size={48} />,
      title: 'Strong Brand',
      description: 'Leverage our established brand recognition'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gamboge to-rosso text-white">
          <div className="container mx-auto px-4 text-center">
            <Store className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Own a <span className="text-white">CatfishXpress</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Bring the X-Factor to your community with our franchise opportunity
            </p>
            <button className="bg-white text-raisin px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>

        {/* Why Franchise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why <span className="text-gamboge">Franchise</span> with Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-lg border">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Details */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Investment <span className="text-gamboge">Details</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Initial Investment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Franchise Fee</span>
                    <span className="font-semibold text-foreground">₦2,500,000</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Equipment & Setup</span>
                    <span className="font-semibold text-foreground">₦5,000,000</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Initial Marketing</span>
                    <span className="font-semibold text-foreground">₦500,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-lg font-bold text-gamboge">₦8,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Ongoing Fees</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Royalty Fee</span>
                    <span className="font-semibold text-foreground">5% of gross sales</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Marketing Fund</span>
                    <span className="font-semibold text-foreground">2% of gross sales</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Support Fee</span>
                    <span className="font-semibold text-foreground">₦100,000/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Franchise <span className="text-gamboge">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: 1, title: 'Initial Inquiry', desc: 'Submit your interest form' },
                { step: 2, title: 'Review & Qualification', desc: 'We review your application' },
                { step: 3, title: 'Discovery Day', desc: 'Visit our headquarters' },
                { step: 4, title: 'Franchise Agreement', desc: 'Sign the partnership' },
                { step: 5, title: 'Grand Opening', desc: 'Launch your restaurant' }
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-gamboge text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gamboge text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our franchise development team today
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="mr-2" size={24} />
                <span className="text-lg font-semibold">+234 800 FRANCHISE</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={24} />
                <span className="text-lg">franchise@catfishxpress.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Franchises;
