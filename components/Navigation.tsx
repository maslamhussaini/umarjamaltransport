import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, MapPin, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onServiceSelect: (service: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, onServiceSelect }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleServiceClick = (service: string) => {
    onNavigate(service);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <img className="h-16 w-auto object-contain" src="/assets/logo.jpeg" alt="Umar Juma Transport LLC" />
            <div className="ml-3 hidden md:block">
              <h1 className="text-xl font-bold text-slate-800 leading-none">
                <span className="text-brand-red">UMAR JUMA</span>
              </h1>
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mt-1">Transport LLC</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button 
                onClick={() => onNavigate('services')}
                className={`text-sm font-medium transition-colors inline-flex items-center ${
                  currentPage.startsWith('service-') ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-brand-red hidden group-hover:block transition-all duration-200">
                <div className="py-2">
                  <button 
                    onClick={() => onNavigate('services')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors"
                  >
                    All Services
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-water')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    Water Transport
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-waste')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    Waste Management
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sludge')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    Sludge Removal
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sewage')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    Sewage Water Removal
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-tse')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    TSE Water Supply
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sweet')}
                    className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red transition-colors border-t border-slate-50"
                  >
                    Sweet Water Supply
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              About Us
            </button>
            
            <button 
              onClick={() => onNavigate('why-choose-us')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'why-choose-us' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              Why Choose Us
            </button>
            
            <button 
              onClick={() => onNavigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-slate-700 hover:text-brand-red p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => {onNavigate('home'); toggleMobileMenu();}}
              className="block w-full text-left py-3 px-4 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-red rounded-lg"
            >
              Home
            </button>

            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <div className="flex items-center justify-between w-full pr-4">
                <button 
                  onClick={() => {onNavigate('services'); toggleMobileMenu();}}
                  className="block w-full text-left py-3 px-4 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-red rounded-lg"
                >
                  Services
                </button>
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="p-2 text-slate-500"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Sub Menu */}
              {isServicesDropdownOpen && (
                <div className="pl-8 space-y-2 bg-slate-50 rounded-lg py-2">
                  <button 
                    onClick={() => handleServiceClick('service-water')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    Water Transport
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-waste')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    Waste Management
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sludge')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    Sludge Removal
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sewage')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    Sewage Water Removal
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-tse')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    TSE Water Supply
                  </button>
                  <button 
                    onClick={() => handleServiceClick('service-sweet')}
                    className="block w-full text-left py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-red"
                  >
                    Sweet Water Supply
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => {onNavigate('about'); toggleMobileMenu();}}
              className="block w-full text-left py-3 px-4 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-red rounded-lg"
            >
              About Us
            </button>
            
            <button 
              onClick={() => {onNavigate('why-choose-us'); toggleMobileMenu();}}
              className="block w-full text-left py-3 px-4 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-red rounded-lg"
            >
              Why Choose Us
            </button>
            
            <button 
              onClick={() => {onNavigate('contact'); toggleMobileMenu();}}
              className="block w-full text-left py-3 px-4 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-red rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;