import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Star, ShoppingBag, MapPin, Heart, Settings, User } from 'lucide-react';

interface AccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountDialog: React.FC<AccountDialogProps> = ({ isOpen, onClose }) => {
  const { user, signOut } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Mock user data - in real app this would come from backend
  const [profileData] = useState({
    loyaltyPoints: 1250,
    tier: 'Gold',
    totalOrders: 23,
    favoriteItems: ['Classic X-Press', 'Spicy Deluxe', 'Power Bowl'],
    addresses: [
      { id: 1, name: 'Home', address: '123 Victoria Island, Lagos', isDefault: true },
      { id: 2, name: 'Office', address: '456 Ikoyi, Lagos', isDefault: false }
    ],
    orderHistory: [
      { id: 'CX001', date: '2024-01-15', items: ['Classic X-Press', 'Sides'], total: 4200, status: 'Delivered' },
      { id: 'CX002', date: '2024-01-10', items: ['Spicy Deluxe Bowl'], total: 3800, status: 'Delivered' },
      { id: 'CX003', date: '2024-01-05', items: ['Family Combo'], total: 12500, status: 'Delivered' }
    ]
  });

  const handleLogout = () => {
    signOut();
    onClose();
  };

  // Get user display name from metadata or email
  const getUserDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    return user?.email || 'User';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <User size={20} />
            <span>My Account</span>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="loyalty">Rewards</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="bg-gradient-to-r from-gamboge to-rosso p-6 rounded-lg text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{getUserDisplayName()}</h3>
                  <p className="opacity-90">{user?.email}</p>
                  <div className="flex items-center mt-2">
                    <Star className="text-yellow-300 mr-1" size={16} />
                    <span className="text-sm">{profileData.tier} Member</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-gamboge">{profileData.totalOrders}</div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </div>
              <div className="bg-card p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-rosso">{profileData.loyaltyPoints}</div>
                <div className="text-sm text-muted-foreground">Reward Points</div>
              </div>
              <div className="bg-card p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-freshness">{profileData.tier}</div>
                <div className="text-sm text-muted-foreground">Member Tier</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Heart className="mr-2 text-rosso" size={16} />
                Favorite Items
              </h4>
              <div className="space-y-2">
                {profileData.favoriteItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span>{item}</span>
                    <Button variant="outline" size="sm">Reorder</Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <MapPin className="mr-2 text-gamboge" size={16} />
                Saved Addresses
              </h4>
              <div className="space-y-2">
                {profileData.addresses.map((address) => (
                  <div key={address.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium">{address.name}</div>
                      <div className="text-sm text-muted-foreground">{address.address}</div>
                    </div>
                    {address.isDefault && (
                      <span className="text-xs bg-gamboge text-white px-2 py-1 rounded-full">Default</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="text-gamboge" size={20} />
              <h3 className="text-lg font-semibold">Order History</h3>
            </div>
            {profileData.orderHistory.map((order) => (
              <div key={order.id} className="bg-card p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold">Order #{order.id}</div>
                    <div className="text-sm text-muted-foreground">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₦{order.total.toLocaleString()}</div>
                    <div className="text-sm text-freshness">{order.status}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Items: {order.items.join(', ')}
                </div>
                <div className="mt-3 flex space-x-2">
                  <Button variant="outline" size="sm">Reorder</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Loyalty Tab */}
          <TabsContent value="loyalty" className="space-y-4">
            <div className="bg-gradient-to-r from-gamboge to-rosso p-6 rounded-lg text-white text-center">
              <Star className="mx-auto mb-2" size={48} />
              <h3 className="text-2xl font-bold mb-2">{profileData.loyaltyPoints} Points</h3>
              <p className="opacity-90">You're {2500 - profileData.loyaltyPoints} points away from Platinum!</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Available Rewards</h4>
              {[
                { name: 'Free Side Dish', points: 500, available: true },
                { name: 'Free Drink', points: 300, available: true },
                { name: 'Free Main Course', points: 1500, available: false },
                { name: '20% Off Next Order', points: 800, available: true }
              ].map((reward, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">{reward.name}</div>
                    <div className="text-sm text-muted-foreground">{reward.points} points</div>
                  </div>
                  <Button 
                    variant={reward.available ? "default" : "secondary"} 
                    size="sm" 
                    disabled={!reward.available}
                  >
                    {reward.available ? 'Redeem' : 'Not Enough Points'}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="text-gamboge" size={20} />
              <h3 className="text-lg font-semibold">Account Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                  <span>Dark Mode</span>
                  <span className="text-sm text-muted-foreground">Toggle dark theme</span>
                </Label>
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="flex flex-col space-y-1">
                  <span>Email Notifications</span>
                  <span className="text-sm text-muted-foreground">Receive order updates via email</span>
                </Label>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="flex flex-col space-y-1">
                  <span>SMS Notifications</span>
                  <span className="text-sm text-muted-foreground">Receive order updates via SMS</span>
                </Label>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="flex flex-col space-y-1">
                  <span>Marketing Communications</span>
                  <span className="text-sm text-muted-foreground">Receive promotional offers</span>
                </Label>
                <Switch />
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <Button onClick={handleLogout} variant="destructive" className="w-full">
                Sign Out
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AccountDialog;
