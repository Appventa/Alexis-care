
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import UspSection from '@/components/sections/UspSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TrustSection from '@/components/sections/TrustSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

function App() {
  const [heroContent, setHeroContent] = useState({
    line1: "Intensivpflege – Rund um die Uhr.",
    highlight1: "Fachkundig.",
    highlight2: "Menschlich.",
    highlight3: "Individuell."
  });

  const [footerInfo, setFooterInfo] = useState({
    title: "Öffnungszeiten",
    line1: "Mo-Fr: 9:00 - 17:00 Uhr",
    line2: "Notfallnummer:",
    line3: "(+49) 0163 - 7858991"
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Alexis Care GmbH - 24/7 Intensivpflege fachkundig, menschlich, individuell</title>
        <meta name="description" content="Professionelle Intensivpflege rund um die Uhr. Bei Alexis Care steht der Mensch im Mittelpunkt - wir begleiten Sie liebevoll durch den Alltag mit qualifiziertem Fachpersonal." />
        <meta property="og:title" content="Alexis Care GmbH - 24/7 Intensivpflege fachkundig, menschlich, individuell" />
        <meta property="og:description" content="Professionelle Intensivpflege rund um die Uhr. Bei Alexis Care steht der Mensch im Mittelpunkt - wir begleiten Sie liebevoll durch den Alltag mit qualifiziertem Fachpersonal." />
      </Helmet>

      <div className="min-h-screen text-neutral-800">
        <Header />
        <main>
          <HeroSection heroContent={heroContent} />
          <UspSection />
          <AboutSection />
          <ServicesSection />
          <TrustSection />
          <ProcessSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer footerInfo={footerInfo} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
