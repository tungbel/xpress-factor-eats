
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Clock, Phone, CheckCircle, Truck } from 'lucide-react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

interface DeliveryStatus {
  status: 'preparing' | 'ready' | 'picked_up' | 'on_the_way' | 'delivered';
  timestamp: string;
  location?: { lat: number; lng: number };
}

const DeliveryTracking = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || 'CX123456';
  const [currentStatus, setCurrentStatus] = useState<DeliveryStatus>({
    status: 'preparing',
    timestamp: new Date().toISOString()
  });
  const [driverLocation, setDriverLocation] = useState({ lat: 6.5244, lng: 3.3792 }); // Lagos coordinates

  const statusSteps = [
    { key: 'preparing', label: 'Preparing Order', icon: '👨‍🍳', description: 'Your catfish is being freshly prepared' },
    { key: 'ready', label: 'Order Ready', icon: '✅', description: 'Your order is ready for pickup' },
    { key: 'picked_up', label: 'Picked Up', icon: '📦', description: 'Driver has picked up your order' },
    { key: 'on_the_way', label: 'On The Way', icon: '🏍️', description: 'Your order is being delivered' },
    { key: 'delivered', label: 'Delivered', icon: '🎉', description: 'Enjoy your meal!' }
  ];

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(prev => {
        const currentIndex = statusSteps.findIndex(step => step.key === prev.status);
        if (currentIndex < statusSteps.length - 1) {
          const nextStatus = statusSteps[currentIndex + 1].key as any;
          return {
            status: nextStatus,
            timestamp: new Date().toISOString(),
            location: nextStatus === 'on_the_way' ? driverLocation : undefined
          };
        }
        return prev;
      });
    }, 15000); // Progress every 15 seconds

    return () => clearInterval(interval);
  }, [driverLocation]);

  // Simulate driver movement
  useEffect(() => {
    if (currentStatus.status === 'on_the_way') {
      const interval = setInterval(() => {
        setDriverLocation(prev => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001
        }));
      }, 3000); // Update location every 3 seconds

      return () => clearInterval(interval);
    }
  }, [currentStatus.status]);

  const getCurrentStepIndex = () => {
    return statusSteps.findIndex(step => step.key === currentStatus.status);
  };

  const estimatedTime = () => {
    const currentIndex = getCurrentStepIndex();
    const remainingSteps = statusSteps.length - currentIndex - 1;
    return Math.max(remainingSteps * 7, 5); // 7 minutes per step, minimum 5 minutes
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Track Your Order
            </h1>
            <p className="text-muted-foreground">Order #{orderId}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Status */}
            <div className="space-y-6">
              {/* Current Status Card */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground">Order Status</h2>
                  <div className="flex items-center text-gamboge">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm font-medium">~{estimatedTime()} mins</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {statusSteps.map((step, index) => {
                    const currentIndex = getCurrentStepIndex();
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;
                    const isPending = index > currentIndex;

                    return (
                      <div key={step.key} className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                          isCompleted ? 'bg-freshness text-white' :
                          isCurrent ? 'bg-gamboge text-white animate-pulse' :
                          'bg-gray-200 text-gray-500'
                        }`}>
                          {isCompleted ? <CheckCircle size={20} /> : step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${
                            isCurrent ? 'text-gamboge' : 
                            isCompleted ? 'text-freshness' : 
                            'text-muted-foreground'
                          }`}>
                            {step.label}
                          </h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                          {isCurrent && (
                            <p className="text-xs text-gamboge mt-1">
                              Updated: {new Date(currentStatus.timestamp).toLocaleTimeString()}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Driver Info */}
              {currentStatus.status === 'on_the_way' && (
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Your Driver</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gamboge rounded-full flex items-center justify-center text-white font-bold">
                      AJ
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Adebayo Johnson</h4>
                      <p className="text-sm text-muted-foreground">Honda CBR 150R • LOS-456-XP</p>
                    </div>
                    <button className="bg-freshness text-white p-2 rounded-full hover:bg-freshness/80">
                      <Phone size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Live Tracking</h3>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-red-500" />
                      <span className="text-xs font-medium">Your Location</span>
                    </div>
                  </div>
                  
                  {currentStatus.status === 'on_the_way' && (
                    <>
                      <div 
                        className="absolute bg-gamboge text-white p-2 rounded-full transform transition-all duration-1000"
                        style={{
                          top: `${40 + (driverLocation.lat - 6.5244) * 10000}%`,
                          left: `${50 + (driverLocation.lng - 3.3792) * 10000}%`
                        }}
                      >
                        <Truck size={16} />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gamboge rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium">Driver Location</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="text-center z-10">
                  <MapPin size={48} className="text-gamboge mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    {currentStatus.status === 'on_the_way' 
                      ? 'Tracking your delivery in real-time' 
                      : 'Map will activate when driver is on the way'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryTracking;
