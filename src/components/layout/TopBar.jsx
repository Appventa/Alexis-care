import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
const TopBar = () => {
  return <div className="bg-transparent border-b border-neutral-200/50">
      <div className="container-max flex justify-between items-center py-2">
        <div className="flex items-center space-x-2">
          <img src="/mobile_AC_Logo.png" alt="Alexis Care Logo" className="h-10 w-auto md:hidden" />
          <img src="/NEW_AC_Header_Logo.png" alt="Alexis Care Logo" className="h-12 w-auto hidden md:block" />
        </div>
        <div className="flex items-center space-x-3 md:space-x-6 text-sm text-neutral-600 font-body">
          <a href="tel:+4901637858991" className="flex items-center space-x-1.5 hover:text-gold-600 transition-colors">
            <Phone className="h-4 w-4 shrink-0" />
            <span className="text-xs sm:text-sm">(+49) 0163 - 7858991</span>
          </a>
          <a href="mailto:info@alexis-care.de" className="flex items-center space-x-1.5 hover:text-gold-600 transition-colors">
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline">info@alexis-care.de</span>
          </a>
          <div className="hidden sm:flex items-center space-x-3">
            <a href="#" className="text-neutral-500 hover:text-blue-600 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-pink-600 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default TopBar;