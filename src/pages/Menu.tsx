
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MenuSection from '../components/Menu/MenuSection';

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
