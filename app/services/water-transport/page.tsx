'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function WaterTransportPage() {
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

  return (
    <section className="page-section">
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Water Transport</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Reliable sweet and TSE water supply for all your needs.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Premium Water Transport Services</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We specialize in the reliable transportation of Sweet Water and TSE (Treated Sewage Effluent) water 
              for construction, industrial, and commercial use. Our fleet of tankers ensures timely delivery to 
              sites across Dubai and the UAE.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-700">
                <CheckCircle className="w-5 h-5 text-brand-red mr-3" />
                Construction Site Supply
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle className="w-5 h-5 text-brand-red mr-3" />
                Swimming Pool Filling
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle className="w-5 h-5 text-brand-red mr-3" />
                Irrigation Water Supply
              </li>
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-[#c4191e] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl fade-in">
            <img 
              src="/assets/truck.jpg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Water Transport"
            />
          </div>
        </div>
      </div>
    </section>
  );
}