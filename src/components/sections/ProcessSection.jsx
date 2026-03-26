import React from 'react';
import { motion } from 'framer-motion';
const steps = [{
  number: "01",
  title: "Kontakt aufnehmen",
  description: "Formular oder Telefon - wir sind für Sie da"
}, {
  number: "02",
  title: "Beratung & Potential-Analyse",
  description: "Individuelles Konzept, gemeinsam mit Arzt und Kasse"
}, {
  number: "03",
  title: "Versorgungsplan & Genehmigung",
  description: "Wir begleiten Sie bei der Antragsstellung"
}, {
  number: "04",
  title: "Start der Pflege",
  description: "Zuverlässiger Beginn mit persönlichem Team"
}, {
  number: "05",
  title: "Kontinuierliche Qualität",
  description: "Regelmäßige Evaluation und Anpassungen"
}];
const ProcessSection = () => {
  return <section id="ablauf" className="section-padding relative overflow-hidden bg-neutral-50/50">
      <div className="absolute inset-0 z-0">
        <img src="https://horizons-cdn.hostinger.com/506afa5e-9879-44fd-ad9f-fe83a7b3f66e/bg_img21-we5dC.jpg" alt="Pflegekraft mit Patientin" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-50/33 via-yellow-50/33 to-transparent"></div>
      </div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            So funktioniert's
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Ihr Weg zur professionellen Intensivpflege in 5 einfachen Schritten
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gold-200/70 rounded-full hidden md:block"></div>
          <div className="space-y-12">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.15
          }} className="relative flex items-start space-x-6 md:space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gold-300 rounded-full flex items-center justify-center text-gold-600 font-bold text-xl z-10 shadow-md">
                  {step.number}
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl flex-grow card-shadow hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 font-heading">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed font-body">{step.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessSection;