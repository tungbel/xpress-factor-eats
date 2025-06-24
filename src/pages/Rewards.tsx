
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LoyaltySection from '../components/Loyalty/LoyaltySection';

const Rewards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <LoyaltySection />
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
