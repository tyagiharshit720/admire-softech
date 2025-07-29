// WhoWeAre.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const videoControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      videoControls.start("visible");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 bg-blue-100 opacity-75 -z-10" />
              Who We Are
            </span>
          </h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Admire Softech is a leading <span className="font-semibold text-blue-600">IT solutions and software development company</span> dedicated to delivering innovative, scalable, and cutting-edge technology services. With a passion for excellence, we empower businesses worldwide to thrive in the digital era through customized software, web, mobile, and AI-driven solutions.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Learn More
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Our Services
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative rounded-xl overflow-hidden shadow-xl"
          initial="hidden"
          animate={videoControls}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Video placeholder - replace with your actual video */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            >
              <source src="/videos/company-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Play button overlay (optional) */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="w-16 h-16 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;