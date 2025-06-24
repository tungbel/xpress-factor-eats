
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PromotionsSection from '../components/Promotions/PromotionsSection';

const Promos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <PromotionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Promos;
