
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import OrderingSection from '../components/Order/OrderingSection';

const Order = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <OrderingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Order;
