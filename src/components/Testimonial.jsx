import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, rotateY: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hover: {
      y: -15,
      rotateY: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const testimonials = [
    {
      quote: "Admire Softech delivered our project ahead of schedule with exceptional quality. Their team's dedication was remarkable throughout the process.",
      author: "John Smith",
      role: "CEO, TechCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      highlight: "Project delivered ahead of schedule"
    },
    {
      quote: "Their cloud solutions transformed our operations, reducing costs by 40% while improving system reliability. Truly game-changing expertise.",
      author: "Sarah Johnson",
      role: "CTO, Innovate Ltd",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      highlight: "40% cost reduction"
    },
    {
      quote: "The mobile app they developed increased our customer engagement by 300% in just three months. User feedback has been overwhelmingly positive.",
      author: "Michael Chen",
      role: "Product Manager, RetailX",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      highlight: "300% engagement increase"
    },
    {
      quote: "Their AI integration helped us automate 80% of customer service queries. The implementation was seamless and the results outstanding.",
      author: "Emma Wilson",
      role: "Director of Operations, ServicePro",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      highlight: "80% automation achieved"
    },
    {
      quote: "We've worked with many developers, but Admire Softech stands out for their technical expertise and creative problem-solving approach.",
      author: "David Kim",
      role: "Founder, StartupHub",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      highlight: "Creative problem-solving"
    },
    {
      quote: "Their cybersecurity audit identified critical vulnerabilities we had missed. Their thorough approach gave us complete peace of mind.",
      author: "Lisa Rodriguez",
      role: "Security Lead, FinSecure",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      highlight: "Critical vulnerabilities identified"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative startups alike
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
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="perspective-1000"
            >
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                highlight={testimonial.highlight}
                renderStars={renderStars}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, avatar, rating, highlight, renderStars }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col transform-style-preserve-3d"
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
      }}
    >
      {renderStars(rating)}
      
      <p className="text-gray-600 text-lg mb-6 relative">
        <span className="absolute -left-2 -top-4 text-6xl text-gray-200 font-serif">"</span>
        {quote}
      </p>
      
      <div className="mt-4 mb-6 px-4 py-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="text-blue-600 font-medium">{highlight}</p>
      </div>
      
      <div className="flex items-center mt-auto">
        <motion.div 
          className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-500 relative"
          whileHover={{ rotate: 5, scale: 1.05 }}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full"></div>
          <img src={avatar} alt={author} className="w-full h-full object-cover relative" />
        </motion.div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{author}</h4>
          <p className="text-blue-600 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;