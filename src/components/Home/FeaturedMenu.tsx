
import React from 'react';
import { Star, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '@/contexts/MenuContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const FeaturedMenu = () => {
  const navigate = useNavigate();
  const { menuItems } = useMenu();
  const { addItem } = useCart();
  const { toast } = useToast();

  // Get featured items (first 4 main dishes)
  const featuredItems = menuItems.filter(item => item.category === 'Main' && item.available).slice(0, 4);

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: '🐟',
      quantity: 1
    });
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

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
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9';
                  }}
                />
                
                {/* Popular Badge */}
                <div className="absolute top-3 left-3 bg-rosso text-white px-2 py-1 rounded-full text-xs font-semibold">
                  🔥 Popular
                </div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star size={14} className="text-yellow-500 fill-current mr-1" />
                  <span className="text-xs font-semibold text-raisin">4.8</span>
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
                  <span className="text-2xl font-bold text-gamboge">₦{item.price.toLocaleString()}</span>
                  <button
                    className="bg-gamboge text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rosso transition-colors duration-200 transform hover:scale-105"
                    onClick={() => handleAddToCart(item)}
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
            onClick={() => navigate('/menu')}
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
