import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
const AboutSection = () => {
  return <section id="ueber-uns" className="relative text-white section-padding">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Hintergrundbild einer freundlichen Pflegesituation" src="https://horizons-cdn.hostinger.com/506afa5e-9879-44fd-ad9f-fe83a7b3f66e/alexis_businesslook_03-0L1t0.png" />
        <div className="absolute inset-0 bg-neutral-900/70"></div>
      </div>
      
      <div className="relative z-10 container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gold-300">Alexis Care GmbH</h2>
            <div className="space-y-4 text-neutral-200 leading-relaxed font-body text-base">
                <p>
                    Das Pflegeleitbild der Alexis Care GmbH stellt die ganzheitliche Pflege in den Mittelpunkt, bei der die Wünsche und Bedürfnisse der Pflegebedürftigen sowie ihrer Angehörigen oberste Priorität haben. Jeder Mensch behält in unserer Versorgung seine Würde.
                </p>
                <p>
                    Fachliche Kompetenz und Qualität bilden dabei die Grundlage unseres Handelns. Der Mensch wird als Einheit von Körper, Geist, Seele und Umwelt verstanden, um ihm ein Leben in seiner vertrauten Umgebung zu ermöglichen.
                </p>
                <p>
                    Pflege bedeutet für uns nicht nur die Stabilisierung von Krankheitsverläufen, sondern auch die Förderung des Wohlbefindens. Wir übernehmen Verantwortung und fördern eine transparente Fehlerkultur.
                </p>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative group aspect-video">
            <iframe className="rounded-2xl shadow-2xl w-full h-full object-cover" src="https://www.youtube.com/embed/90tnM0ZXJr8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;