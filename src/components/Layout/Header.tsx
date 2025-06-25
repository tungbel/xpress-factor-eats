import React, { useState } from 'react';
import { ChefHat, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import LoginDialog from '@/components/Auth/LoginDialog';
import SignupDialog from '@/components/Auth/SignupDialog';
import AccountDialog from '@/components/Account/AccountDialog';
import CartButton from '@/components/Cart/CartButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { user } = useAuth();

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/order', label: 'Order' },
    { href: '/rewards', label: 'Rewards' },
    { href: '/catering', label: 'Catering' },
    { href: '/locations', label: 'Locations' },
    { href: '/promos', label: 'Promos' },
    { href: '/xpress-delivery', label: 'X-Press Delivery' },
  ];

  const moreNavLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
    { href: '/franchises', label: 'Franchises' },
    { href: '/pre-launch', label: 'Pre-Launch Program' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="http://googleusercontent.com/image_generation_content/1" 
                alt="CatfishXpress Logo" 
                className="h-10 w-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <ChefHat className="h-10 w-10 text-gamboge hidden" />
              <span className="text-xl font-bold text-raisin dark:text-white">CatfishXpress</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-raisin dark:text-white hover:text-gamboge transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-raisin dark:text-white hover:text-gamboge transition-colors duration-200 font-medium text-sm xl:text-base">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {moreNavLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        to={link.href}
                        className="text-raisin dark:text-white hover:text-gamboge transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right side - Cart, Admin, and Auth */}
            <div className="flex items-center space-x-4">
              <CartButton />
              
              {/* Admin Access - only show if user is admin */}
              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  className="p-2 text-raisin dark:text-white hover:text-gamboge transition-colors"
                  title="Admin Dashboard"
                >
                  <Shield size={20} />
                </Link>
              )}
              
              {user ? (
                <Button
                  onClick={() => setIsAccountOpen(true)}
                  variant="outline"
                  className="hidden lg:flex"
                >
                  {user.name}
                </Button>
              ) : (
                <div className="hidden lg:flex space-x-2">
                  <Button
                    onClick={() => setIsLoginOpen(true)}
                    variant="outline"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-gamboge hover:bg-rosso"
                  >
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-raisin dark:text-white hover:text-gamboge transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <nav className="py-4 space-y-2">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-raisin dark:text-white hover:text-gamboge hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* More section for mobile */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">More</div>
                  {moreNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-2 py-2 text-raisin dark:text-white hover:text-gamboge hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {/* Admin link for mobile */}
                {user?.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center px-4 py-2 text-raisin dark:text-white hover:text-gamboge hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Shield size={16} className="mr-2" />
                    Admin Dashboard
                  </Link>
                )}
                
                <div className="px-4 py-2 space-y-2">
                  {user ? (
                    <Button
                      onClick={() => {
                        setIsAccountOpen(true);
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      {user.name}
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        onClick={() => {
                          setIsLoginOpen(true);
                          setIsMenuOpen(false);
                        }}
                        variant="outline"
                        className="w-full"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => {
                          setIsSignupOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-gamboge hover:bg-rosso"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Dialogs */}
      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />
      <SignupDialog 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <AccountDialog 
        isOpen={isAccountOpen} 
        onClose={() => setIsAccountOpen(false)} 
      />
    </>
  );
};

export default Header;
