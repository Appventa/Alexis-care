import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
const TopBar = () => {
  return <div className="bg-transparent border-b border-neutral-200/50">
      <div className="container-max flex justify-between items-center py-2">
        <div className="flex items-center space-x-2">
          <img src="/NEW_AC_Header_Logo.png" alt="Alexis Care Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-6 text-sm text-neutral-600 font-body">
          <a href="tel:+4901637858991" className="flex items-center space-x-2 hover:text-gold-600 transition-colors">
            <Phone className="h-4 w-4" />
            <span>(+49) 0163 - 7858991</span>
          </a>
          <a href="mailto:info@alexis-care.de" className="hidden md:flex items-center space-x-2 hover:text-gold-600 transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@alexis-care.de</span>
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-neutral-500 hover:text-blue-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-pink-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default TopBar;