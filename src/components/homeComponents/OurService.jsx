import React, { useEffect } from 'react';
import { color, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { icon } from '@fortawesome/fontawesome-svg-core';

const OurService = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hover: {
      y: -15,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description: "Full-stack website development tailored to your brand and business goals.",
    color: "from-blue-300 to-blue-500",
    features: ["Frontend & backend", "Responsive design", "Performance optimization"]
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "User-centered designs to ensure engaging and intuitive digital experiences.",
    color: "from-pink-300 to-pink-500",
    features: ["Wireframes & prototypes", "User journey mapping", "Mobile-first design"]
  },
  {
    icon: "📈",
    title: "SEO Services",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
    color: "from-green-400 to-green-600",
    features: ["Keyword research", "Technical SEO", "On-page & off-page optimization"]
  },
  {
    icon: "🚀",
    title: "Hosting & Deployment",
    description: "Secure and scalable hosting solutions with fast and reliable deployment.",
    color: "from-indigo-300 to-indigo-500",
    features: ["Cloud & shared hosting", "CI/CD pipelines", "Domain & SSL setup"]
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and running smoothly.",
    color: "from-orange-400 to-red-400",
    features: ["Bug fixes", "Regular updates", "Performance monitoring"]
  },
  {
    icon: "🧩",
    title: "CMS Integration",
    description: "Flexible content management solutions for easy website updates and scalability.",
    color: "from-yellow-300 to-yellow-500",
    features: ["WordPress & Headless CMS", "Custom themes & plugins", "User-friendly admin panel"]
  }
];


  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to propel your business forward
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                features={service.features}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, color, features }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br ${color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all h-full flex flex-col`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start mb-6">
        <div className="text-5xl mr-4">{icon}</div>
        <h3 className="text-2xl font-bold mt-2">{title}</h3>
      </div>
      <p className="text-blue-100 mb-6 text-lg">{description}</p>
      
      <div className="mb-8 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-50">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <motion.div 
        className="mt-auto"
        whileHover={{ x: 5 }}
      >
        <button className="flex items-center text-white font-medium group">
          Discover more
          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default OurService;