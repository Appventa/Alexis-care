
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const HeroSection = ({ heroContent }) => {
  return <section className="relative h-[600px] text-white">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Eine fürsorgliche Pflegekraft lächelt eine ältere Patientin in einem hellen Raum an" src="/hero_img.jpg" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight font-heading">
              {heroContent.line1}<br />
              <span className="text-yellow-400">{heroContent.highlight1}</span>{' '}
              <span className="text-blue-400">{heroContent.highlight2}</span>{' '}
              <span className="text-yellow-400">{heroContent.highlight3}</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-200 leading-relaxed font-body">
              Bei Alexis Care steht der Mensch im Mittelpunkt – wir begleiten Sie liebevoll durch den Alltag.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="btn-primary text-sm sm:text-lg px-5 py-2.5 sm:px-8 sm:py-4" onClick={() => document.getElementById('kontakt').scrollIntoView({
              behavior: 'smooth'
            })}>
                Jetzt unverbindlich beraten lassen
              </Button>
              <Button variant="outline" className="btn-secondary-hero text-sm sm:text-lg px-5 py-2.5 sm:px-8 sm:py-4" onClick={() => document.getElementById('leistungen').scrollIntoView({
              behavior: 'smooth'
            })}>
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
