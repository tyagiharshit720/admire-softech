
import React from 'react';
import { Zap, Users, BarChart3, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced developers and SEO specialists dedicated to your success'
  },
  {
    icon: BarChart3,
    title: 'Proven Results',
    description: 'Track record of successful projects and improved rankings'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    description: 'All solutions optimized for seamless mobile experiences'
  }
];

const WhyChooseAdmireSoftech = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Admire Softech?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We combine technical expertise with creative innovation to deliver exceptional results
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-all duration-300"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-indigo-50 to-orange-50 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow">
              <Icon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseAdmireSoftech;
