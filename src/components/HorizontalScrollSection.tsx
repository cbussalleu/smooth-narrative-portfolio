
import React, { useEffect, useRef, useState } from 'react';

interface Project {
  image: string;
  title: string;
  brand: string;
  description: string;
  alt: string;
}

interface HorizontalScrollSectionProps {
  capability: string;
  description: string;
  project: Project;
  index: number;
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ 
  capability, 
  description, 
  project,
  index 
}) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerWidth - rect.left) / window.innerWidth));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular las transformaciones basadas en el progreso del scroll
  const titleTransform = scrollProgress * 100;
  const imageTransform = Math.max(0, (scrollProgress - 0.3) * 100);
  const textTransform = Math.max(0, (scrollProgress - 0.6) * 100);

  return (
    <div 
      ref={sectionRef}
      className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full h-full relative">
        {/* Main capability title - slides in first and positions top-left */}
        <div 
          className="absolute top-16 left-0 transition-all duration-1000 ease-out"
          style={{
            transform: `translateX(${-100 + titleTransform}vw)`,
            opacity: Math.min(1, scrollProgress * 2)
          }}
        >
          <div className="space-y-4">
            <div className="text-sm text-gray-500 font-medium">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
              {capability}
            </h2>
          </div>
        </div>

        {/* Project Image - slides in second and positions bottom-left */}
        <div 
          className="absolute bottom-16 left-0 w-1/2 max-w-md transition-all duration-1000 ease-out"
          style={{
            transform: `translateX(${-100 + imageTransform}vw)`,
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.3) * 2))
          }}
        >
          <div 
            className="relative overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer transition-transform duration-500 ease-out hover:scale-105"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
            />
            
            {/* Overlay */}
            <div 
              className={`
                absolute inset-0 bg-black transition-all duration-500 ease-out flex items-center justify-center
                ${isImageHovered ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'}
              `}
            >
              <div 
                className={`
                  text-white text-center space-y-3 transition-all duration-500 ease-out transform
                  ${isImageHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="text-lg font-semibold text-blue-300">{project.brand}</div>
                <p className="text-base max-w-xs mx-auto">{project.description}</p>
                <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded transition-all duration-300 hover:bg-gray-100">
                  See what I learn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description text - slides in last and positions bottom-right */}
        <div 
          className="absolute bottom-16 right-0 w-1/3 max-w-md transition-all duration-1000 ease-out"
          style={{
            transform: `translateX(${100 - textTransform}vw)`,
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.6) * 2))
          }}
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
