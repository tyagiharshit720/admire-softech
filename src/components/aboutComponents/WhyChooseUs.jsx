import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      title: "Industry Experts",
      description: "Our team consists of certified professionals with 10+ years average experience",
      icon: "👨‍💻",
      stat: "100+"
    },
    {
      title: "Proven Track Record",
      description: "Successful projects delivered across multiple industries",
      icon: "📊",
      stat: "500+"
    },
    {
      title: "Client Satisfaction",
      description: "Repeat business and long-term partnerships",
      icon: "❤️",
      stat: "98%"
    },
    {
      title: "Innovation Focus",
      description: "Dedicated R&D team for cutting-edge solutions",
      icon: "🚀",
      stat: "20+"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Why Choose Admire Softech?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine technical excellence with business understanding to deliver exceptional value
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-blue-100 rounded-xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold text-gray-800">Award-Winning Solutions</h3>
                <p className="text-gray-600 mt-2">Recognized for innovation and excellence</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold">
              Since 2015
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Differentiators</h3>
            <ul className="space-y-4">
              {[
                "End-to-end ownership of projects",
                "Agile methodology with fixed-price options",
                "Dedicated account managers",
                "Transparent communication",
                "Security-first approach",
                "Continuous support & maintenance"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{advantage.stat}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mr-4">
            Schedule a Consultation
          </button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;