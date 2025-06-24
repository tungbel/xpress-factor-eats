
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PreLaunchPopup from '../components/PreLaunchPopup';
import HeroSection from '../components/Home/HeroSection';
import FeaturedMenu from '../components/Home/FeaturedMenu';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import LoyaltyTeaser from '../components/Home/LoyaltyTeaser';
import MenuSection from '../components/Menu/MenuSection';
import OrderingSection from '../components/Order/OrderingSection';
import LoyaltySection from '../components/Loyalty/LoyaltySection';
import SubscriptionSection from '../components/Subscription/SubscriptionSection';
import CateringSection from '../components/Catering/CateringSection';
import LocationsSection from '../components/Locations/LocationsSection';
import PromotionsSection from '../components/Promotions/PromotionsSection';
import AboutSection from '../components/About/AboutSection';
import ContactSection from '../components/Contact/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PreLaunchPopup />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturedMenu />
        <WhyChooseUs />
        <LoyaltyTeaser />
        <MenuSection />
        <OrderingSection />
        <LoyaltySection />
        <SubscriptionSection />
        <CateringSection />
        <LocationsSection />
        <PromotionsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
