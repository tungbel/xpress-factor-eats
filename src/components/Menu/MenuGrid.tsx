
import React, { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import { useMenu } from '@/contexts/MenuContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const MenuGrid = () => {
  const { getMenuItemsByCategory, menuItems } = useMenu();
  const { addItem } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All', dbCategory: '' },
    { id: 'main', name: 'X-Press Mains', dbCategory: 'Main' },
    { id: 'bowls', name: 'Signature Bowls', dbCategory: 'Bowls' },
    { id: 'grilled', name: 'Grilled Plates', dbCategory: 'Grilled' },
    { id: 'snacks', name: 'Snacks', dbCategory: 'Snacks' },
    { id: 'combos', name: 'Combos', dbCategory: 'Combos' },
    { id: 'sides', name: 'Sides', dbCategory: 'Sides' },
    { id: 'drinks', name: 'Drinks', dbCategory: 'Beverages' }
  ];

  const getItemsForCategory = (categoryId: string) => {
    if (categoryId === 'all') {
      return menuItems.filter(item => item.available);
    }
    const category = categories.find(cat => cat.id === categoryId);
    return category ? getMenuItemsByCategory(category.dbCategory) : [];
  };

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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-raisin mb-4">
          Our <span className="text-gamboge">Menu</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our freshly prepared catfish dishes, made with premium ingredients and our signature X-Factor taste
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="text-sm font-medium"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getItemsForCategory(category.id).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <Star size={14} className="text-yellow-500 fill-current mr-1" />
                      <span className="text-xs font-semibold text-raisin">4.8</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-raisin mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gamboge">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gamboge text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rosso transition-colors duration-200 transform hover:scale-105 flex items-center"
                      >
                        <Plus size={16} className="mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {getItemsForCategory(category.id).length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                <p className="text-gray-500">Items will appear here when added from the admin panel</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuGrid;
