import React, { useState } from 'react';
import { ChefHat, Star, Filter, Info } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const { addItem } = useCart();

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
        price: 3200,
        spicy: false,
        popular: true,
        rating: 4.8,
        image: "🐟",
        imageUrl: "https://images.unsplash.com/photo-1544943813-4eb3e717c90f?w=400",
        nutrition: {
          calories: 450,
          protein: "35g",
          carbs: "25g",
          fat: "22g",
          fiber: "3g",
          sodium: "850mg"
        },
        ingredients: ["Fresh Catfish", "Rice", "Mixed Vegetables", "Special Seasoning", "Vegetable Oil"],
        allergens: ["Fish", "Gluten"]
      },
      {
        id: 2,
        name: "Spicy X-Press Deluxe",
        description: "Extra spicy catfish with pepper sauce, plantains, and coleslaw",
        price: 3800,
        spicy: true,
        popular: true,
        rating: 4.9,
        image: "🌶️",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
        nutrition: {
          calories: 520,
          protein: "38g",
          carbs: "35g",
          fat: "26g",
          fiber: "5g",
          sodium: "1200mg"
        },
        ingredients: ["Fresh Catfish", "Plantains", "Coleslaw", "Pepper Sauce", "Spices"],
        allergens: ["Fish", "Eggs"]
      },
      {
        id: 3,
        name: "Herb-Crusted X-Press",
        description: "Catfish fillet crusted with African herbs, served with jollof rice",
        price: 4100,
        spicy: false,
        popular: false,
        rating: 4.7,
        image: "🌿",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "20g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Catfish Fillet", "African Herbs", "Jollof Rice"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 4,
        name: "X-Press Supreme",
        description: "Premium catfish portion with three sides of your choice",
        price: 4500,
        spicy: false,
        popular: false,
        rating: 4.8,
        image: "👑",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 500,
          protein: "35g",
          carbs: "30g",
          fat: "20g",
          fiber: "3g",
          sodium: "800mg"
        },
        ingredients: ["Catfish", "Sides"],
        allergens: ["Fish"]
      },
      {
        id: 5,
        name: "Smoky X-Press",
        description: "Smoked catfish with traditional sauce and native rice",
        price: 3600,
        spicy: false,
        popular: true,
        rating: 4.6,
        image: "🔥",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 450,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Smoked Catfish", "Traditional Sauce", "Native Rice"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 6,
        name: "X-Press Fusion",
        description: "East meets West - Asian-inspired catfish with stir-fried vegetables",
        price: 4200,
        spicy: false,
        popular: false,
        rating: 4.5,
        image: "🍱",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "20g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Asian-Inspired Catfish", "Stir-Fried Vegetables"],
        allergens: ["Fish"]
      }
    ],
    bowls: [
      {
        id: 7,
        name: "Power Bowl",
        description: "Grilled catfish over quinoa with fresh vegetables and avocado",
        price: 3500,
        spicy: false,
        popular: true,
        rating: 4.9,
        image: "🍲",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 380,
          protein: "32g",
          carbs: "28g",
          fat: "18g",
          fiber: "8g",
          sodium: "650mg"
        },
        ingredients: ["Grilled Catfish", "Quinoa", "Avocado", "Mixed Greens", "Cherry Tomatoes"],
        allergens: ["Fish"]
      },
      {
        id: 8,
        name: "Tropical Bowl",
        description: "Coconut rice bowl with catfish, plantains, and mango salsa",
        price: 3800,
        spicy: false,
        popular: true,
        rating: 4.7,
        image: "🌴",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Coconut Rice", "Catfish", "Plantains", "Mango Salsa"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 9,
        name: "Spice Route Bowl",
        description: "Curry-spiced catfish with basmati rice and chickpeas",
        price: 3600,
        spicy: true,
        popular: false,
        rating: 4.6,
        image: "🍛",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Curry-Spiced Catfish", "Basmati Rice", "Chickpeas"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 10,
        name: "Garden Fresh Bowl",
        description: "Light and healthy with grilled catfish and seasonal vegetables",
        price: 3400,
        spicy: false,
        popular: false,
        rating: 4.8,
        image: "🌿",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 350,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Grilled Catfish", "Seasonal Vegetables"],
        allergens: ["Fish"]
      }
    ],
    grilled: [
      {
        id: 11,
        name: "Grilled Catfish Supreme",
        description: "Perfectly grilled whole catfish with pepper sauce and sides",
        price: 4800,
        spicy: true,
        popular: true,
        rating: 4.9,
        image: "🔥",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 500,
          protein: "35g",
          carbs: "30g",
          fat: "20g",
          fiber: "3g",
          sodium: "800mg"
        },
        ingredients: ["Grilled Catfish", "Pepper Sauce", "Sides"],
        allergens: ["Fish"]
      },
      {
        id: 12,
        name: "BBQ Catfish Platter",
        description: "BBQ-style grilled catfish with coleslaw and cornbread",
        price: 4200,
        spicy: false,
        popular: true,
        rating: 4.7,
        image: "🍳",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["BBQ-Style Grilled Catfish", "Coleslaw", "Cornbread"],
        allergens: ["Fish"]
      },
      {
        id: 13,
        name: "Lemon Herb Grilled",
        description: "Light and zesty grilled catfish with lemon herb seasoning",
        price: 3900,
        spicy: false,
        popular: false,
        rating: 4.6,
        image: "🌿",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 350,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Grilled Catfish", "Lemon Herb Seasoning"],
        allergens: ["Fish"]
      },
      {
        id: 14,
        name: "Suya-Style Grilled",
        description: "Nigerian suya spices on grilled catfish with yam chips",
        price: 4000,
        spicy: true,
        popular: true,
        rating: 4.8,
        image: "🌶️",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Grilled Catfish", "Nigerian Suya Spices", "Yam Chips"],
        allergens: ["Fish"]
      },
      {
        id: 15,
        name: "Mediterranean Grilled",
        description: "Olive oil and herb marinated catfish with Mediterranean sides",
        price: 4300,
        spicy: false,
        popular: false,
        rating: 4.5,
        image: "🌿",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Olive Oil and Herb Marinated Catfish", "Mediterranean Sides"],
        allergens: ["Fish"]
      }
    ],
    snacks: [
      {
        id: 16,
        name: "Catfish Bites",
        description: "Bite-sized fried catfish pieces with dipping sauce",
        price: 1800,
        spicy: false,
        popular: true,
        rating: 4.7,
        image: "🐟",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 200,
          protein: "15g",
          carbs: "10g",
          fat: "10g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Fried Catfish Pieces", "Dipping Sauce"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 17,
        name: "Fish & Chips X-Press",
        description: "Catfish strips with seasoned potato chips",
        price: 2200,
        spicy: false,
        popular: true,
        rating: 4.6,
        image: "🍟",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 300,
          protein: "20g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "600mg"
        },
        ingredients: ["Catfish Strips", "Seasoned Potato Chips"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 18,
        name: "Spicy Fish Rolls",
        description: "Catfish wrapped in pastry with spicy filling",
        price: 1500,
        spicy: true,
        popular: false,
        rating: 4.4,
        image: "🐟",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 250,
          protein: "18g",
          carbs: "20g",
          fat: "12g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Catfish", "Pastry", "Spicy Filling"],
        allergens: ["Fish", "Dairy"]
      },
      {
        id: 19,
        name: "Mini Fish Burgers",
        description: "Slider-sized catfish burgers (set of 3)",
        price: 2000,
        spicy: false,
        popular: true,
        rating: 4.8,
        image: "🍔",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 300,
          protein: "20g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "600mg"
        },
        ingredients: ["Catfish", "Burger Buns"],
        allergens: ["Fish", "Dairy"]
      }
    ],
    combos: [
      {
        id: 20,
        name: "Family Feast Combo",
        description: "Serves 4-6 people with mixed catfish preparations and sides",
        price: 12500,
        spicy: false,
        popular: true,
        rating: 4.9,
        image: "🍽️",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 600,
          protein: "40g",
          carbs: "50g",
          fat: "30g",
          fiber: "5g",
          sodium: "1000mg"
        },
        ingredients: ["Mixed Catfish Preparations", "Sides"],
        allergens: ["Fish"]
      },
      {
        id: 21,
        name: "Date Night Combo",
        description: "Perfect for two with grilled catfish, sides, and dessert",
        price: 7800,
        spicy: false,
        popular: true,
        rating: 4.8,
        image: "📅",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 500,
          protein: "35g",
          carbs: "30g",
          fat: "20g",
          fiber: "3g",
          sodium: "800mg"
        },
        ingredients: ["Grilled Catfish", "Sides", "Dessert"],
        allergens: ["Fish"]
      },
      {
        id: 22,
        name: "Office Lunch Combo",
        description: "Individual combo with main, side, and drink",
        price: 4200,
        spicy: false,
        popular: true,
        rating: 4.7,
        image: "🍽️",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "25g",
          fat: "15g",
          fiber: "2g",
          sodium: "700mg"
        },
        ingredients: ["Main", "Side", "Drink"],
        allergens: ["Fish"]
      }
    ],
    sides: [
      {
        id: 23,
        name: "Jollof Rice",
        description: "Traditional Nigerian jollof rice",
        price: 800,
        spicy: false,
        popular: true,
        rating: 4.6,
        image: "🍚",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 200,
          protein: "10g",
          carbs: "20g",
          fat: "5g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Rice", "Vegetables"],
        allergens: ["Dairy"]
      },
      {
        id: 24,
        name: "Fried Plantains",
        description: "Sweet fried plantains",
        price: 600,
        spicy: false,
        popular: true,
        rating: 4.5,
        image: "🍠",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 150,
          protein: "5g",
          carbs: "20g",
          fat: "5g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Plantains"],
        allergens: ["Dairy"]
      },
      {
        id: 25,
        name: "Coleslaw",
        description: "Fresh cabbage and carrot salad",
        price: 500,
        spicy: false,
        popular: false,
        rating: 4.3,
        image: "🥗",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 100,
          protein: "5g",
          carbs: "10g",
          fat: "1g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Cabbage", "Carrots"],
        allergens: ["Dairy"]
      },
      {
        id: 26,
        name: "Yam Chips",
        description: "Crispy fried yam chips",
        price: 700,
        spicy: false,
        popular: true,
        rating: 4.4,
        image: "🍠",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 150,
          protein: "5g",
          carbs: "20g",
          fat: "5g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Yam Chips"],
        allergens: ["Dairy"]
      },
      {
        id: 27,
        name: "Fresh Juice",
        description: "Choice of orange, pineapple, or watermelon",
        price: 800,
        spicy: false,
        popular: true,
        rating: 4.7,
        image: "🍊",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 100,
          protein: "5g",
          carbs: "10g",
          fat: "1g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Juice"],
        allergens: ["Dairy"]
      },
      {
        id: 28,
        name: "Soft Drinks",
        description: "Coke, Sprite, Fanta, or local options",
        price: 400,
        spicy: false,
        popular: true,
        rating: 4.2,
        image: "🥤",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        nutrition: {
          calories: 100,
          protein: "5g",
          carbs: "10g",
          fat: "1g",
          fiber: "1g",
          sodium: "500mg"
        },
        ingredients: ["Soft Drinks"],
        allergens: ["Dairy"]
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

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    });
  };

  return (
    <>
      <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-raisin dark:text-white mb-4">
              Our <span className="text-gamboge">X-Factor</span> Menu
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                    : 'bg-white dark:bg-gray-800 text-raisin dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Item Image */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="hidden w-full h-full bg-gradient-to-r from-gamboge to-rosso items-center justify-center text-white text-6xl"
                  >
                    {item.image}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
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

                {/* Item Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-raisin dark:text-white group-hover:text-gamboge transition-colors mb-1">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gamboge">₦{item.price.toLocaleString()}</div>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-gamboge text-white py-2 px-4 rounded-full font-semibold hover:bg-rosso transition-colors transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="px-4 py-2 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                    >
                      <Info size={16} />
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

      {/* Item Details Dialog */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{selectedItem.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-gamboge to-rosso items-center justify-center text-white text-6xl">
                  {selectedItem.image}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedItem.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Calories:</span> {selectedItem.nutrition?.calories}
                  </div>
                  <div>
                    <span className="font-medium">Protein:</span> {selectedItem.nutrition?.protein}
                  </div>
                  <div>
                    <span className="font-medium">Carbs:</span> {selectedItem.nutrition?.carbs}
                  </div>
                  <div>
                    <span className="font-medium">Fat:</span> {selectedItem.nutrition?.fat}
                  </div>
                  <div>
                    <span className="font-medium">Fiber:</span> {selectedItem.nutrition?.fiber}
                  </div>
                  <div>
                    <span className="font-medium">Sodium:</span> {selectedItem.nutrition?.sodium}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Ingredients</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedItem.ingredients?.join(', ')}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Allergens</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedItem.allergens?.join(', ')}
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-2xl font-bold text-gamboge">
                  ₦{selectedItem.price.toLocaleString()}
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="bg-gamboge text-white px-6 py-2 rounded-full font-semibold hover:bg-rosso transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default MenuSection;
