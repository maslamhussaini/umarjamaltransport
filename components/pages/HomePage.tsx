import React, { useEffect } from 'react';
import { Phone, MessageCircle, Truck, Users, Award, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onServiceSelect: (service: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onServiceSelect }) => {
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
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section className="page-section active">
      {/* Hero */}
      <div className="relative min-h-[600px] lg:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/truck.jpg"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s]"
            alt="Transport Truck"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/80 fade-in">
                Reliable Transport Services in Dubai
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in">
                Professional Transport & <br />
                <span className="text-brand-red">Logistics Solutions</span> <br />
                You Can Trust
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed fade-in">
                Umar Juma Transport provides fast, reliable, and Dubai-approved transport solutions for 
                residential, commercial, and industrial clients across UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-[#c4191e] transition-colors inline-flex items-center space-x-2 shadow-lg shadow-red-600/20 fade-in"
                >
                  <Phone className="w-5 h-5" />
                  <span>+971 55 334 3472</span>
                </button>
                
                <button 
                  onClick={() => window.open('https://wa.me/971553343472', '_blank')}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#20bd5a] transition-colors inline-flex items-center space-x-2 shadow-lg shadow-red-600/20 fade-in"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="hidden lg:block max-w-md ml-auto w-full fade-in">
              {/* Enquiry Form Component */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-red mb-6">Enquire Now</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF5F5] border border-transparent focus:bg-white focus:border-brand-red outline-none transition-all placeholder:text-gray-400 text-gray-800"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Contact Number"
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF5F5] border border-transparent focus:bg-white focus:border-brand-red outline-none transition-all placeholder:text-gray-400 text-gray-800"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF5F5] border border-transparent focus:bg-white focus:border-brand-red outline-none transition-all placeholder:text-gray-400 text-gray-800"
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Location"
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF5F5] border border-transparent focus:bg-white focus:border-brand-red outline-none transition-all placeholder:text-gray-400 text-gray-800"
                    required
                  />
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF5F5] border border-transparent focus:bg-white focus:border-brand-red outline-none transition-all text-gray-500"
                    required
                  >
                    <option value="">Select Services</option>
                    <option value="water">Water Transport</option>
                    <option value="waste">Waste Management</option>
                    <option value="sludge">Sludge Removal</option>
                    <option value="sewage">Sewage Water Removal</option>
                    <option value="tse">TSE Water Supply</option>
                    <option value="sweet">Sweet Water Supply</option>
                  </select>
                  <button 
                    type="submit"
                    className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-[#c4191e] transition-colors shadow-lg shadow-red-500/30"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-3">Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Partner With Us?</h3>
            <p className="text-slate-500">
              We don't just transport goods; we deliver peace of mind through our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group fade-in">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-brand-red mb-6 mx-auto group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Specialize In Transport</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                Umer Juma Transport (UJT) is a global technology solutions provider with complex logistics requirements.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group fade-in">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-brand-red mb-6 mx-auto group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Experienced Team</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                Our experienced team offers a comprehensive range of services tailored to your specific requirements.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group fade-in">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-brand-red mb-6 mx-auto group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Proven Leaders</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                We are proud to have a team of seasoned leaders who have a proven track record of delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Our Clients Say</h3>
            <p className="text-slate-500">
              Don't just take our word for it. Here is what our partners have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in">
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "Umar Juma Transport has been our reliable partner for water supply for over a year. 
                Their team is professional and always on time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                  AJ
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900 text-sm">Ahmed Jaber</h4>
                  <p className="text-xs text-slate-500">Construction Manager</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "The waste management solutions provided by UJT are top-notch. 
                They handle everything with strict adherence to regulations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                  SM
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900 text-sm">Sarah Mitchell</h4>
                  <p className="text-xs text-slate-500">Operations Director</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "Exceptional service for sewage removal. Their fleet is modern and their response time is impressive. 
                Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                  MK
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900 text-sm">Mohammed Khan</h4>
                  <p className="text-xs text-slate-500">Facility Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;