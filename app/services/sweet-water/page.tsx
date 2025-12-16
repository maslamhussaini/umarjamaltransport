'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function SweetWaterPage() {
  useEffect(() => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sweet Water Supply</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Fresh, clean sweet water for pools and tanks.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quality Sweet Water</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We Supply of Sweet Water for the Irrigation System to Provide a Convenient Means of Sewage 
              Disposal Through Land Treatment to Prevent Potential Environmental Hazards Caused by 
              Uncontrolled Flow of Wastewater.
            </p>
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
              alt="Sweet Water"
            />
          </div>
        </div>
      </div>
    </section>
  );
}