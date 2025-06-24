
import React, { useState, useEffect } from 'react';
import { X, Mail, Users } from 'lucide-react';

const PreLaunchPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('catfishxpress-popup-seen');
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      // Simulate adding to waiting list
      localStorage.setItem('catfishxpress-popup-seen', 'true');
      localStorage.setItem('catfishxpress-waitlist', JSON.stringify({ name, email, date: new Date().toISOString() }));
      alert(`Thanks ${name}! You're now on our exclusive pre-launch waiting list. Get ready for the X-Factor experience!`);
      setIsVisible(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem('catfishxpress-popup-seen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-gamboge to-rosso p-6 text-white text-center">
          <div className="animate-bounce-slow mb-2">
            <Users className="mx-auto mb-2" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Join the X-Factor Experience!</h2>
          <p className="text-sm opacity-90">Be among the first to taste our signature catfish</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-raisin mb-2">Pre-Launch Waiting List</h3>
            <p className="text-gray-600 text-sm">
              Get exclusive early access, special discounts, and be the first to know when we launch!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-raisin mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gamboge focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-raisin mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gamboge focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gamboge to-rosso text-white py-3 rounded-md font-semibold hover:from-rosso hover:to-gamboge transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block mr-2" size={18} />
              Join Waiting List
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is safe with us. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLaunchPopup;
