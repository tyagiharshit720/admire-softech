import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeHero from '../components/homeComponents/HomeHero';
import OurService from '../components/homeComponents/OurService';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
    <HomeHero/>
    <OurService/>

      {/* <ServicesSection /> */}
      
      {/* Animated About Section */}
      <AboutSection />

      
      
      {/* Parallax Stats Section */}
      <StatsSection />

      <Testimonial/>
      
    
    </div>
  );
};

// Enhanced Hero Section with Particle Background




// Animated About Section with Image Reveal
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="rounded-xl shadow-2xl w-full max-w-lg"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl shadow-xl p-6 w-32 h-32 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-white text-4xl">12+</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Admire Softech</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate technologists dedicated to delivering innovative 
              solutions that drive business transformation. Since 2010, we've been helping 
              companies navigate the digital landscape with cutting-edge software.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Innovation Driven', 'Client Focused', 'Quality Assurance', 'Agile Methodology'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Parallax Stats Section
const StatsSection = () => {
  return (
    <section className="relative py-32 bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <StatItem number="200+" label="Happy Clients" delay={0.1} />
          <StatItem number="500+" label="Projects Completed" delay={0.2} />
          <StatItem number="50+" label="Expert Team" delay={0.3} />
          <StatItem number="12+" label="Years Experience" delay={0.4} />
        </div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-2">{number}</div>
      <div className="text-blue-200 text-lg">{label}</div>
    </motion.div>
  );
};






export default Home;