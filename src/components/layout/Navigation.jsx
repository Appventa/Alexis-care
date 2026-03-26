import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-transparent">
      <div className="container-max">
        <div className="flex justify-between items-center py-3">
          <div className="hidden md:flex items-center space-x-8 font-heading text-neutral-700">
            <a href="#leistungen" className="hover:text-gold-600 transition-colors">Leistungen</a>
            <a href="#ueber-uns" className="hover:text-gold-600 transition-colors">Über Uns</a>
            <a href="#ablauf" className="hover:text-gold-600 transition-colors">Ablauf</a>
            <a href="#faq" className="hover:text-gold-600 transition-colors">FAQ</a>
          </div>
          <Button onClick={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })} className="btn-primary ml-auto">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;