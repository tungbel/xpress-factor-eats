
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
}

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  getMenuItemsByCategory: (category: string) => MenuItem[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Classic X-Press',
      description: 'Our signature catfish with special X-Press seasoning',
      price: 4200,
      category: 'Main',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      available: true
    },
    {
      id: '2',
      name: 'Spicy Deluxe Bowl',
      description: 'Premium catfish with spicy sauce and sides',
      price: 3800,
      category: 'Main',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      available: true
    },
    {
      id: '3',
      name: 'Grilled Supreme',
      description: 'Perfectly grilled catfish with herbs',
      price: 4800,
      category: 'Main',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      available: true
    },
    {
      id: '4',
      name: 'Catfish Fries',
      description: 'Crispy seasoned fries',
      price: 1500,
      category: 'Sides',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
      available: true
    },
    {
      id: '5',
      name: 'Fresh Juice',
      description: 'Freshly squeezed orange juice',
      price: 800,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423',
      available: true
    }
  ]);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString()
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id: string, updatedItem: Partial<MenuItem>) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const getMenuItemsByCategory = (category: string) => {
    return menuItems.filter(item => item.category === category && item.available);
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      getMenuItemsByCategory
    }}>
      {children}
    </MenuContext.Provider>
  );
};
