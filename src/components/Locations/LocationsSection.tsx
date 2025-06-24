
import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const LocationsSection = () => {
  const outlets = [
    {
      id: 1,
      name: "CatfishXpress Victoria Island",
      address: "123 Ahmadu Bello Way, Victoria Island, Lagos",
      phone: "+234 801 234 5678",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM",
      status: "Opening Soon",
      features: ["Drive-thru", "Dine-in", "Takeaway", "Catering pickup"]
    },
    {
      id: 2,
      name: "CatfishXpress Ikeja City Mall",
      address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja, Lagos",
      phone: "+234 801 234 5679",
      hours: "Mon-Sun: 11:00 AM - 9:00 PM",
      status: "Coming Q2 2024",
      features: ["Food court location", "Takeaway", "Express service"]
    },
    {
      id: 3,
      name: "CatfishXpress Abuja Central",
      address: "Central Business District, Abuja, FCT",
      phone: "+234 801 234 5680",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM",
      status: "Coming Q3 2024",
      features: ["Full service", "Catering center", "Event space"]
    },
    {
      id: 4,
      name: "CatfishXpress Port Harcourt",
      address: "GRA Phase 2, Port Harcourt, Rivers State",
      phone: "+234 801 234 5681",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM",
      status: "Planned 2024",
      features: ["Waterfront location", "Full menu", "Special events"]
    }
  ];

  const popUpSchedule = [
    {
      date: "Dec 20, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Lekki Phase 1 Market Square",
      address: "Admiralty Way, Lekki Phase 1, Lagos",
      specialOffer: "First 50 customers get 20% off!"
    },
    {
      date: "Dec 27, 2024",
      time: "12:00 PM - 6:00 PM",
      location: "Freedom Park Lagos",
      address: "Broad Street, Lagos Island, Lagos",
      specialOffer: "Free catfish bites with any main order"
    },
    {
      date: "Jan 3, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "University of Lagos Campus",
      address: "UNILAG Campus, Akoka, Lagos",
      specialOffer: "Student discount: 15% off with valid ID"
    },
    {
      date: "Jan 10, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Ikeja Computer Village",
      address: "Obafemi Awolowo Way, Ikeja, Lagos",
      specialOffer: "Tech workers special: Buy 2 get 1 free"
    },
    {
      date: "Jan 17, 2025",
      time: "12:00 PM - 7:00 PM",
      location: "National Theatre Complex",
      address: "Iganmu, Lagos Mainland, Lagos",
      specialOffer: "Arts & culture appreciation: 25% off all orders"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-6">
            Find <span className="text-gamboge">CatfishXpress</span> Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're bringing the X-Factor experience to locations across Nigeria. 
            Visit our outlets or catch us at exciting pop-up events!
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gamboge to-rosso rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <MapPin className="absolute top-6 left-6 animate-pulse" size={40} />
              <MapPin className="absolute top-12 right-12 animate-pulse delay-1000" size={30} />
              <MapPin className="absolute bottom-6 left-12 animate-pulse delay-2000" size={35} />
              <MapPin className="absolute bottom-12 right-6 animate-pulse delay-500" size={25} />
            </div>
            
            <div className="relative z-10">
              <MapPin className="mx-auto mb-4" size={64} />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Interactive Map Coming Soon!</h3>
              <p className="text-lg opacity-90 mb-6">
                Find the nearest CatfishXpress location with real-time directions, hours, and availability.
              </p>
              <button
                onClick={() => alert('Interactive map simulation - This would show all locations with real-time data!')}
                className="bg-white text-raisin px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Launch Map
              </button>
            </div>
          </div>
        </div>

        {/* Outlet Listings */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Our <span className="text-gamboge">Outlets</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outlets.map((outlet) => (
              <div key={outlet.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-raisin">{outlet.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    outlet.status === 'Opening Soon' 
                      ? 'bg-gamboge text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {outlet.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gamboge mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{outlet.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gamboge flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{outlet.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gamboge flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{outlet.hours}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-raisin mb-2">Available Services:</h5>
                  <div className="flex flex-wrap gap-2">
                    {outlet.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-white text-raisin px-3 py-1 rounded-full text-xs font-medium border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => alert(`Directions to ${outlet.name} simulation - This would open maps with directions!`)}
                    className="flex-1 bg-gamboge text-white py-2 px-4 rounded-full font-semibold hover:bg-rosso transition-colors"
                  >
                    Get Directions
                  </button>
                  <button
                    onClick={() => alert(`Calling ${outlet.name} at ${outlet.phone}`)}
                    className="px-4 py-2 border border-gamboge text-gamboge rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                  >
                    Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pop-Up Schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-4">
            <span className="text-gamboge">Pop-Up</span> Schedule
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Can't wait for our permanent locations? Catch us at these exciting pop-up events where you can 
            experience the X-Factor and help shape our future menu!
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gamboge to-rosso text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Date & Time</th>
                  <th className="px-6 py-4 text-left font-semibold">Location</th>
                  <th className="px-6 py-4 text-left font-semibold">Address</th>
                  <th className="px-6 py-4 text-left font-semibold">Special Offer</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {popUpSchedule.map((event, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-gamboge" size={16} />
                        <div>
                          <div className="font-semibold text-raisin">{event.date}</div>
                          <div className="text-sm text-gray-600">{event.time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-raisin">{event.location}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{event.address}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-freshness bg-opacity-10 text-freshness px-3 py-1 rounded-full text-xs font-semibold">
                        {event.specialOffer}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => alert(`RSVP for ${event.location} pop-up on ${event.date}!\n\nSpecial Offer: ${event.specialOffer}\n\nThank you for your interest! We'll send you a reminder closer to the event date. 🎉`)}
                        className="bg-gamboge text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rosso transition-colors"
                      >
                        RSVP
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pop-Up Information */}
        <div className="bg-gradient-to-r from-raisin to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-gamboge">Catch Us Pre-Launch!</span> Experience the X-Factor First
              </h3>
              <p className="text-lg opacity-90">
                Be part of our pre-launch journey! Our pop-up events let you taste signature catfish dishes, 
                provide valuable feedback, and build anticipation for our main outlet launches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h4 className="font-bold mb-2">Exclusive Samples</h4>
                <p className="text-sm opacity-90">Taste signature catfish dishes before anyone else</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h4 className="font-bold mb-2">Direct Feedback</h4>
                <p className="text-sm opacity-90">Share thoughts that help shape our future menu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-bold mb-2">Launch Community</h4>
                <p className="text-sm opacity-90">Be part of the exclusive pre-launch family</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => alert('Pop-up schedule & RSVP simulation!\n\nView upcoming pop-up events and reserve your spot to experience the X-Factor before our official launch. Limited spots available! 🎪')}
                className="bg-gamboge hover:bg-rosso text-white px-8 py-4 rounded-full font-bold transition-colors transform hover:scale-105"
              >
                View Pop-Up Schedule & RSVP!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
