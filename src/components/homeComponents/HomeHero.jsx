import React from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 15 + 5 + 'px',
              height: Math.random() * 15 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30 flex items-center justify-center mx-auto">
              <span className="text-white text-3xl font-bold">AS</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
              Transform Your Business
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cutting-edge software solutions powered by innovation and expertise
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-10 h-10 mx-auto text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;