
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PreLaunchPopup from '../components/PreLaunchPopup';

const PreLaunch = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section for Pre-Launch */}
        <section className="relative bg-gradient-to-r from-gamboge to-rosso text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Ready for the X-Factor Experience!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Be among the first to taste our signature catfish creations. Join our exclusive pre-launch program to sample our menus, provide feedback, and help us build the perfect QSR experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Sample Our Menus</h3>
                <p>Taste test our signature dishes and be part of perfecting our recipes before we launch.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Share Feedback</h3>
                <p>Your opinions matter! Help us refine our offerings based on real customer preferences.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Build with Us</h3>
                <p>Be part of building our brand presence and creating the ultimate catfish experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-raisin mb-6">
              Ready to Join the X-Factor Experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sign up now for exclusive early access, special discounts, and the chance to influence our menu before we open our permanent QSR store.
            </p>
            <button 
              onClick={() => {
                // Trigger the popup manually
                const popup = document.querySelector('[data-popup]');
                if (popup) popup.classList.remove('hidden');
              }}
              className="bg-gradient-to-r from-gamboge to-rosso text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-rosso hover:to-gamboge transition-all duration-300 transform hover:scale-105"
            >
              Join Our Pre-Launch Program
            </button>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Always show popup on this page */}
      <div data-popup>
        <PreLaunchPopup />
      </div>
    </div>
  );
};

export default PreLaunch;
