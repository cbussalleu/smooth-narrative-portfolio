
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className="flex min-h-screen py-8 max-w-[1200px] mx-auto scroll-smooth"
    >
      {/* Left side - Sticky text */}
      <div className="w-2/5 sticky top-8 self-start pr-8 hidden md:block">
        <div 
          className={`
            text-2xl md:text-[1.75rem] font-semibold leading-tight
            transition-all duration-700 ease-out transform
            ${isActive 
              ? 'text-[#111] opacity-100 translate-y-0 scale-100' 
              : 'text-[#666] opacity-50 translate-y-2 scale-95'
            }
          `}
        >
          {text.split('\n').map((line, i) => (
            <span 
              key={i} 
              className={`
                block transition-all duration-700 ease-out
                ${isActive ? 'transform translate-x-0' : 'transform translate-x-2'}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      {/* Right side - Projects */}
      <div className="w-full md:w-3/5 flex flex-direction-column justify-center gap-0 px-4 md:px-0">
        {/* Mobile text */}
        <div className="md:hidden mb-8">
          <div 
            className={`
              text-xl font-semibold leading-tight text-[#111] mb-6
              transition-all duration-500 ease-out transform
              ${isActive ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'}
            `}
          >
            {text.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </div>
        </div>

        {projects.map((project, projectIndex) => (
          <ProjectCard 
            key={`${id}-${projectIndex}`}
            project={project}
            index={projectIndex}
            isVisible={isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollSection;
