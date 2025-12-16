'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Droplets, Trash2, Recycle, Fuel, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  const services = [
    {
      id: 'water-transport',
      icon: Droplets,
      title: 'Water Transport',
      description: 'Reliable transportation of sweet and TSE water for construction and commercial use.',
      link: '/services/water-transport'
    },
    {
      id: 'waste-management',
      icon: Trash2,
      title: 'Waste Management',
      description: 'Comprehensive waste handling from inception to final disposal.',
      link: '/services/waste-management'
    },
    {
      id: 'sludge-removal',
      icon: Recycle,
      title: 'Sludge Removal',
      description: 'Specialized removal of sludge waste from sites across the country.',
      link: '/services/sludge-removal'
    },
    {
      id: 'sewage-removal',
      icon: Fuel,
      title: 'Sewage Water Removal',
      description: 'Redcubes is a leader in the field of sewage water removal, transportation and its disposal in Dubai.',
      link: '/services/sewage-removal'
    },
    {
      id: 'tse-water',
      icon: Droplets,
      title: 'TSE Water Supply',
      description: 'We Supply of TSE (Treated Sewage Effluent) Water for The Irrigation System to Provide a Convenient Means of Sewage Disposal Through Land Treatment.',
      link: '/services/tse-water'
    },
    {
      id: 'sweet-water',
      icon: Droplets,
      title: 'Sweet Water Supply',
      description: 'We Supply of Sweet Water for the Irrigation System to Provide a Convenient Means of Sewage Disposal Through Land Treatment.',
      link: '/services/sweet-water'
    },
  ];

  return (
    <section className="page-section">
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional and reliable logistics solutions for every industry.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={service.id}
                  href={service.link}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 group p-6 fade-in block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-brand-red font-bold text-sm flex items-center mt-2 group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-red">
              <h4 className="text-xl font-bold mb-4">Quick Enquiry</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-red"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-red"
                  required
                />
                <textarea 
                  rows={4} 
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-red"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-[#c4191e]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}