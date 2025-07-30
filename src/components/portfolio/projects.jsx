import React, { useRef } from 'react';

const projects = [
  {
    title: 'Startup Landing Page',
    description: 'Modern landing page for a fictional startup.',
    image: 'https://via.placeholder.com/400x240?text=Startup+Landing',
    tech: ['React', 'Tailwind', 'Node.js'],
    status: 'Demo',
  },
  {
    title: 'E-commerce UI',
    description: 'Responsive shopping site with checkout flow.',
    image: 'https://via.placeholder.com/400x240?text=E-commerce+UI',
    tech: ['Vue.js', 'Strapi'],
    status: 'Demo',
  },
  {
    title: 'Wellness Blog Layout',
    description: 'Minimal layout for wellness topics.',
    image: 'https://via.placeholder.com/400x240?text=Wellness+Blog',
    tech: ['WordPress', 'SEO'],
    status: 'Design Showcase',
  },
  {
    title: 'Portfolio Template',
    description: 'A clean portfolio for developers.',
    image: 'https://via.placeholder.com/400x240?text=Portfolio+Template',
    tech: ['Next.js', 'Tailwind'],
    status: 'Demo',
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 192 + 16; // card width + gap
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Demo Projects</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            A few concept designs to demonstrate the type of quality we deliver.
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll Left"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-3 z-10 hover:bg-gray-100 transition"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll Right"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-3 z-10 hover:bg-gray-100 transition"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          ▶
        </button>

        {/* Scroll Container with padding to create gap on sides */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar scroll-smooth"
          style={{
            paddingLeft: '100px', // Adjust gap for left button + space
            paddingRight: '100px', // Adjust gap for right button + space
          }}
        >
          <div className="flex gap-4 w-max">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="min-w-[192px] max-w-[192px] bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-28 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-md font-semibold mb-1">{project.title}</h4>
                  <p className="text-gray-600 text-xs mb-1">{project.description}</p>
                  <p className="text-xs text-gray-500">
                    <strong>Tech:</strong> {project.tech.join(', ')}
                  </p>
                  <span className="mt-2 inline-block text-[11px] bg-indigo-100 text-indigo-700 px-2 py-[2px] rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
