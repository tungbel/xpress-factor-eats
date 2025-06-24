
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Users, Heart, Star, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Head Chef',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      department: 'Kitchen',
      description: 'Lead our culinary team in creating exceptional catfish dishes'
    },
    {
      title: 'Delivery Driver',
      location: 'Multiple Locations',
      type: 'Full-time',
      department: 'Operations',
      description: 'Deliver fresh meals to customers with a smile'
    },
    {
      title: 'Restaurant Manager',
      location: 'Victoria Island',
      type: 'Full-time',
      department: 'Management',
      description: 'Oversee daily operations and ensure customer satisfaction'
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Drive our online presence and customer engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gamboge to-rosso text-white">
          <div className="container mx-auto px-4 text-center">
            <Users className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Join the <span className="text-white">X-Factor</span> Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Build your career with Nigeria's freshest catfish restaurant
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose <span className="text-gamboge">CatfishXpress</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border">
                <Heart className="text-rosso mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4 text-foreground">Great Culture</h3>
                <p className="text-muted-foreground">
                  Work in a supportive environment where your growth matters
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border">
                <Star className="text-gamboge mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4 text-foreground">Competitive Benefits</h3>
                <p className="text-muted-foreground">
                  Health insurance, performance bonuses, and career development
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border">
                <Users className="text-freshness mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4 text-foreground">Team Growth</h3>
                <p className="text-muted-foreground">
                  Be part of Nigeria's fastest-growing restaurant chain
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Open <span className="text-gamboge">Positions</span>
            </h2>
            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock size={16} className="mr-1" />
                          {job.type}
                        </div>
                        <span className="bg-gamboge text-white px-2 py-1 rounded-full text-xs">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <button className="bg-gamboge text-white px-6 py-3 rounded-full font-semibold hover:bg-rosso transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Application <span className="text-gamboge">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Apply Online', desc: 'Submit your application and resume' },
                { step: 2, title: 'Initial Review', desc: 'We review your qualifications' },
                { step: 3, title: 'Interview', desc: 'Meet our team and discuss the role' },
                { step: 4, title: 'Welcome!', desc: 'Join the CatfishXpress family' }
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-gamboge text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
