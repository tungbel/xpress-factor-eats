
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MenuGrid from '../components/Menu/MenuGrid';

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <MenuGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
