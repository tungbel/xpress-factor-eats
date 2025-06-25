
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Home/HeroSection';
import FeaturedMenu from '../components/Home/FeaturedMenu';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import LoyaltyTeaser from '../components/Home/LoyaltyTeaser';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturedMenu />
        <WhyChooseUs />
        <LoyaltyTeaser />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
