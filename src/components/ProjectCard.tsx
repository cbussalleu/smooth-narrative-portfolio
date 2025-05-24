
import React, { useState } from 'react';

interface Project {
  image: string;
  title: string;
  brand: string;
  description: string;
  alt: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        bg-white shadow-sm overflow-hidden flex flex-col h-[50vh] group
        transition-all duration-700 ease-out transform
        hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
      style={{ 
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-[70%] overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={project.image}
          alt={project.alt}
          className={`
            w-full h-full object-cover transition-all duration-700 ease-out
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div 
          className={`
            absolute inset-0 bg-black transition-opacity duration-300 ease-out
            ${isHovered ? 'opacity-10' : 'opacity-0'}
          `} 
        />
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 flex-grow flex flex-col justify-center bg-white">
        <h3 
          className={`
            m-0 text-lg font-semibold text-[#111] transition-all duration-300 ease-out
            ${isHovered ? 'transform translate-x-1' : 'transform translate-x-0'}
          `}
        >
          {project.title}
        </h3>
        <div 
          className={`
            font-bold text-sm text-[#444] mt-1 transition-all duration-300 ease-out
            ${isHovered ? 'text-[#0077cc] transform translate-x-1' : 'transform translate-x-0'}
          `}
        >
          {project.brand}
        </div>
        <div 
          className={`
            text-sm text-[#555] mt-1 transition-all duration-300 ease-out
            ${isHovered ? 'transform translate-x-1' : 'transform translate-x-0'}
          `}
          style={{ transitionDelay: '50ms' }}
        >
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
