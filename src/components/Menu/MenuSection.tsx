
import React, { useState } from 'react';
import { ChefHat, Star, Filter } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'xpress', name: 'X-Press Mains', count: 6 },
    { id: 'bowls', name: 'Signature Bowls', count: 4 },
    { id: 'grilled', name: 'Grilled Plates', count: 5 },
    { id: 'snacks', name: 'Snacks', count: 4 },
    { id: 'combos', name: 'Combos', count: 3 },
    { id: 'sides', name: 'Sides & Drinks', count: 6 }
  ];

  const menuItems = {
    xpress: [
      {
        id: 1,
        name: "Classic X-Press Catfish",
        description: "Our signature fried catfish with special seasoning, served with steamed rice and vegetables",
        price: "₦3,200",
        spicy: false,
        popular: true,
        rating: 4.8
      },
      {
        id: 2,
        name: "Spicy X-Press Deluxe",
        description: "Extra spicy catfish with pepper sauce, plantains, and coleslaw",
        price: "₦3,800",
        spicy: true,
        popular: true,
        rating: 4.9
      },
      {
        id: 3,
        name: "Herb-Crusted X-Press",
        description: "Catfish fillet crusted with African herbs, served with jollof rice",
        price: "₦4,100",
        spicy: false,
        popular: false,
        rating: 4.7
      },
      {
        id: 4,
        name: "X-Press Supreme",
        description: "Premium catfish portion with three sides of your choice",
        price: "₦4,500",
        spicy: false,
        popular: false,
        rating: 4.8
      },
      {
        id: 5,
        name: "Smoky X-Press",
        description: "Smoked catfish with traditional sauce and native rice",
        price: "₦3,600",
        spicy: false,
        popular: true,
        rating: 4.6
      },
      {
        id: 6,
        name: "X-Press Fusion",
        description: "East meets West - Asian-inspired catfish with stir-fried vegetables",
        price: "₦4,200",
        spicy: false,
        popular: false,
        rating: 4.5
      }
    ],
    bowls: [
      {
        id: 7,
        name: "Power Bowl",
        description: "Grilled catfish over quinoa with fresh vegetables and avocado",
        price: "₦3,500",
        spicy: false,
        popular: true,
        rating: 4.9
      },
      {
        id: 8,
        name: "Tropical Bowl",
        description: "Coconut rice bowl with catfish, plantains, and mango salsa",
        price: "₦3,800",
        spicy: false,
        popular: true,
        rating: 4.7
      },
      {
        id: 9,
        name: "Spice Route Bowl",
        description: "Curry-spiced catfish with basmati rice and chickpeas",
        price: "₦3,600",
        spicy: true,
        popular: false,
        rating: 4.6
      },
      {
        id: 10,
        name: "Garden Fresh Bowl",
        description: "Light and healthy with grilled catfish and seasonal vegetables",
        price: "₦3,400",
        spicy: false,
        popular: false,
        rating: 4.8
      }
    ],
    grilled: [
      {
        id: 11,
        name: "Grilled Catfish Supreme",
        description: "Perfectly grilled whole catfish with pepper sauce and sides",
        price: "₦4,800",
        spicy: true,
        popular: true,
        rating: 4.9
      },
      {
        id: 12,
        name: "BBQ Catfish Platter",
        description: "BBQ-style grilled catfish with coleslaw and cornbread",
        price: "₦4,200",
        spicy: false,
        popular: true,
        rating: 4.7
      },
      {
        id: 13,
        name: "Lemon Herb Grilled",
        description: "Light and zesty grilled catfish with lemon herb seasoning",
        price: "₦3,900",
        spicy: false,
        popular: false,
        rating: 4.6
      },
      {
        id: 14,
        name: "Suya-Style Grilled",
        description: "Nigerian suya spices on grilled catfish with yam chips",
        price: "₦4,000",
        spicy: true,
        popular: true,
        rating: 4.8
      },
      {
        id: 15,
        name: "Mediterranean Grilled",
        description: "Olive oil and herb marinated catfish with Mediterranean sides",
        price: "₦4,300",
        spicy: false,
        popular: false,
        rating: 4.5
      }
    ],
    snacks: [
      {
        id: 16,
        name: "Catfish Bites",
        description: "Bite-sized fried catfish pieces with dipping sauce",
        price: "₦1,800",
        spicy: false,
        popular: true,
        rating: 4.7
      },
      {
        id: 17,
        name: "Fish & Chips X-Press",
        description: "Catfish strips with seasoned potato chips",
        price: "₦2,200",
        spicy: false,
        popular: true,
        rating: 4.6
      },
      {
        id: 18,
        name: "Spicy Fish Rolls",
        description: "Catfish wrapped in pastry with spicy filling",
        price: "₦1,500",
        spicy: true,
        popular: false,
        rating: 4.4
      },
      {
        id: 19,
        name: "Mini Fish Burgers",
        description: "Slider-sized catfish burgers (set of 3)",
        price: "₦2,000",
        spicy: false,
        popular: true,
        rating: 4.8
      }
    ],
    combos: [
      {
        id: 20,
        name: "Family Feast Combo",
        description: "Serves 4-6 people with mixed catfish preparations and sides",
        price: "₦12,500",
        spicy: false,
        popular: true,
        rating: 4.9
      },
      {
        id: 21,
        name: "Date Night Combo",
        description: "Perfect for two with grilled catfish, sides, and dessert",
        price: "₦7,800",
        spicy: false,
        popular: true,
        rating: 4.8
      },
      {
        id: 22,
        name: "Office Lunch Combo",
        description: "Individual combo with main, side, and drink",
        price: "₦4,200",
        spicy: false,
        popular: true,
        rating: 4.7
      }
    ],
    sides: [
      {
        id: 23,
        name: "Jollof Rice",
        description: "Traditional Nigerian jollof rice",
        price: "₦800",
        spicy: false,
        popular: true,
        rating: 4.6
      },
      {
        id: 24,
        name: "Fried Plantains",
        description: "Sweet fried plantains",
        price: "₦600",
        spicy: false,
        popular: true,
        rating: 4.5
      },
      {
        id: 25,
        name: "Coleslaw",
        description: "Fresh cabbage and carrot salad",
        price: "₦500",
        spicy: false,
        popular: false,
        rating: 4.3
      },
      {
        id: 26,
        name: "Yam Chips",
        description: "Crispy fried yam chips",
        price: "₦700",
        spicy: false,
        popular: true,
        rating: 4.4
      },
      {
        id: 27,
        name: "Fresh Juice",
        description: "Choice of orange, pineapple, or watermelon",
        price: "₦800",
        spicy: false,
        popular: true,
        rating: 4.7
      },
      {
        id: 28,
        name: "Soft Drinks",
        description: "Coke, Sprite, Fanta, or local options",
        price: "₦400",
        spicy: false,
        popular: true,
        rating: 4.2
      }
    ]
  };

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.values(menuItems).flat();
    }
    return menuItems[activeCategory] || [];
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-4">
            Our <span className="text-gamboge">X-Factor</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dish crafted with farm-fresh catfish from Afadapa Fishery, 
            seasoned to perfection with our signature X-Factor blend
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gamboge text-white shadow-lg'
                  : 'bg-white text-raisin hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Item Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-raisin group-hover:text-gamboge transition-colors mb-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {item.popular && (
                        <span className="text-xs bg-rosso text-white px-2 py-1 rounded-full font-semibold">
                          🔥 Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-semibold">
                          🌶️ Spicy
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gamboge">{item.price}</div>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => alert(`Added ${item.name} to cart! (Simulation)`)}
                    className="flex-1 bg-gamboge text-white py-2 px-4 rounded-full font-semibold hover:bg-rosso transition-colors transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => alert(`${item.name} details:\n\n${item.description}\n\nPrice: ${item.price}\nRating: ${item.rating}/5`)}
                    className="px-4 py-2 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <ChefHat size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gamboge to-rosso rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
            <p className="mb-6 opacity-90">
              Experience the X-Factor taste with our easy online ordering system
            </p>
            <button
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-raisin px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Your Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
