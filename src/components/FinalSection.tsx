
import React, { useState } from 'react';

const FinalSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="text-center py-24 px-8 max-w-[900px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight transform transition-all duration-500 ease-out hover:scale-105">
        😅 I'm good at telling the story of my work.<br />
        Just not in a website.
      </h2>
      <p className="text-lg text-[#555] mb-8 transition-all duration-300 ease-out hover:text-[#333]">
        (JK. I built a full project browser.<br />
        You can filter by challenge type, stage, tools, and more.)
      </p>
      <a
        href="#"
        className={`
          inline-block px-6 py-3 bg-[#0077cc] text-white no-underline rounded font-medium
          cursor-pointer transition-all duration-300 ease-out transform
          hover:bg-[#005fa3] hover:scale-105 hover:shadow-lg
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0077cc] focus:ring-opacity-50
          ${isHovered ? 'translate-y-[-2px]' : 'translate-y-0'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="transition-transform duration-200 ease-out inline-block hover:translate-x-1">
          👉 Browse Projects
        </span>
      </a>
    </section>
  );
};

export default FinalSection;
