'use client';

import React, { useEffect } from 'react';

export default function AboutPage() {
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
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/background.jpg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Driving excellence in logistics through technology and experienced leadership.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-b-4 border-brand-red">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Umar Juma Transport LLC</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                <span className="font-semibold text-slate-800">Umar Juma Transport LLC (Established In 2025)</span>. 
                Having intimate knowledge of our industry, we provide elite service and tech assistance to a large 
                number of clients all over Dubai.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                We strive to build and maintain long-lasting relationships by offering cost-effective transportation 
                solutions without compromising on efficiency.
              </p>
            </div>
            <div className="relative fade-in">
              <img 
                src="/assets/about.jpg"
                className="relative rounded-lg shadow-lg w-full object-cover h-[400px]" 
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}