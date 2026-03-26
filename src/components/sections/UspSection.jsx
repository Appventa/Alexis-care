import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Users, UserCheck, Star } from 'lucide-react';

const usps = [
  {
    icon: Clock,
    title: "Verlässlichkeit rund um die Uhr",
    description: "24/7 Intensivpflege durch qualifiziertes Fachpersonal"
  },
  {
    icon: Heart,
    title: "Ganzheitliche, individuelle Betreuung",
    description: "Nicht nur Technik, sondern Menschlichkeit und Lebensqualität"
  },
  {
    icon: Users,
    title: "Organisation aus einer Hand",
    description: "Wir koordinieren Ärzte, Therapeuten, Hilfsmittel und Angehörige"
  },
  {
    icon: UserCheck,
    title: "Mitspracherecht für Angehörige",
    description: "Entscheidungen werden gemeinsam und transparent getroffen"
  },
  {
    icon: Star,
    title: "Lebensqualität trotz Pflegebedarf",
    description: "Alltag ermöglichen - Ausflüge, Freizeitaktivitäten, Therapiebegleitung"
  }
];

const UspSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Warum Alexis Care?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Unsere einzigartigen Stärken machen den Unterschied in der Intensivpflege
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.slice(0, 3).map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gold-50 p-8 rounded-2xl card-shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-6 shadow">
                <usp.icon className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 font-heading">{usp.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-body">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspSection;