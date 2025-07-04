
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Calendar, MapPin, ArrowLeft, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const EventRsvp = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1'
  });
  const { toast } = useToast();

  const eventDate = searchParams.get('date') || 'Event Date';
  const eventTime = searchParams.get('time') || 'Event Time';
  const eventLocation = searchParams.get('location') || 'Event Location';
  const eventAddress = searchParams.get('address') || 'Event Address';
  const specialOffer = searchParams.get('offer') || 'Special Event Offer';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate RSVP submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "RSVP Confirmed!",
        description: "We'll send you a reminder before the event."
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-16 h-16 bg-freshness rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold text-raisin mb-4">RSVP Confirmed!</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Thank you for your interest in our pop-up event at {eventLocation}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-raisin mb-4">Event Details</h3>
                  <div className="space-y-2 text-left">
                    <p><strong>Date:</strong> {eventDate}</p>
                    <p><strong>Time:</strong> {eventTime}</p>
                    <p><strong>Location:</strong> {eventLocation}</p>
                    <p><strong>Special Offer:</strong> {specialOffer}</p>
                    <p><strong>Guests:</strong> {formData.guests}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  We'll send you a reminder email 24 hours before the event. 
                  Can't wait to see you there and let you experience the X-Factor!
                </p>

                <div className="space-y-4">
                  <Link 
                    to="/locations"
                    className="inline-block bg-gamboge text-white px-8 py-3 rounded-full font-semibold hover:bg-rosso transition-colors"
                  >
                    View More Events
                  </Link>
                  <br />
                  <Link 
                    to="/menu"
                    className="inline-block border-2 border-gamboge text-gamboge px-8 py-3 rounded-full font-semibold hover:bg-gamboge hover:text-white transition-all"
                  >
                    Explore Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-raisin mb-6">Pop-Up Event RSVP</h1>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-gamboge mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-raisin">Date & Time</h3>
                      <p className="text-gray-600">{eventDate}</p>
                      <p className="text-gray-600">{eventTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gamboge mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-raisin">Location</h3>
                      <p className="text-gray-600">{eventLocation}</p>
                      <p className="text-gray-600 text-sm">{eventAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-freshness bg-opacity-10 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-raisin mb-2">Special Offer</h3>
                  <p className="text-freshness font-medium">{specialOffer}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-raisin mb-2">What to Expect</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Taste signature catfish dishes</li>
                    <li>• Meet the CatfishXpress team</li>
                    <li>• Provide feedback on new menu items</li>
                    <li>• Enjoy exclusive pre-launch pricing</li>
                    <li>• Take photos and share your experience</li>
                  </ul>
                </div>
              </div>

              {/* RSVP Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-raisin mb-6">Reserve Your Spot</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="1"
                    />
                    <p className="text-sm text-gray-500 mt-1">Including yourself (max 10)</p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gamboge hover:bg-rosso text-white py-3 rounded-full font-semibold"
                  >
                    Confirm RSVP
                  </Button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to receive event reminders and updates from CatfishXpress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventRsvp;
