import React, { useEffect } from 'react';

interface SludgeRemovalPageProps {
  onNavigate: (page: string) => void;
  onServiceSelect: (service: string) => void;
}

const SludgeRemovalPage: React.FC<SludgeRemovalPageProps> = ({ onNavigate, onServiceSelect }) => {
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
    onServiceSelect('sludge');
  };

  return (
    <section className="page-section">
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sludge Removal</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Expert removal of industrial sludge.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialized Sludge Handling</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We Remove Sludge Waste from Sites Across the Country Fleet of Specialized Vehicles Equipped 
              with Barrel Capacities That Can Cope with the Volume of Sludge Waste.
            </p>
            <button 
              onClick={handleEnquire}
              className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-[#c4191e] transition-colors"
            >
              Request a Quote
            </button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl fade-in">
            <img 
              src="/assets/truck.jpg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Sludge Removal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SludgeRemovalPage;