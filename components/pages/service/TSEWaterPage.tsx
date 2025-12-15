import React, { useEffect } from 'react';

interface TSEWaterPageProps {
  onNavigate: (page: string) => void;
  onServiceSelect: (service: string) => void;
}

const TSEWaterPage: React.FC<TSEWaterPageProps> = ({ onNavigate, onServiceSelect }) => {
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
    onServiceSelect('tse');
  };

  return (
    <section className="page-section">
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TSE Water Supply</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Treated Sewage Effluent for irrigation and industrial use.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sustainable Water Solutions</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We Supply of TSE (Treated Sewage Effluent) Water for The Irrigation System to Provide a 
              Convenient Means of Sewage Disposal Through Land Treatment to Prevent Potential 
              Environmental Hazards Caused by Uncontrolled Flow of Wastewater.
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
              alt="TSE Water"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TSEWaterPage;