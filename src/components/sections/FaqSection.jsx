import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Wer kann Intensivpflege bekommen?",
    answer: "Intensivpflege können Personen erhalten, die aufgrund ihrer Erkrankung hohe Anforderungen laut SGB V und AKI-Richtlinie erfüllen. Dies umfasst meist beatmungspflichtige Patienten oder solche mit komplexen medizinischen Bedürfnissen."
  },
  {
    question: "Wie läuft die Kostenübernahme durch die Krankenkasse?",
    answer: "Die Kosten für Intensivpflege werden in der Regel von der Krankenkasse übernommen, wenn die medizinische Notwendigkeit nachgewiesen ist. Wir unterstützen Sie bei der Antragsstellung und allen erforderlichen Formalitäten."
  },
  {
    question: "Welche Qualifikationen haben Ihre Pflegekräfte?",
    answer: "Unsere Fachkräfte verfügen über eine Weiterbildung in Intensivpflege und Anästhesie. Sie sind speziell geschult für die Betreuung von beatmungspflichtigen und intensivpflegebedürftigen Patienten."
  },
  {
    question: "Wie wird die 24-Stunden-Versorgung organisiert?",
    answer: "Wir arbeiten mit einem festen Team von qualifizierten Pflegekräften, die sich in Schichten abwechseln. So gewährleisten wir eine kontinuierliche und vertraute Betreuung rund um die Uhr."
  },
  {
    question: "Kann man die Versorgung anpassen oder flexibel gestalten?",
    answer: "Ja, absolut. Wir passen unsere Versorgung kontinuierlich an die sich ändernden Bedürfnisse an. Regelmäßige Evaluationen sorgen dafür, dass die Pflege immer optimal auf den Patienten abgestimmt ist."
  }
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
            Antworten auf die wichtigsten Fragen zur Intensivpflege
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-neutral-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4 font-heading">{faq.question}</h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-neutral-600 leading-relaxed font-body">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;