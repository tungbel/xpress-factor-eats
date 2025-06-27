
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
  loading: boolean;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => Promise<void>;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => Promise<void>;
  deleteMenuItem: (id: string) => Promise<void>;
  getMenuItemsByCategory: (category: string) => MenuItem[];
  refreshMenu: () => Promise<void>;
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
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true });

      if (error) {
        console.error('Error fetching menu items:', error);
        toast({
          title: "Error",
          description: "Failed to load menu items",
          variant: "destructive"
        });
        return;
      }

      const formattedItems = data.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description || '',
        price: item.price,
        category: item.category,
        image: item.image_url || 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        available: item.available
      }));

      setMenuItems(formattedItems);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const addMenuItem = async (item: Omit<MenuItem, 'id'>) => {
    try {
      const { error } = await supabase
        .from('menu_items')
        .insert({
          name: item.name,
          description: item.description,
          price: item.price,
          category: item.category,
          image_url: item.image,
          available: item.available
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to add menu item",
          variant: "destructive"
        });
        throw error;
      }

      toast({
        title: "Success",
        description: "Menu item added successfully"
      });

      await fetchMenuItems();
    } catch (error) {
      console.error('Error adding menu item:', error);
      throw error;
    }
  };

  const updateMenuItem = async (id: string, item: Partial<MenuItem>) => {
    try {
      const updateData: any = {};
      if (item.name !== undefined) updateData.name = item.name;
      if (item.description !== undefined) updateData.description = item.description;
      if (item.price !== undefined) updateData.price = item.price;
      if (item.category !== undefined) updateData.category = item.category;
      if (item.image !== undefined) updateData.image_url = item.image;
      if (item.available !== undefined) updateData.available = item.available;

      const { error } = await supabase
        .from('menu_items')
        .update(updateData)
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update menu item",
          variant: "destructive"
        });
        throw error;
      }

      toast({
        title: "Success",
        description: "Menu item updated successfully"
      });

      await fetchMenuItems();
    } catch (error) {
      console.error('Error updating menu item:', error);
      throw error;
    }
  };

  const deleteMenuItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete menu item",
          variant: "destructive"
        });
        throw error;
      }

      toast({
        title: "Success",
        description: "Menu item deleted successfully"
      });

      await fetchMenuItems();
    } catch (error) {
      console.error('Error deleting menu item:', error);
      throw error;
    }
  };

  const getMenuItemsByCategory = (category: string) => {
    return menuItems.filter(item => item.category === category && item.available);
  };

  const refreshMenu = async () => {
    await fetchMenuItems();
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      loading,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      getMenuItemsByCategory,
      refreshMenu
    }}>
      {children}
    </MenuContext.Provider>
  );
};
