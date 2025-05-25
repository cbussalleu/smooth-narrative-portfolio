
import React, { useEffect, useRef } from 'react';
import HorizontalScrollSection from './HorizontalScrollSection';

interface Project {
  image: string;
  title: string;
  brand: string;
  description: string;
  alt: string;
}

interface CapabilitySection {
  capability: string;
  description: string;
  project: Project;
}

interface HorizontalScrollContainerProps {
  capabilities: CapabilitySection[];
}

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ capabilities }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {capabilities.map((capability, index) => (
          <HorizontalScrollSection
            key={index}
            capability={capability.capability}
            description={capability.description}
            project={capability.project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
