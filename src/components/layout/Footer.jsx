import React from 'react';
const Footer = ({ footerInfo }) => {
  return <footer className="bg-neutral-900 text-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://horizons-cdn.hostinger.com/506afa5e-9879-44fd-ad9f-fe83a7b3f66e/new_ac_header_logo-P6HwB.png" alt="Alexis Care Logo" className="h-10 w-auto" />
            </div>
            <p className="text-neutral-400 leading-relaxed font-body">
              Professionelle Intensivpflege mit Herz. 
              Wir begleiten Sie liebevoll durch den Alltag.
            </p>
          </div>
          <div>
            <span className="text-lg font-heading font-semibold mb-4 block">Leistungen</span>
            <ul className="space-y-2 text-neutral-400 font-body">
              <li>Intensivpflege 24/7</li>
              <li>Beatmungspflege</li>
              <li>Wundversorgung</li>
              <li>Angehörigenberatung</li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-heading font-semibold mb-4 block">Rechtliches</span>
            <ul className="space-y-2 text-neutral-400 font-body">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AKI-Richtlinie</a></li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-heading font-semibold mb-4 block">{footerInfo.title}</span>
             <ul className="space-y-2 text-neutral-400 font-body">
              <li>{footerInfo.line1}</li>
              <li>{footerInfo.line2}</li>
              <li>{footerInfo.line3}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400 font-body">
            © 2025 Alexis Care GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;