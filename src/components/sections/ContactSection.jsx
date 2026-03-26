import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
      duration: 5000
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const backgroundImageUrl = "https://horizons-cdn.hostinger.com/506afa5e-9879-44fd-ad9f-fe83a7b3f66e/da3630085c2c006596e7b30c4982d227.jpg";

  return <section id="kontakt" className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/50"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">Kontaktieren Sie Uns!</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl card-shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 font-heading">Alexis Care GmbH</h3>
              <div className="space-y-6 font-body">
                <div className="flex items-center gap-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Telefon</p>
                    <p className="text-neutral-600">+49 (0) 176-700 19952</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">E-Mail</p>
                    <p className="text-neutral-600">info@alexiscare.de</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Adresse</p>
                    <p className="text-neutral-600">Friesdorfer Str. 194 a<br />53175 Bonn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gold-600/90 backdrop-blur-sm text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 font-heading">Schnelle Reaktionszeit</h3>
              <p className="text-gold-100 font-body">
                Wir verstehen, dass Intensivpflege oft dringend benötigt wird. 
                Deshalb melden wir uns garantiert innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl card-shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Name *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white/50" placeholder="Ihr vollständiger Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  E-Mail *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white/50" placeholder="ihre.email@beispiel.de" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white/50" placeholder="Ihre Telefonnummer" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Nachricht *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none bg-white/50" placeholder="Beschreiben Sie Ihre Situation und Ihre Bedürfnisse..." />
              </div>
              <Button type="submit" className="w-full btn-primary text-lg py-4">
                <Send className="h-5 w-5 mr-2" />
                Beratungsanfrage senden
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;