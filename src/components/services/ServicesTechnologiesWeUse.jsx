import React from 'react';
import { 
  FaPalette, FaCode, FaServer, FaSearch, FaShieldAlt, FaCogs, 
  FaMobileAlt, FaRocket, FaLock, FaEdit 
} from 'react-icons/fa';

function ServicesTechnologiesWeUse() {
  const services = [
    {
      title: 'Design & User Experience',
      description: 'We create beautiful, easy-to-use interfaces that your visitors will love',
      icon: <FaPalette className="text-indigo-600" size={24} />,
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
    },
    {
      title: 'Frontend Development',
      description: 'Building the visible part of your website that users interact with',
      icon: <FaCode className="text-indigo-600" size={24} />,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      description: "Creating the hidden engine that powers your website's functionality",
      icon: <FaServer className="text-indigo-600" size={24} />,
      technologies: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python (Django)'],
    },
    {
      title: 'SEO Optimization',
      description: 'Helping your website rank higher in Google searches',
      icon: <FaSearch className="text-indigo-600" size={24} />,
      technologies: ['On-page SEO', 'Keyword Research', 'Google Analytics'],
    },
    {
      title: 'Hosting Setup',
      description: 'Securing a reliable online home for your website',
      icon: <FaShieldAlt className="text-indigo-600" size={24} />,
      technologies: ['AWS', 'Netlify', 'Vercel', 'cPanel', 'Cloudflare'],
    },
    {
      title: 'Ongoing Maintenance',
      description: 'Keeping your website updated and running smoothly',
      icon: <FaCogs className="text-indigo-600" size={24} />,
      technologies: ['Regular Updates', 'Backups', 'Performance Monitoring'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Complete Website Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build and maintain a successful online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description }) => (
            <ServiceCard key={title} icon={icon} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Technologies We Use for Each Service
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging modern tools and frameworks to ensure high performance, security, and scalability
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, technologies }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-lg p-7 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{title}</h3>
                <p className="text-gray-700 mb-5">{description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-xl p-6 text-center mt-12">
          <p className="text-lg font-medium text-indigo-800">
            <span className="font-bold">No tech jargon needed:</span> We handle all the technical details while you focus on your business.
          </p>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServicesTechnologiesWeUse;
