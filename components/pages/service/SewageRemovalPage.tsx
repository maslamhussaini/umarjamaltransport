import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface SewageRemovalPageProps {
  onNavigate: (page: string) => void;
  onServiceSelect: (service: string) => void;
}

const SewageRemovalPage: React.FC<SewageRemovalPageProps> = ({ onNavigate, onServiceSelect }) => {
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

  const handleEnquire = () => {
    onServiceSelect('sewage');
  };

  const services = [
    'Waste Water removal Services',
    'Removing Drainage water',
    'Grease trap cleaning',
    'Sewage water removal',
    'Liquid Waste Disposal',
    'Domestic waste Disposal',
    'Construction waste Disposal',
    'Disposal of hazardous liquid',
    'Treated sewage water for irrigation purposes',
    'Sewer lines & blockage removals',
    'Water Tank Cleaning',
    'Cleaning of water storage tanks in hotels and residences.',
    'Disposal of trade waste (non- hazardous liquid)'
  ];

  return (
    <section className="page-section">
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sewage Water Removal</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Safe and efficient liquid waste removal.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-last lg:order-first fade-in">
            <img 
              src="/assets/sewage_truck.png"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Sewage Removal"
            />
          </div>
          
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Waste Water removal services</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Umar Juma Transport is one of the leading service provider of all kinds of Drainage and 
              Waste water removal services in the DUBAI. We provide services at a very competitive price.
              Below mentioned are the services which we currently provide to our esteemed clients in the DUBAI.
            </p>
            <ul className="space-y-3 mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleEnquire}
              className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-[#c4191e] transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SewageRemovalPage;