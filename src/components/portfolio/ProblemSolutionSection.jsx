import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProblemSolutionSection = () => {
  return (
    <section className="bg-white text-gray-900 px-6 md:px-12 py-20 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Heading */}
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
          Poor website design, speed, and security drive users away. Let's fix that.
        </p>
      </motion.div>

      {/* Top Lottie Animation */}
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

      {/* Problem Points */}
      <motion.div
        className="w-3/4 mx-auto text-center bg-blue-100 px-8 py-10 rounded-3xl shadow-lg mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-semibold text-teal-700 font-mono">
            Many websites today suffer from serious issues that hold businesses back.
          </h3>
          <p className="text-sm leading-relaxed text-gray-800 mx-auto text-pretty font-mono font-semibold">
             For instance, outdated plugins and themes can lead to security risks 🔐, making your site vulnerable to hacks and data breaches.<br/> Slow loading speeds 🐌 frustrate visitors and negatively impact your search engine rankings, driving potential customers away.<br/> Additionally, generic templates often limit your ability to fully customize your website ⚙️, which means your brand might not truly stand out in the crowded digital marketplace.<br /> Lastly, without regular updates and maintenance 🔄, your site can develop bugs, broken links, and outdated content that damage user experience and credibility.
          </p>
        </div>
      </motion.div>


      {/* SOLUTION SECTION */}
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
          We build fast, secure, beautiful websites that grow your business — and maintain them, too.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Solution Details */}
        <motion.div
          className="flex-1 space-y-4 text-center lg:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base max-w-md mx-auto lg:mx-0">
            <li>🎨 Custom UI/UX Design aligned with your brand</li>
            <li>⚛️ Frontend + Backend development (React, Node, etc.)</li>
            <li>🔍 SEO-first architecture</li>
            <li>🌐 Hosting & Domain Setup</li>
            <li>🔧 Ongoing maintenance and updates</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mx-auto lg:mx-0">
            Get Started Today
          </button>
        </motion.div>

        {/* Right: Solution Lottie */}
        <motion.div
          className="flex-1 max-w-md w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <DotLottieReact
            src="https://lottie.host/9f14944d-d44e-4b29-9edd-f880c7ac09ff/0GYkYwl5Ly.lottie"
            loop
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
