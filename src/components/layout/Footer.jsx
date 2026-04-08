import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const legalDocs = {
  impressum: {
    title: 'Impressum',
    sections: [
      { heading: 'Angaben gemäß § 5 DDG', text: 'Alexis Care GmbH\nFriesdorferstr. 194a, 53175 Bonn\nE-Mail: info@alexis-care.de\nTelefon: +49 228-84267211' },
      { heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV', text: 'Alexty Ama Oforiwaa Ahenkorah' },
      { heading: 'Register', text: 'Amtsgericht Bonn, HRB 30041\nInstitutionskennzeichen 462 543 761' },
      { heading: 'Verantwortliche Pflegedienstleitung', text: 'Alexty Ama Oforiwaa Ahenkorah' },
      { heading: 'Beauftragte für Medizinproduktesicherheit', text: 'Alexty Ama Oforiwaa Ahenkorah' },
      { heading: 'Vertretungsberechtigter', text: 'Alexty Ama Oforiwaa Ahenkorah' },
      { heading: 'Berufsrechtliche Regelungen', text: 'Die maßgeblichen berufsrechtlichen Regelungen finden sich unter anderem in:\nOrdnung (veröffentlicht im Bundesgesetzblatt I, Seite 3074, in der Fassung vom 24.09.1998)' },
      { heading: 'Steuerbefreiung gemäß § 4 Nr. 16 und Nr. 14 UStG', text: '1. § 4 Nr. 16 Satz 1 Buchst. a UStG: Pflegedienstleistungen öffentlicher Einrichtungen\n2. § 4 Nr. 16 Satz 1 Buchst. b–l UStG: Pflegedienstleistungen anerkannter sozialer Einrichtungen i.S.d. Art. 132 Abs. 1 Buchst. g MwStSystRL\n3. § 4 Nr. 14 Buchst. b UStG: Leistungen mit sozialer Zweckbestimmung (Schutz der menschlichen Gesundheit)' },
      { heading: 'Quellenangaben für verwendete Bilder und Grafiken', text: 'Envato.com' },
      { heading: 'Umsetzung und Betreuung', text: 'theokokkinidis.pro\nUpventa Holdings LTD' },
    ]
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    sections: [
      { heading: null, text: 'Der Schutz Ihrer persönlichen Daten, insbesondere von Gesundheitsdaten, ist uns ein zentrales Anliegen. Wir verarbeiten Ihre Daten ausschließlich im Rahmen der gesetzlichen Vorgaben der DSGVO, des BDSG sowie der für Pflege- und Betreuungsdienste geltenden Vorschriften.' },
      { heading: '1. Verantwortlicher', text: 'Alexis Care GmbH\nFriesdorfer Str. 194a, 53175 Bonn\nTelefon: 0163 - 7858991\nE-Mail: info@alexis-care.de' },
      { heading: '2. Erhebung und Verarbeitung personenbezogener Daten', text: 'Wir verarbeiten personenbezogene Daten unserer Kunden, Patienten und deren Angehörigen (z. B. Name, Anschrift, Geburtsdatum, Telefonnummer, Bankverbindung). Darüber hinaus verarbeiten wir besondere Kategorien personenbezogener Daten (Gesundheitsdaten gemäß Art. 9 DSGVO), soweit dies zur Erbringung unserer Pflege- und Betreuungsleistungen erforderlich ist.' },
      { heading: '3. Zwecke der Datenverarbeitung', text: '• Planung, Organisation und Durchführung von Pflege- und Betreuungsleistungen\n• Erfüllung von vertraglichen Pflichten\n• Abrechnung mit Krankenkassen, Pflegekassen und privaten Kostenträgern\n• Erfüllung gesetzlicher Dokumentationspflichten\n• Kommunikation mit Ärzten, Therapeuten und anderen Gesundheitsdienstleistern' },
      { heading: '4. Weitergabe von Daten', text: 'Eine Weitergabe erfolgt ausschließlich, wenn sie zur Vertragserfüllung notwendig ist.' },
      { heading: '5. Speicherdauer', text: 'Daten werden nur so lange gespeichert, wie es zur Erfüllung der genannten Zwecke erforderlich ist oder wir gesetzlich dazu verpflichtet sind.' },
      { heading: '6. Ihre Rechte', text: 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.' },
      { heading: '7. Datensicherheit', text: 'Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation und unbefugten Zugriff zu schützen.' },
    ]
  },
  agb: {
    title: 'Allgemeine Geschäftsbedingungen (AGB)',
    sections: [
      { heading: '1. Geltungsbereich', text: 'Diese AGB gelten für alle Verträge über Pflege- und Betreuungsleistungen zwischen der Alexis Care GmbH und ihren Kunden.' },
      { heading: '2. Vertragsabschluss', text: 'Ein Vertrag kommt durch Unterzeichnung des Pflegevertrages durch beide Parteien oder durch schriftliche Bestätigung unsererseits zustande.' },
      { heading: '3. Leistungen', text: 'Die vereinbarten Leistungen ergeben sich aus dem individuellen Pflege- und Betreuungsvertrag.' },
      { heading: '4. Vergütung', text: 'Die Abrechnung erfolgt gemäß den gültigen Vergütungssätzen, entweder direkt mit den Kostenträgern oder mit dem Kunden selbst.' },
      { heading: '5. Pflichten des Kunden', text: 'Der Kunde verpflichtet sich, alle für die Pflege relevanten Informationen bereitzustellen.' },
      { heading: '6. Kündigung', text: 'Der Vertrag kann von beiden Seiten unter Einhaltung der vereinbarten Kündigungsfrist schriftlich gekündigt werden.' },
      { heading: '7. Haftung', text: 'Wir haften im Rahmen der gesetzlichen Bestimmungen. Für leichte Fahrlässigkeit wird nur bei Verletzung wesentlicher Vertragspflichten gehaftet.' },
      { heading: '8. Schlussbestimmungen', text: 'Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen unberührt.' },
    ]
  },
  aki: {
    title: 'AKI-Richtlinie (Allgemeine Kunden-Informationen)',
    sections: [
      { heading: '1. Transparenz', text: 'Unsere Kunden und deren Angehörige erhalten umfassende Informationen zu allen Leistungen, Kosten und Vertragsbedingungen.' },
      { heading: '2. Vertraulichkeit & Datenschutz', text: 'Wir gehen mit allen personenbezogenen und insbesondere gesundheitsbezogenen Daten streng vertraulich um.' },
      { heading: '3. Qualität der Leistungen', text: 'Unsere Pflege- und Betreuungskräfte sind fachlich qualifiziert und handeln nach den geltenden pflegerischen Standards.' },
      { heading: '4. Kundenrechte', text: 'Kunden haben jederzeit das Recht auf umfassende Beratung, Einsicht in ihre Pflegedokumentation sowie die freie Wahl von Leistungen.' },
      { heading: '5. Beschwerdemanagement', text: 'Kunden können Beschwerden jederzeit an die Geschäftsführung richten. Beschwerden werden fair, vertraulich und zeitnah bearbeitet.' },
      { heading: '6. Ethik & Verantwortung', text: 'Wir verpflichten uns zu einem respektvollen, menschenwürdigen Umgang und einer ethisch verantwortungsvollen Pflege.' },
    ]
  }
};

const LegalModal = ({ docKey, onClose }) => {
  const doc = legalDocs[docKey];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-100">
          <h2 className="text-xl font-bold text-neutral-900 font-heading">{doc.title}</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 transition-colors rounded-full p-1 hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 space-y-5 font-body text-sm text-neutral-700 leading-relaxed">
          {doc.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h3 className="font-semibold text-neutral-900 mb-1">{section.heading}</h3>
              )}
              <p className="whitespace-pre-line">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-neutral-100 text-right">
          <button
            onClick={onClose}
            className="bg-gold-600 hover:bg-gold-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ footerInfo }) => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <footer className="bg-neutral-900 text-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="/NEW_AC_Header_Logo.png" alt="Alexis Care Logo" className="h-10 w-auto" />
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
                <li>
                  <button onClick={() => setActiveModal('impressum')} className="hover:text-white transition-colors text-left">
                    Impressum
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('datenschutz')} className="hover:text-white transition-colors text-left">
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('agb')} className="hover:text-white transition-colors text-left">
                    AGB
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('aki')} className="hover:text-white transition-colors text-left">
                    AKI-Richtlinie
                  </button>
                </li>
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
      </footer>

      {activeModal && (
        <LegalModal docKey={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default Footer;
