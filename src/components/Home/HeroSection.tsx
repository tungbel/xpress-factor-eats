
import React from 'react';
import { ChefHat, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gamboge via-rosso to-raisin overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <ChefHat size={60} className="text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Star size={40} className="text-white" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <Star size={50} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <ChefHat size={45} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Taste the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white animate-pulse">
                X-Factor!
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Premium catfish experience, farm-fresh from Afadapa Fishery
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <ChefHat className="mx-auto mb-3 text-yellow-200" size={40} />
              <h3 className="text-lg font-semibold mb-2">Farm Fresh</h3>
              <p className="text-sm text-gray-200">Direct from Afadapa Fishery</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <Star className="mx-auto mb-3 text-yellow-200" size={40} />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-200">Ready in minutes, not hours</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <Users className="mx-auto mb-3 text-yellow-200" size={40} />
              <h3 className="text-lg font-semibold mb-2">Made for You</h3>
              <p className="text-sm text-gray-200">Customized to perfection</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-raisin px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Menu
            </button>
            <button
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-raisin transform hover:scale-105 transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
