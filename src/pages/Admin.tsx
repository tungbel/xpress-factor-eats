
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { BarChart3, Users, ShoppingCart, TrendingUp, Calendar, MapPin, Bell, Settings } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Orders', value: '1,234', change: '+12%', icon: ShoppingCart, color: 'text-gamboge' },
    { title: 'Revenue', value: '₦2.5M', change: '+8%', icon: TrendingUp, color: 'text-freshness' },
    { title: 'Customers', value: '856', change: '+15%', icon: Users, color: 'text-rosso' },
    { title: 'Locations', value: '12', change: '+2%', icon: MapPin, color: 'text-gamboge' }
  ];

  const recentOrders = [
    { id: 'CX001', customer: 'John Doe', items: 'Classic X-Press, Sides', total: '₦4,200', status: 'Delivered' },
    { id: 'CX002', customer: 'Jane Smith', items: 'Spicy Deluxe Bowl', total: '₦3,800', status: 'Preparing' },
    { id: 'CX003', customer: 'Mike Johnson', items: 'Family Combo', total: '₦12,500', status: 'Out for Delivery' },
    { id: 'CX004', customer: 'Sarah Wilson', items: 'Grilled Supreme', total: '₦4,800', status: 'Delivered' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <button className="p-2 bg-card border rounded-lg hover:bg-muted">
                <Bell size={20} className="text-muted-foreground" />
              </button>
              <button className="p-2 bg-card border rounded-lg hover:bg-muted">
                <Settings size={20} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'customers', label: 'Customers', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-freshness">{stat.change} from last month</p>
                      </div>
                      <stat.icon size={32} className={stat.color} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-card rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-foreground">Recent Orders</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold text-foreground">#{order.id}</div>
                          <div className="text-sm text-muted-foreground">{order.customer}</div>
                          <div className="text-sm text-muted-foreground">{order.items}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{order.total}</div>
                          <div className={`text-sm px-2 py-1 rounded-full ${
                            order.status === 'Delivered' ? 'bg-freshness text-white' :
                            order.status === 'Preparing' ? 'bg-gamboge text-white' :
                            'bg-rosso text-white'
                          }`}>
                            {order.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="bg-card rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-6 text-foreground">Order Management</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">Order #{order.id}</div>
                      <div className="text-sm text-muted-foreground">Customer: {order.customer}</div>
                      <div className="text-sm text-muted-foreground">Items: {order.items}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{order.total}</div>
                      <select className="mt-1 p-1 border rounded text-sm">
                        <option>Preparing</option>
                        <option>Ready</option>
                        <option>Out for Delivery</option>
                        <option>Delivered</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customers Tab */}
          {activeTab === 'customers' && (
            <div className="bg-card rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-6 text-foreground">Customer Management</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-foreground">Active Customers</h3>
                    <p className="text-2xl font-bold text-gamboge">856</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-foreground">New This Month</h3>
                    <p className="text-2xl font-bold text-freshness">124</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-foreground">Loyalty Members</h3>
                    <p className="text-2xl font-bold text-rosso">342</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="bg-card rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-6 text-foreground">Analytics Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-4 text-foreground">Sales Trend</h3>
                  <div className="h-32 bg-muted rounded flex items-center justify-center">
                    <BarChart3 size={48} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-4 text-foreground">Popular Items</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Classic X-Press</span>
                      <span className="font-semibold text-foreground">34%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Spicy Deluxe</span>
                      <span className="font-semibold text-foreground">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power Bowl</span>
                      <span className="font-semibold text-foreground">22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
