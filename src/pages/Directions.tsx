
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { MapPin, Phone, Clock, ArrowLeft } from 'lucide-react';

const Directions = () => {
  const [searchParams] = useSearchParams();
  const outletName = searchParams.get('outlet') || 'CatfishXpress Location';
  const address = searchParams.get('address') || 'Location address not provided';
  const phone = searchParams.get('phone') || '+234 801 234 5678';

  const handleGetDirections = () => {
    // Open Google Maps with the address
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/locations" 
              className="inline-flex items-center text-gamboge hover:text-rosso transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Locations
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gamboge to-rosso p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{outletName}</h1>
                <p className="text-xl opacity-90">Get Directions & Contact Info</p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Location Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-raisin mb-6">Location Details</h2>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <MapPin className="text-gamboge mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h3 className="font-semibold text-raisin">Address</h3>
                          <p className="text-gray-600">{address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="text-gamboge flex-shrink-0" size={20} />
                        <div>
                          <h3 className="font-semibold text-raisin">Phone</h3>
                          <p className="text-gray-600">{phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="text-gamboge flex-shrink-0" size={20} />
                        <div>
                          <h3 className="font-semibold text-raisin">Hours</h3>
                          <p className="text-gray-600">Mon-Sun: 10:00 AM - 10:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={handleGetDirections}
                        className="w-full bg-gamboge text-white py-3 px-6 rounded-full font-semibold hover:bg-rosso transition-colors"
                      >
                        Open in Google Maps
                      </button>
                      
                      <button
                        onClick={() => window.open(`tel:${phone}`, '_self')}
                        className="w-full border-2 border-gamboge text-gamboge py-3 px-6 rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                      >
                        Call Now
                      </button>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div>
                    <h2 className="text-2xl font-bold text-raisin mb-6">Location Map</h2>
                    <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="mx-auto mb-4 text-gamboge" size={48} />
                        <p className="text-gray-600 mb-4">Interactive map will be available soon</p>
                        <button
                          onClick={handleGetDirections}
                          className="bg-gamboge text-white px-6 py-2 rounded-full hover:bg-rosso transition-colors"
                        >
                          View on Google Maps
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-bold text-raisin mb-4">Before You Visit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Services Available:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Dine-in</li>
                        <li>• Takeaway</li>
                        <li>• Drive-thru</li>
                        <li>• Catering pickup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Payment Options:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Cash</li>
                        <li>• Card payments</li>
                        <li>• Mobile transfers</li>
                        <li>• Online payments</li>
                      </ul>
                    </div>
                  </div>
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

export default Directions;
