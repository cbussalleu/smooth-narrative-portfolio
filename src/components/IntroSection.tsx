
import React, { useState } from 'react';

interface IntroSectionProps {
  onBrowseClick: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onBrowseClick }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center px-8 py-16 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left side - Main heading */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm Christian,<br />
            <span className="block mt-2">
              Service Designer based in Barcelona.
            </span>
          </h1>
        </div>

        {/* Right side - Description paragraphs */}
        <div className="space-y-8 order-1 md:order-2">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            I design services that make sense from the inside of organizations and feel right from the outside.
          </p>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              I work on complex projects, full of uncertainty, with teams that need to move forward without losing sight of what really matters.
            </p>
            <button
              onClick={onBrowseClick}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`
                inline-block px-8 py-4 bg-black text-white font-medium rounded
                transition-all duration-300 ease-out transform
                ${isButtonHovered ? 'bg-gray-800 scale-105 shadow-lg' : 'scale-100'}
                hover:shadow-xl
              `}
            >
              Browse my projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
