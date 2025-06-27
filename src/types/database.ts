
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
      };
    };
  };
}
