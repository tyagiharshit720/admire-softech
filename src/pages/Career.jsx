import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import JobOpenings from '../components/careerComponents/Opening';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Mock data - in a real app, you'd fetch this from an API
  useEffect(() => {
    const fetchJobs = async () => {
      // Simulate API call
      setTimeout(() => {
        setJobs([
          {
            id: 1,
            title: "Frontend Developer",
            type: "full-time",
            location: "Remote",
            department: "Engineering",
            description: "We're looking for a skilled Frontend Developer to join our team and help build beautiful, responsive web applications.",
            salary: "$90,000 - $120,000"
          },
          {
            id: 2,
            title: "UX Designer",
            type: "full-time",
            location: "Hybrid (Bangalore)",
            department: "Design",
            description: "Join our design team to create intuitive and engaging user experiences for our products.",
            salary: "$80,000 - $110,000"
          },
          {
            id: 3,
            title: "Backend Engineer",
            type: "contract",
            location: "Remote",
            department: "Engineering",
            description: "Help us build scalable backend systems with Node.js and modern cloud technologies.",
            salary: "$70 - $90/hr"
          },
          {
            id: 4,
            title: "Marketing Specialist",
            type: "full-time",
            location: "Mumbai",
            department: "Marketing",
            description: "Drive our marketing initiatives and help grow our brand presence in the tech industry.",
            salary: "$65,000 - $85,000"
          },
          {
            id: 5,
            title: "DevOps Engineer",
            type: "full-time",
            location: "Remote",
            department: "Engineering",
            description: "Implement and maintain our CI/CD pipelines and cloud infrastructure.",
            salary: "$100,000 - $140,000"
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchJobs();
  }, []);

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase() === activeTab || job.type === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build Your <span className="text-blue-600">Future</span> With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Join Admire Softech and work on cutting-edge technologies with a team that values innovation and creativity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Explore Opportunities
            </motion.button>
          </motion.div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative w-full h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl shadow-xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Your Career Starts Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Join <span className="text-blue-600">Admire Softech</span>?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovative Projects</h3>
              <p className="text-gray-600">Work on challenging projects that push technological boundaries.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Work</h3>
              <p className="text-gray-600">Remote and hybrid options to suit your lifestyle.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and clear growth paths.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Culture</h3>
              <p className="text-gray-600">Collaborative environment that values every team member.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>



          <div>
            <JobOpenings/>
          </div>






      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our <span className="text-blue-600">Culture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Admire Softech, we believe our people are our greatest asset. We foster an environment of collaboration, innovation, and continuous learning.
              </p>
              <ul className="space-y-4">
                {[
                  "Regular hackathons and innovation days",
                  "Flexible work hours and remote options",
                  "Monthly learning stipends",
                  "Team retreats and social events",
                  "Open communication and flat hierarchy",
                  "Focus on work-life balance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <span className="text-blue-600 font-medium">Team Collaboration</span>
              </div>
              <div className="bg-indigo-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">Work Environment</span>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl h-48 md:h-64 flex items-center justify-center text-white font-medium">
                Innovation & Creativity
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your <span className="text-blue-600">Journey</span> With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Even if you don't see the perfect role, we're always interested in meeting talented people.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-full border border-blue-600 transition duration-300"
        onClick={() => navigate("/application-form")}
      >
        General Application
      </motion.button>
    </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;