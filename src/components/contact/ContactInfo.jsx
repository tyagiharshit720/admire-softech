import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'contact@admiresoftech.com',
    description: 'Reach out anytime with questions or project details',
    color: 'indigo',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 987-6543',
    description: 'Mon-Sat 9AM-6PM EST',
    color: 'orange',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '789 Innovation Avenue, Tech City',
    description: 'Our headquarters',
    color: 'indigo',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon-Sat: 9AM-6PM',
    description: 'Support available on weekends by appointment',
    color: 'orange',
  },
];

const ContactInfo = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
    <p className="text-gray-600 mb-8 text-lg text-center">We're here to help you succeed.</p>

    <div className="space-y-6">
      {contactInfo.map((info, i) => (
        <div
          key={i}
          className={`bg-white p-1 border-l-4 rounded-xl shadow-md
            hover:scale-105 hover:shadow-xl transform transition cursor-pointer
            ${info.color === 'indigo' ? 'border-indigo-600' : 'border-orange-500'}
          `}
        >
          <div className="flex space-x-6 items-center">
            <div
              className={`
                p-3 rounded-lg transition-all duration-300 ease-out
                group
                ${info.color === 'indigo' ? 'bg-indigo-100' : 'bg-orange-100'}
                animate-fade-in-up
              `}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationFillMode: 'both',
                animationDuration: '0.6s',
              }}
            >
              <info.icon
                className={`h-6 w-6 transition-transform duration-300 ease-in-out
                  group-hover:scale-125 group-hover:rotate-6
                  ${info.color === 'indigo' ? 'text-indigo-600' : 'text-orange-500'}
                  drop-shadow-md
                `}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="text-indigo-600 font-medium">{info.value}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfo;
