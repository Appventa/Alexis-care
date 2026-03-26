import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Shield, Calendar, Users, FileText } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: "Grund- und Behandlungspflege",
    description: "Körperpflege, Mobilisation, Ernährung, Vitalwerte"
  },
  {
    icon: Stethoscope,
    title: "Medizintechnische Versorgung",
    description: "Beatmung, Tracheostoma, Absaugen, Sauerstoff, Notfallmanagement"
  },
  {
    icon: Shield,
    title: "Wundversorgung & Schmerzmanagement",
    description: "Invasive Eingriffe, professionelle Wundversorgung"
  },
  {
    icon: Calendar,
    title: "Koordination & Therapiebegleitung",
    description: "Ärzte, Therapeuten, Reha, Physio, Ergo, Logopädie"
  },
  {
    icon: Users,
    title: "Angehörigenberatung",
    description: "Beratung, Anleitung und Unterstützung für Familien"
  },
  {
    icon: FileText,
    title: "Administrative Unterstützung",
    description: "Formularkram, Kostenträger, Entlassungsmanagement"
  }
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Leistungen im Detail
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Umfassende Intensivpflege mit höchsten Qualitätsstandards
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl card-shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gold-100 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 font-heading">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;