
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

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
      if (currentScrollY > 300) {
        setShowFirstParagraph(true);
      }
      if (currentScrollY > 800) {
        setShowSecondParagraph(true);
      }
      if (currentScrollY > 1200) {
        setShowButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular la animación del título: desde el centro hacia arriba-izquierda
  const titleProgress = Math.min(scrollY / 1000, 1);
  const titleX = -50 + (titleProgress * 50); // De -50% a 0%
  const titleY = -50 + (titleProgress * 50); // De -50% a 0%
  const titleScale = 0.8 + (titleProgress * 0.2); // De 0.8 a 1

  return (
    <section className="min-h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center px-8 py-16 max-w-7xl mx-auto overflow-hidden">
        <div className="w-full relative">
          {/* Main heading - animado desde el centro hacia arriba-izquierda */}
          <div 
            className="absolute inset-0 flex items-center justify-center md:block"
            style={{
              transform: `translate(${titleX}%, ${titleY}%) scale(${titleScale})`,
              transformOrigin: 'center center',
              transition: 'transform 1s ease-out'
            }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase">
              <AnimatedText 
                text="HI, I'M CHRISTIAN,"
                isVisible={true}
                type="title"
              />
              <br />
              <AnimatedText 
                text="SERVICE DESIGNER BASED IN BARCELONA."
                isVisible={true}
                delay={1000}
                type="title"
              />
            </h1>
          </div>

          {/* Right side paragraphs - aparecen secuencialmente desde abajo */}
          <div className="absolute right-0 top-1/2 w-1/2 max-w-md space-y-8">
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
                <AnimatedText 
                  text="I design services that make sense from the inside of organizations and feel right from the outside."
                  isVisible={showFirstParagraph}
                />
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
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                <AnimatedText 
                  text="I work on complex projects, full of uncertainty, with teams that need to move forward without losing sight of what really matters."
                  isVisible={showSecondParagraph}
                />
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
