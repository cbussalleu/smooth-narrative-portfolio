
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  image: string;
  title: string;
  brand: string;
  description: string;
  alt: string;
}

interface ScrollSectionProps {
  id: string;
  text: string;
  projects: Project[];
  index: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ id, text, projects, index }) => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      const isInView = scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight;
      setIsActive(isInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className="block md:hidden min-h-screen py-8 px-4"
    >
      <div className="max-w-lg mx-auto space-y-8">
        {/* Mobile text */}
        <div 
          className={`
            transition-all duration-500 ease-out transform
            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'}
          `}
        >
          <div className="text-sm text-gray-500 font-medium mb-2">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="text-2xl font-bold leading-tight text-[#111] mb-6">
            {text.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </div>
        </div>

        {/* Show only first project on mobile */}
        {projects.length > 0 && (
          <ProjectCard 
            project={projects[0]}
            index={0}
            isVisible={isActive}
          />
        )}
      </div>
    </section>
  );
};

export default ScrollSection;
