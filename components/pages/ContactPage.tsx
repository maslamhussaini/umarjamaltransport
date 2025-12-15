import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactPageProps {
  selectedService?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: selectedService || '',
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

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
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="page-section">
      {/* Hero / Title */}
      <div className="bg-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We're here to help with all your logistics needs. Reach out to us anytime.
          </p>
        </div>
      </div>

      {/* Contact Info + Form Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Office */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100 fade-in">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-brand-red flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="ml-5">
                <h4 className="font-bold text-lg text-slate-900">Visit Our Office</h4>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Office 402, Crystal Tower M Hotel by Millennium, Business Bay, Dubai-UAE
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-2 fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Call Us Anytime</h4>
                  <p className="text-slate-600 mt-1">+971 55 334 3472</p>
                  <p className="text-slate-600 mt-1">+971 55 865 5905</p>
                  <p className="text-slate-600 mt-1">+971 50 496 6086</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-2 fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                  <p className="text-slate-600 mt-1">Umar66544@gmail.com</p>
                  <p className="text-slate-600 mt-1">Umartrp1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-brand-red fade-in">
              <h4 className="text-2xl font-bold mb-2">Send a Message</h4>
              <p className="text-slate-500 mb-8">Get a free quote or ask us anything.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-blue text-slate-600"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="water">Water Transport</option>
                    <option value="waste">Waste Management</option>
                    <option value="sludge">Sludge Removal</option>
                    <option value="sewage">Sewage Water Removal</option>
                    <option value="tse">TSE Water Supply</option>
                    <option value="sweet">Sweet Water Supply</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-blue"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-[#008bc5] transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-20">
        <div className="w-full h-70 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-slate-200">
          <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps?q=Crystal%20Tower%20M%20Hotel%20by%20Millennium%20Business%20Bay%20Dubai&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;