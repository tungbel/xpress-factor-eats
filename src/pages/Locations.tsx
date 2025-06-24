
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LocationsSection from '../components/Locations/LocationsSection';

const Locations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
