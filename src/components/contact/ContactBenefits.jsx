import React from 'react';
import { Clock, ShieldCheck, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get replies within 24 hours to all your queries.',
    details:
      'Our team guarantees timely communication to keep your projects moving smoothly without delays.'
  },
  {
    icon: UserCheck,
    title: 'Personalized Service',
    description: 'Dedicated account managers for every client.',
    details:
      'Receive tailor-made strategies and support with a dedicated expert focused solely on your success.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Experts',
    description: 'Work with professionals who prioritize your success.',
    details:
      'Benefit from experienced professionals who bring proven skills and commitment to every project.'
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
  }
};

const iconVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // bounce effect
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
};

const ContactBenefits = () => (
  <section className="max-w-6xl mx-auto my-16 px-6">
    <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">
      Why Reach Out to Admire Softech?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {benefits.map((b, i) => (
        <motion.div
          key={i}
          className="relative bg-white rounded-xl p-8 shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[1.05] transition-transform"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <motion.div
            className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow-md"
            initial="initial"
            animate="animate"
            variants={iconVariants}
          >
            <b.icon className="w-8 h-8" />
          </motion.div>
          <h4 className="mt-10 text-xl font-semibold mb-3">{b.title}</h4>
          <p className="text-gray-700 text-sm mb-4">{b.description}</p>
          <p className="text-gray-500 text-xs leading-relaxed">{b.details}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ContactBenefits;
