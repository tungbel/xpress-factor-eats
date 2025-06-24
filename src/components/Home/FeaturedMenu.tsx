
import React from 'react';
import { Star, ChefHat } from 'lucide-react';

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Signature X-Press Catfish Bowl",
      description: "Our flagship dish featuring perfectly seasoned catfish fillet, served over jasmine rice with fresh vegetables and our secret X-Factor sauce",
      price: "₦3,500",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: "Grilled Catfish Supreme",
      description: "Premium catfish grilled to perfection with aromatic herbs, served with plantain and pepper sauce",
      price: "₦4,200",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      popular: false
    },
    {
      id: 3,
      name: "Catfish Pepper Soup Deluxe",
      description: "Traditional Nigerian pepper soup elevated with our farm-fresh catfish and authentic spice blend",
      price: "₦2,800",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      popular: true
    },
    {
      id: 4,
      name: "X-Factor Combo Platter",
      description: "The best of both worlds - grilled and fried catfish portions with sides and dipping sauces",
      price: "₦5,500",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <ChefHat className="text-gamboge mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-raisin">Featured Favorites</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most loved dishes, crafted with farm-fresh catfish and bursting with the X-Factor taste
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-gamboge to-rosso flex items-center justify-center">
                  <ChefHat size={60} className="text-white opacity-50" />
                </div>
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-rosso text-white px-2 py-1 rounded-full text-xs font-semibold">
                    🔥 Popular
                  </div>
                )}
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star size={14} className="text-yellow-500 fill-current mr-1" />
                  <span className="text-xs font-semibold text-raisin">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-raisin mb-2 group-hover:text-gamboge transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gamboge">{item.price}</span>
                  <button
                    className="bg-gamboge text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rosso transition-colors duration-200 transform hover:scale-105"
                    onClick={() => alert(`Added ${item.name} to cart! (Simulation)`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gamboge to-rosso text-white px-8 py-4 rounded-full font-bold text-lg hover:from-rosso hover:to-gamboge transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
