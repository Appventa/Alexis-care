import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, UserCheck, Star } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Vertrauen durch Qualität
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Gesetzlich verankert und fachlich kompetent
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gold-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-10 w-10 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">SGB V konform</h3>
            <p className="text-neutral-600 font-body">Gesetzlich verankerte Qualitätsstandards</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-gold-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-10 w-10 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">AKI-Richtlinie</h3>
            <p className="text-neutral-600 font-body">Zertifizierte Intensivpflege-Standards</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gold-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="h-10 w-10 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">Fachkräfte</h3>
            <p className="text-neutral-600 font-body">Weiterbildung in Intensivpflege & Anästhesie</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gold-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-10 w-10 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">Qualität</h3>
            <p className="text-neutral-600 font-body">Kontinuierliche Qualitätssicherung</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;