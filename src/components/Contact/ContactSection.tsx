
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "1-800-CATFISH",
      secondary: "+234 (0) 801 234 5678",
      action: () => alert('Calling CatfishXpress customer service!')
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@catfishxpress.com",
      secondary: "support@catfishxpress.com",
      action: () => alert('Opening email client to contact CatfishXpress!')
    },
    {
      icon: MapPin,
      title: "Head Office",
      primary: "123 Marina Street",
      secondary: "Lagos Island, Lagos, Nigeria",
      action: () => alert('Opening maps to CatfishXpress head office location!')
    },
    {
      icon: Clock,
      title: "Customer Service Hours",
      primary: "Mon - Sun: 8:00 AM - 10:00 PM",
      secondary: "Response within 2 hours",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@CatfishXpress",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@CatfishXpress_NG",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@CatfishXpress",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+234 (0) 801 234 5678",
      color: "text-green-600 hover:text-green-700"
    }
  ];

  const faqs = [
    {
      question: "What are your delivery areas?",
      answer: "We currently deliver within Lagos and Abuja metropolitan areas. Check our locations page for specific zones and delivery times."
    },
    {
      question: "How fresh is your catfish?",
      answer: "All our catfish is sourced daily from Afadapa Fishery and prepared fresh to order. We guarantee the highest quality and freshness."
    },
    {
      question: "Do you cater to dietary restrictions?",
      answer: "Yes! We can accommodate various dietary needs. Please inform us when ordering, and our chefs will customize your meal accordingly."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled up to 15 minutes after placement for full refund. After that, cancellations may incur a small fee."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields!');
      return;
    }
    
    alert(`Thank you ${formData.name}!\n\nYour message has been received. Our team will respond within 24 hours.\n\nSubject: ${formData.subject || 'General Inquiry'}\n\nWe appreciate your interest in CatfishXpress! 🐟`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-6">
            Get In <span className="text-gamboge">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or special requests? We'd love to hear from you! 
            Our friendly team is here to help with anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-raisin mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-raisin mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-raisin mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-raisin mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-raisin mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Catering Request">Catering Request</option>
                      <option value="Feedback/Complaint">Feedback/Complaint</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-raisin mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gamboge focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gamboge to-rosso text-white py-3 px-6 rounded-lg font-semibold hover:from-rosso hover:to-gamboge transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-raisin mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gamboge rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-raisin mb-1">{info.title}</h4>
                        <p className="text-gray-700 text-sm">{info.primary}</p>
                        <p className="text-gray-500 text-xs">{info.secondary}</p>
                        {info.action && (
                          <button
                            onClick={info.action}
                            className="text-gamboge hover:text-rosso text-xs font-semibold mt-1 transition-colors"
                          >
                            Contact Now →
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-raisin mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => alert(`Opening ${social.name} - ${social.handle}`)}
                      className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon size={24} className={`${social.color} transition-colors`} />
                      <div className="text-left">
                        <h4 className="font-semibold text-raisin group-hover:text-gamboge transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{social.handle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-gradient-to-br from-gamboge to-rosso rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
              <div className="space-y-3">
                {faqs.slice(0, 2).map((faq, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">{faq.question}</h4>
                    <p className="text-xs opacity-90">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => alert('Full FAQ page simulation - All frequently asked questions would be displayed here!')}
                className="w-full mt-4 bg-white text-raisin py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-rosso rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6 opacity-90">
              For urgent order issues or emergency catering requests, contact our 24/7 hotline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Calling emergency hotline: 1-800-CATFISH')}
                className="bg-white text-rosso px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📞 Emergency Hotline
              </button>
              <button
                onClick={() => alert('Opening WhatsApp chat with CatfishXpress support')}
                className="border-2 border-white text-white hover:bg-white hover:text-rosso px-6 py-3 rounded-full font-bold transition-all"
              >
                💬 WhatsApp Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
