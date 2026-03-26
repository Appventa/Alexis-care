import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Navigation from '@/components/layout/Navigation';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <TopBar />
      <Navigation />
    </header>
  );
};

export default Header;