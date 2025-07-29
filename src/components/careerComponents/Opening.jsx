import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Filter jobs based on active tab
  const filteredJobs = jobs.filter(job => {
    if (activeTab === 'all') return true;
    if (activeTab === 'full-time' || activeTab === 'contract') {
      return job.type === activeTab;
    }
    return job.department === activeTab;
  });

  // Simulate loading jobs data
  useEffect(() => {
    const fetchJobs = async () => {
      // Simulate API call
      setTimeout(() => {
        setJobs([
          {
            id: 1,
            title: 'Frontend Developer',
            type: 'full-time',
            location: 'Remote',
            department: 'engineering',
            description: 'Build amazing user interfaces with React and Next.js.',
            salary: '$90,000 - $120,000'
          },
          {
            id: 2,
            title: 'UX Designer',
            type: 'full-time',
            location: 'San Francisco',
            department: 'design',
            description: 'Create beautiful and intuitive user experiences.',
            salary: '$85,000 - $110,000'
          },
          {
            id: 3,
            title: 'Marketing Specialist',
            type: 'contract',
            location: 'New York',
            department: 'marketing',
            description: 'Develop and execute marketing campaigns.',
            salary: '$60 - $80 per hour'
          },
          {
            id: 4,
            title: 'Backend Engineer',
            type: 'full-time',
            location: 'Remote',
            department: 'engineering',
            description: 'Build scalable backend services with Node.js.',
            salary: '$100,000 - $140,000'
          },
          {
            id: 5,
            title: 'Product Designer',
            type: 'contract',
            location: 'Austin',
            department: 'design',
            description: 'Design innovative product solutions.',
            salary: '$70 - $90 per hour'
          },
          {
            id: 6,
            title: 'Content Marketer',
            type: 'full-time',
            location: 'Chicago',
            department: 'marketing',
            description: 'Create compelling content for our audience.',
            salary: '$75,000 - $95,000'
          }
        ]);
        setLoading(false);
      }, 1500);
    };

    fetchJobs();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Current <span className="text-blue-600">Openings</span>
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {['all', 'engineering', 'design', 'marketing', 'full-time', 'contract'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </motion.div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading opportunities...</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <motion.div 
                  key={job.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.type === 'full-time' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {job.type.replace('-', ' ')}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <p className="text-gray-700 font-medium mb-6">{job.salary}</p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                      onClick={() => navigate("/application-form")}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-md inline-block">
                  <p className="text-gray-600 mb-4">No current openings match your filters.</p>
                  <p className="text-gray-600">
                    Check back later or <a href="#subscribe" className="text-blue-600 hover:underline">subscribe to job alerts</a>.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;