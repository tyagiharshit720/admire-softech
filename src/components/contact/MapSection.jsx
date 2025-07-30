import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => (
  <section className="py-20 bg-white text-center">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
      <p className="text-xl text-gray-600 mb-12">Located in the heart of the tech district</p>
      
      <div className="bg-gray-200 rounded-2xl overflow-hidden" style={{ height: '384px' /* 96 * 4 px */ }}>
        {/* Replace src URL below with your actual Google Maps embed URL */}
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6855937916785!2d81.76421818034557!3d25.44877286359935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acca4bd410ccb%3A0x8d6216f507625f92!2sMundera%20Sabzi%20Mandi!5e0!3m2!1sen!2sin!4v1753770702416!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default MapSection;
