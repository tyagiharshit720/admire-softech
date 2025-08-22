import React from 'react';
import { useNavigate } from 'react-router-dom';


const CTASection = () => (
    
  <section className="py-20 bg-gradient-to-r from-indigo-600 to-orange-500">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
        Let's discuss how we can help you achieve your digital goals
      </p>
      <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
        Start Your Project
      </button>
    </div>
  </section>
);

export default CTASection;