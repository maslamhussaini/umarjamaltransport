'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import PageLoader from '../components/PageLoader';
import HomePage from '../components/pages/HomePage';
import ServicesPage from '../components/pages/ServicesPage';
import AboutPage from '../components/pages/AboutPage';
import ContactPage from '../components/pages/ContactPage';
import Footer from '../components/Footer';

// Service page components
import WaterTransportPage from '../components/pages/service/WaterTransportPage';
import WasteManagementPage from '../components/pages/service/WasteManagementPage';
import SludgeRemovalPage from '../components/pages/service/SludgeRemovalPage';
import SewageRemovalPage from '../components/pages/service/SewageRemovalPage';
import TSEWaterPage from '../components/pages/service/TSEWaterPage';
import SweetWaterPage from '../components/pages/service/SweetWaterPage';
import WhyChooseUsPage from '../components/pages/WhyChooseUsPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const navigateTo = (pageId: string) => {
    setIsLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      setCurrentPage(pageId);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    navigateTo('contact');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'about':
        return <AboutPage />;
      case 'why-choose-us':
        return <WhyChooseUsPage />;
      case 'contact':
        return <ContactPage selectedService={selectedService} />;
      case 'service-water':
        return <WaterTransportPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'service-waste':
        return <WasteManagementPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'service-sludge':
        return <SludgeRemovalPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'service-sewage':
        return <SewageRemovalPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'service-tse':
        return <TSEWaterPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      case 'service-sweet':
        return <SweetWaterPage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
      default:
        return <HomePage onNavigate={navigateTo} onServiceSelect={handleServiceSelect} />;
    }
  };

  return (
    <div className="min-h-screen">
      <PageLoader isLoading={isLoading} />
      <Navigation 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onServiceSelect={handleServiceSelect}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}