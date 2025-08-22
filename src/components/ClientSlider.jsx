import React from 'react';

const companies = [
  { name: 'BrightWave', letters: 'BW', bgColor: '#3B82F6', textColor: '#fff' }, // blue
  { name: 'CloudNest', letters: 'CN', bgColor: '#10B981', textColor: '#fff' }, // green
  { name: 'EcoPulse', letters: 'EP', bgColor: '#F59E0B', textColor: '#fff' }, // amber
  { name: 'DataLink', letters: 'DL', bgColor: '#EF4444', textColor: '#fff' }, // red
];

const SvgLogo = ({ letters, bgColor, textColor }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full"
  >
    <circle cx="40" cy="40" r="40" fill={bgColor} />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill={textColor}
      fontSize="32"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      {letters}
    </text>
  </svg>
);

const ClientSlider = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Clients</h2>

      <div className="relative w-full">
        <div className="flex animate-marquee space-x-8 px-4 items-center">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="min-w-[180px] bg-gray-100 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
            >
              <SvgLogo
                letters={company.letters}
                bgColor={company.bgColor}
                textColor={company.textColor}
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-3">{company.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
