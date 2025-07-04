
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SignupDialog from '../components/Auth/SignupDialog';

const SignUp = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // Navigate back to rewards page
    window.history.back();
  };

  const handleSwitchToLogin = () => {
    window.location.href = '/auth';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-raisin mb-6">
              Join <span className="text-gamboge">X-Press Rewards</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sign up for free and start earning X-Points with every meal!
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-raisin mb-4">Membership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-freshness rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Earn 1 X-Point for every ₦100 spent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-freshness rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free delivery on orders over ₦2,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-freshness rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Birthday rewards and special offers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-freshness rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>VIP treatment and priority service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <SignupDialog 
        isOpen={isOpen} 
        onClose={handleClose}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
};

export default SignUp;
