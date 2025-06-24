
import React from 'react';
import { ChefHat, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Order Online', href: '#order' },
    { label: 'Catering', href: '#catering' },
    { label: 'Locations', href: '#locations' },
    { label: 'Rewards', href: '#rewards' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Nutritional Info', href: '#nutrition' },
    { label: 'Allergen Info', href: '#allergens' },
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#facebook', label: 'Facebook' },
    { Icon: Twitter, href: '#twitter', label: 'Twitter' },
    { Icon: Instagram, href: '#instagram', label: 'Instagram' },
    { Icon: Youtube, href: '#youtube', label: 'YouTube' },
  ];

  return (
    <footer className="bg-raisin text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-gamboge" />
              <span className="text-xl font-bold">CatfishXpress</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing you the freshest catfish experience with our signature X-Factor taste. 
              Farm-fresh from Afadapa Fishery to your table.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-gamboge transition-colors duration-200"
                  aria-label={label}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`${label} coming soon!`);
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gamboge">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gamboge">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${link.label} page coming soon!`);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gamboge">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>1-800-CATFISH</p>
              <p>info@catfishxpress.com</p>
              <p>Mon-Sun: 10AM - 10PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm mb-2">
            © 2024 CatfishXpress. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Proud member of{' '}
            <a
              href="#afadapa"
              className="text-gamboge hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert('Afadapa Enterprises Ltd. - Premium Fishery since 1995');
              }}
            >
              Afadapa Enterprises Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
