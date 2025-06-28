
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          address: string | null;
          role: 'customer' | 'admin';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          address?: string | null;
          role?: 'customer' | 'admin';
        };
        Update: {
          full_name?: string | null;
          phone?: string | null;
          address?: string | null;
          role?: 'customer' | 'admin';
        };
      };
      menu_items: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          category: string;
          image_url: string | null;
          available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          price: number;
          category: string;
          image_url?: string | null;
          available?: boolean;
        };
        Update: {
          name?: string;
          description?: string | null;
          price?: number;
          category?: string;
          image_url?: string | null;
          available?: boolean;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          order_number: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          customer_address: string | null;
          order_type: 'delivery' | 'pickup';
          status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
          subtotal: number;
          tax: number;
          delivery_fee: number;
          total: number;
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
          payment_method: string | null;
          stripe_session_id: string | null;
          notes: string | null;
          estimated_delivery_time: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: string | null;
          order_number: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          customer_address?: string | null;
          order_type: 'delivery' | 'pickup';
          status?: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
          subtotal: number;
          tax?: number;
          delivery_fee?: number;
          total: number;
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded';
          payment_method?: string | null;
          stripe_session_id?: string | null;
          notes?: string | null;
          estimated_delivery_time?: string | null;
        };
        Update: {
          status?: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded';
          payment_method?: string | null;
          stripe_session_id?: string | null;
          notes?: string | null;
          estimated_delivery_time?: string | null;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          menu_item_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          customizations: any;
          created_at: string;
        };
        Insert: {
          order_id: string;
          menu_item_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          customizations?: any;
        };
        Update: {
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          customizations?: any;
        };
      };
      customers: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          address: string | null;
          total_orders: number;
          total_spent: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          email: string;
          full_name: string;
          phone?: string | null;
          address?: string | null;
          total_orders?: number;
          total_spent?: number;
        };
        Update: {
          email?: string;
          full_name?: string;
          phone?: string | null;
          address?: string | null;
          total_orders?: number;
          total_spent?: number;
          updated_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string | null;
          order_id: string | null;
          type: 'order_confirmed' | 'order_preparing' | 'order_ready' | 'order_delivered' | 'payment_received';
          title: string;
          message: string;
          read: boolean;
          created_at: string;
        };
        Insert: {
          user_id?: string | null;
          order_id?: string | null;
          type: 'order_confirmed' | 'order_preparing' | 'order_ready' | 'order_delivered' | 'payment_received';
          title: string;
          message: string;
          read?: boolean;
        };
        Update: {
          read?: boolean;
        };
      };
      loyalty_points: {
        Row: {
          id: string;
          user_id: string;
          points: number;
          total_earned: number;
          total_redeemed: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          points?: number;
          total_earned?: number;
          total_redeemed?: number;
        };
        Update: {
          points?: number;
          total_earned?: number;
          total_redeemed?: number;
          updated_at?: string;
        };
      };
      promotions: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          discount_type: 'percentage' | 'fixed_amount' | null;
          discount_value: number | null;
          minimum_order_amount: number | null;
          start_date: string | null;
          end_date: string | null;
          active: boolean;
          created_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          discount_type?: 'percentage' | 'fixed_amount' | null;
          discount_value?: number | null;
          minimum_order_amount?: number | null;
          start_date?: string | null;
          end_date?: string | null;
          active?: boolean;
        };
        Update: {
          name?: string;
          description?: string | null;
          discount_type?: 'percentage' | 'fixed_amount' | null;
          discount_value?: number | null;
          minimum_order_amount?: number | null;
          start_date?: string | null;
          end_date?: string | null;
          active?: boolean;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
