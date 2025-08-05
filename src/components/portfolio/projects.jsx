import React from 'react';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'PHP & MySQL Development',
    icon: ServerIcon,
    image:
      'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/dashboard-page.png',
    description:
      'PHP is a server-side programming language that creates dynamic web pages. MySQL securely stores all your website’s data. Together, they build interactive websites where user data can be saved, updated, and retrieved easily — like contact forms, user logins, and product catalogs.',
    points: [
      'Server-side scripting for dynamic content',
      'Secure data storage and management',
      'Supports user authentication and forms',
    ],
  },
  {
    title: 'React & Node.js Applications',
    icon: CodeBracketIcon,
    image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/dashboard-page.png',
    description:
      'React builds fast, interactive user interfaces in the browser. Node.js runs JavaScript on the server for backend tasks like database handling, authentication, and APIs. Together, they create web apps with real-time updates and smooth user experiences.',
    points: [
      'Component-based UI for fast development',
      'Server-side logic with Node.js and Express',
      'Real-time data and API integration',
    ],
  },
  {
    title: 'Mobile Responsive Design',
    icon: DevicePhoneMobileIcon,
    image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/dashboard-page.png',
    description:
      'Mobile responsive design ensures your website looks great on phones, tablets, and desktops. Using Tailwind CSS or Bootstrap, layouts automatically adjust to screen sizes for a consistent and user-friendly experience everywhere.',
    points: [
      'Flexible layouts for all device sizes',
      'Smooth user experience on mobile devices',
      'Built with Tailwind CSS / Bootstrap',
    ],
  },
  {
    title: 'SEO Optimized Pages',
    icon: MagnifyingGlassCircleIcon,
    image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/dashboard-page.png',
    description:
      'SEO (Search Engine Optimization) helps your website get noticed by Google and other search engines. Using meta tags, clean URLs, fast loading, and structured data, SEO improves your site’s ranking and brings more visitors.',
    points: [
      'Meta tags and clean URL structure',
      'Fast loading and performance optimization',
      'Structured data for rich search results',
    ],
  },
];

const Projects = () => {
  return (
    <section id='projects' className="bg-white py-20 px-6">
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Technology Services</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore the technologies and development services we provide to build modern, responsive, and optimized websites and applications.
        </p>
      </motion.div>

      <div className="space-y-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon className="h-10 w-10 text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Staggered List Items */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  viewport={{ once: true }}
                  className="list-disc pl-5 space-y-1 text-sm text-gray-700"
                >
                  {service.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
