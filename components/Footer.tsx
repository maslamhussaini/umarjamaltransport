import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const handleServiceClick = (service: string) => {
    // No navigation needed - Link components handle routing
  };

  return (
    <footer className="bg-[#1D2939] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img src="/assets/logo.jpeg" alt="Logo" className="h-12 w-auto" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Umer Juma Transport (UJT) is a global technology solutions provider with complex logistics requirements.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Office 402, Crystal Tower M Hotel by Millennium, Business Bay, Dubai-UAE
                </span>
              </li>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-sm">+971 55 334 3472</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-sm">+971 55 865 5905</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-sm">+971 50 496 6086</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-sm">Umar66544@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-sm">Umartrp1@gmail.com</span>
                </li>
              </ul>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <div className="grid grid-cols-1 gap-2 text-sm text-slate-400">
              <Link
                href="/services/water-transport"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                Water Transport
              </Link>
              <Link
                href="/services/waste-management"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                Waste Management
              </Link>
              <Link
                href="/services/sludge-removal"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                Sludge Removal
              </Link>
              <Link
                href="/services/sewage-removal"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                Sewage Water Removal
              </Link>
              <Link
                href="/services/tse-water"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                TSE Water Supply
              </Link>
              <Link
                href="/services/sweet-water"
                className="hover:text-brand-red transition-colors flex items-center text-left"
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                Sweet Water Supply
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Umar Juma Transport LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;