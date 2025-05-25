
import React, { useState, useEffect } from 'react';

interface IntroSectionProps {
  onBrowseClick: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onBrowseClick }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showFirstParagraph, setShowFirstParagraph] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Animaciones secuenciales basadas en el scroll
      if (currentScrollY > 100) {
        setShowFirstParagraph(true);
      }
      if (currentScrollY > 300) {
        setShowSecondParagraph(true);
      }
      if (currentScrollY > 500) {
        setShowButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular la posición del título basada en el scroll
  const titleTransform = Math.min(scrollY * 0.5, 200);
  const titleScale = Math.max(1 - scrollY * 0.0005, 0.7);

  return (
    <section className="min-h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center px-8 py-16 max-w-7xl mx-auto overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left side - Main heading with scroll animation */}
          <div className="order-2 md:order-1 relative">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase transition-all duration-1000 ease-out"
              style={{
                transform: `translateY(${50 - titleTransform}vh) scale(${titleScale})`,
                transformOrigin: 'top left'
              }}
            >
              Hi, I'm Christian,<br />
              <span className="block mt-2">
                Service Designer based in Barcelona.
              </span>
            </h1>
          </div>

          {/* Right side - Sequential paragraphs */}
          <div className="space-y-8 order-1 md:order-2 relative h-full flex flex-col justify-center">
            {/* First paragraph */}
            <div 
              className={`
                transition-all duration-1000 ease-out transform
                ${showFirstParagraph 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
                }
              `}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I design services that make sense from the inside of organizations and feel right from the outside.
              </p>
            </div>

            {/* Second paragraph */}
            <div 
              className={`
                transition-all duration-1000 ease-out transform
                ${showSecondParagraph 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
                }
              `}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I work on complex projects, full of uncertainty, with teams that need to move forward without losing sight of what really matters.
              </p>
            </div>

            {/* Button */}
            <div 
              className={`
                transition-all duration-1000 ease-out transform
                ${showButton 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
                }
              `}
              style={{ transitionDelay: '400ms' }}
            >
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
      </div>
    </section>
  );
};

export default IntroSection;
