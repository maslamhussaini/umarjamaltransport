'use client';

import React, { useEffect } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

export default function WhyChooseUsPage() {
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
      <div className="bg-slate-900 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Why Choose Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Discover the UJT difference and why we are the preferred logistics partner.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Dedicated to Excellence</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">On-Time Delivery</h4>
                    <p className="mt-2 text-base text-slate-500">
                      We ensure your shipments arrive on schedule, every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Safety First</h4>
                    <p className="mt-2 text-base text-slate-500">
                      Our fleet is maintained to the highest standards with strict safety protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-100 h-full min-h-[400px]">
              <img 
                src="/assets/truck.jpg" 
                className="w-full h-full object-cover" 
                alt="Fleet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}