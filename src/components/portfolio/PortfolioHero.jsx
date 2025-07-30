import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          We Craft Websites That Perform
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Full-stack web design & development solutions for startups, businesses, and creatives.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Explore Our Demo Projects
        </a>
      </div>
    </section>
  );
};

export default PortfolioHero;
