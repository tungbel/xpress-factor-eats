
import React from 'react';
import { ChefHat, Users, Star, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: ChefHat,
      title: "Quality First",
      description: "Every catfish is sourced from our trusted partner, Afadapa Fishery, ensuring premium quality and freshness in every bite."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Our customers are at the heart of everything we do. Every decision, every dish, every service is designed with you in mind."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We continuously innovate our cooking techniques, flavors, and service methods to bring you the ultimate X-Factor experience."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Honest ingredients, transparent processes, and authentic flavors - we believe in doing business the right way."
    }
  ];

  const milestones = [
    {
      year: "1995",
      title: "Afadapa Fishery Founded",
      description: "Our parent company began its journey in sustainable catfish farming"
    },
    {
      year: "2020",
      title: "CatfishXpress Concept Born",
      description: "The idea to bring premium catfish directly to consumers was conceived"
    },
    {
      year: "2023",
      title: "Recipe Development",
      description: "Months of perfecting our signature X-Factor blend and cooking techniques"
    },
    {
      year: "2024",
      title: "Pre-Launch Phase",
      description: "Pop-up events and community engagement to perfect our offering"
    },
    {
      year: "2024",
      title: "Grand Opening",
      description: "Officially bringing the X-Factor experience to catfish lovers everywhere"
    }
  ];

  const team = [
    {
      name: "Chef Adebayo Okunade",
      role: "Head Chef & Culinary Director",
      bio: "20+ years of culinary expertise, specializing in traditional Nigerian cuisine with modern twists",
      image: "👨‍🍳"
    },
    {
      name: "Mrs. Folake Adeyemi",
      role: "Operations Manager",
      bio: "Ensures every CatfishXpress location delivers consistent quality and exceptional service",
      image: "👩‍💼"
    },
    {
      name: "Mr. Emeka Okafor",
      role: "Quality Assurance Director",
      bio: "Oversees our farm-to-table process, maintaining the highest standards from pond to plate",
      image: "👨‍🔬"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-raisin mb-6">
            About <span className="text-gamboge">CatfishXpress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for premium catfish and a commitment to excellence, 
            CatfishXpress is revolutionizing how Nigeria experiences this beloved delicacy.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-raisin mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  CatfishXpress was born from a simple observation: Nigerians love catfish, but finding 
                  consistently fresh, high-quality catfish prepared with care was surprisingly difficult. 
                  We knew there had to be a better way.
                </p>
                <p>
                  Drawing on the expertise of Afadapa Fishery - our parent company with nearly 30 years 
                  of sustainable fish farming experience - we set out to create something special. 
                  Not just another restaurant, but a complete experience that honors the tradition 
                  of Nigerian catfish preparation while embracing modern quality standards and service excellence.
                </p>
                <p>
                  Our "X-Factor" isn't just a catchy name - it represents our commitment to that special 
                  something extra in every aspect of what we do. From the careful selection of each fish 
                  at our partner farms to the final garnish on your plate, we're dedicated to exceeding 
                  expectations at every step.
                </p>
                <p>
                  Today, as we prepare to open our doors across Nigeria, we're not just serving meals - 
                  we're building a community of catfish lovers who appreciate quality, freshness, and 
                  the authentic taste of expertly prepared fish.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gamboge to-rosso rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <ChefHat className="mx-auto mb-6" size={80} />
                  <h4 className="text-2xl font-bold mb-4">The X-Factor Difference</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h5 className="font-semibold">Farm-Fresh</h5>
                      <p className="opacity-90">Direct from Afadapa</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h5 className="font-semibold">Expert Preparation</h5>
                      <p className="opacity-90">Skilled chefs</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h5 className="font-semibold">Quality Guarantee</h5>
                      <p className="opacity-90">100% satisfaction</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <h5 className="font-semibold">Community Focus</h5>
                      <p className="opacity-90">Local partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Our <span className="text-gamboge">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-gamboge to-rosso rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-raisin mb-3 group-hover:text-gamboge transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Our <span className="text-gamboge">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8 last:mb-0">
                {/* Timeline line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gamboge opacity-30"></div>
                )}
                
                {/* Year bubble */}
                <div className="w-16 h-16 bg-gamboge rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <h4 className="text-lg font-bold text-raisin mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-raisin mb-12">
            Meet Our <span className="text-gamboge">Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-xl font-bold text-raisin mb-2">{member.name}</h4>
                <h5 className="text-md font-semibold text-gamboge mb-4">{member.role}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Afadapa Fishery Partnership */}
        <div className="bg-gradient-to-r from-freshness to-gamboge rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ChefHat className="absolute top-6 left-6 animate-pulse" size={50} />
            <Users className="absolute top-6 right-6 animate-pulse delay-1000" size={40} />
            <Star className="absolute bottom-6 left-6 animate-pulse delay-2000" size={45} />
            <CheckCircle className="absolute bottom-6 right-6 animate-pulse delay-500" size={35} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🐟 Powered by Afadapa Fishery Excellence
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Our partnership with Afadapa Fishery - established in 1995 - ensures every catfish meets 
              the highest standards of quality, sustainability, and freshness. This isn't just our supplier; 
              this is family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold mb-2">29+</h4>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold mb-2">100%</h4>
                <p className="text-sm opacity-90">Natural Growth</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold mb-2">Daily</h4>
                <p className="text-sm opacity-90">Fresh Delivery</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold mb-2">Certified</h4>
                <p className="text-sm opacity-90">Quality Standards</p>
              </div>
            </div>

            <button
              onClick={() => alert('Afadapa Enterprises Ltd. - Premium Fishery\n\nEstablished: 1995\nSpecialty: Sustainable catfish farming\nLocation: Nigeria\n\nCommitted to providing the freshest, highest-quality catfish through responsible farming practices and rigorous quality control. Proud partner of CatfishXpress in delivering the X-Factor experience! 🐟')}
              className="bg-white text-freshness px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Learn About Afadapa Fishery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
