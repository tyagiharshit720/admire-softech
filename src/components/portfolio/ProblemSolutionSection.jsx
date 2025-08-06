import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SequentialLottie = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setShowSecond(true);
        setIsFading(false);
      }, 600); 
      
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {!showSecond && (
          <motion.div
            key="first"
            initial={{ opacity: 1 }}
            animate={{ opacity: isFading ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DotLottieReact
              src="https://lottie.host/1faf222c-5129-4315-9625-c00fe0e8341c/QK9jqolaW0.lottie"
              loop={false}
              autoplay
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        )}

        {showSecond && (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <DotLottieReact
              src="https://lottie.host/a4d20dad-308f-44d2-94af-fa539f11bad0/Iw9kV3z3zM.lottie"
              loop
              autoplay
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProblemSolutionSection = () => {
  return (
    <section className="bg-white text-gray-900 px-6 md:px-12 py-20 max-w-7xl mx-auto overflow-hidden">

      {/* HEADING */}
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Is Your Website Hurting Your Business?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A slow, outdated, or insecure website drives visitors away and damages your brand. We’re here to help.
        </p>
      </motion.div>

      {/* TOP LOTTIE */}
      <motion.div
        className="max-w-xl mx-auto mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DotLottieReact
          src="https://lottie.host/1c643cda-0823-43d4-a698-bf24b1f6f82d/q9X2VEhCYE.lottie"
          loop
          autoplay
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>

      {/* PROBLEM LIST */}
      <motion.div
        className="w-full lg:w-3/4 mx-auto text-center bg-blue-100 px-8 py-10 rounded-3xl shadow-lg mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 font-mono">
          Common Website Issues That Hurt Your Growth
        </h3>
        <ul className="text-gray-800 text-sm md:text-base leading-relaxed space-y-3 font-mono font-medium text-left max-w-3xl mx-auto list-disc list-inside">
          <li>🔐 <strong>Security risks</strong> from outdated plugins and themes make your site vulnerable to hacks.</li>
          <li>🐌 <strong>Slow loading speeds</strong> frustrate users and hurt your SEO rankings.</li>
          <li>⚙️ <strong>Generic templates</strong> limit your brand identity and customization.</li>
          <li>🔄 <strong>No maintenance</strong> leads to broken links, outdated content, and poor user experience.</li>
        </ul>
      </motion.div>

      {/* SOLUTION HEADING */}
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Admire Softech Has the Solution
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We don’t just build websites. We create high-performing, secure digital experiences that scale with your business.
        </p>
      </motion.div>

      {/* SOLUTION SECTION */}
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT TEXT LIST */}
        <motion.div
          className="flex-1 space-y-4 text-center lg:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base max-w-md mx-auto lg:mx-0">
            <li>🎨 Bespoke UI/UX Design that fits your brand</li>
            <li>⚛️ Full-Stack Development (React, Node, etc.)</li>
            <li>🔍 SEO-Optimized Architecture from Day 1</li>
            <li>🌐 Fast & Secure Hosting + Domain Setup</li>
            <li>🔧 Proactive Maintenance & Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            🚀 Get Started Today
          </button>
        </motion.div>

        {/* RIGHT LOTTIE SEQUENCE */}
        <motion.div
          className="flex-1 w-2/3 w-full bg-gray-50 p-6 rounded-xl shadow-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SequentialLottie />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
