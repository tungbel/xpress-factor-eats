
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CateringSection from '../components/Catering/CateringSection';

const Catering = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <CateringSection />
      </main>
      <Footer />
    </div>
  );
};

export default Catering;
