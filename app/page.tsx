'use client';

import React, { useState } from 'react';
import HomePage from '../components/pages/HomePage';

export default function Home() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  return <HomePage onNavigate={() => {}} onServiceSelect={handleServiceSelect} />;
}