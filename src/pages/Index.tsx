
import React, { useState, useEffect } from 'react';
import IntroSection from '../components/IntroSection';
import ScrollSection from '../components/ScrollSection';
import HorizontalScrollContainer from '../components/HorizontalScrollContainer';
import FinalSection from '../components/FinalSection';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const capabilities = [
    {
      capability: "I'm good at user research",
      description: "just not the kind that looks for final answers.",
      project: {
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        title: "Claims Navigator",
        brand: "Mutualia",
        description: "Redesigning claims process centered on patients.",
        alt: "User research"
      }
    },
    {
      capability: "I'm good at analyzing large volumes of data",
      description: "just not the kind that paralyzes decision-making.",
      project: {
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        title: "Usage Patterns",
        brand: "Zenda Health",
        description: "Analysis of patient behavior data.",
        alt: "Data analysis"
      }
    },
    {
      capability: "I'm good at mapping processes",
      description: "just not the kind that tries to fit everything into one diagram.",
      project: {
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        title: "Service Loop",
        brand: "Educa360",
        description: "Map connecting experience with operation.",
        alt: "Workflow"
      }
    },
    {
      capability: "I'm good at designing blueprints",
      description: "just not the kind that glosses over how operations actually work.",
      project: {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        title: "Support Blueprint",
        brand: "Logitek",
        description: "Blueprint linking frontstage and backstage.",
        alt: "Blueprint"
      }
    },
    {
      capability: "I'm good at prototyping and experimenting",
      description: "just not the kind obsessed with recreating the entire service environment.",
      project: {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        title: "Prototype Lab",
        brand: "InnovateX",
        description: "Rapid prototyping for user feedback.",
        alt: "Prototype"
      }
    },
    {
      capability: "I'm good at managing stakeholders and politics",
      description: "just not when it comes at the expense of the team's well-being.",
      project: {
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        title: "Stakeholder Balance",
        brand: "CorpCo",
        description: "Aligning interests without sacrificing teams.",
        alt: "Stakeholders"
      }
    }
  ];

  // Legacy format for mobile scroll sections
  const scrollSections = capabilities.map((cap, index) => ({
    id: `sec${index + 1}`,
    text: cap.capability + ",\n" + cap.description,
    projects: [cap.project],
    index
  }));

  const handleBrowseClick = () => {
    const horizontalSection = document.querySelector('.horizontal-scroll-section');
    if (horizontalSection) {
      horizontalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsButtonHovered(true);
    const handleMouseLeave = () => setIsButtonHovered(false);

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    setShowCustomCursor(!isButtonHovered);
  }, [isButtonHovered]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans overflow-x-hidden">
      <CustomCursor showCursor={showCustomCursor} />
      
      <IntroSection onBrowseClick={handleBrowseClick} />
      
      <div className="horizontal-scroll-section">
        <HorizontalScrollContainer capabilities={capabilities} />
      </div>

      {/* Mobile version - vertical scroll */}
      {scrollSections.map((section, index) => (
        <ScrollSection
          key={section.id}
          id={section.id}
          text={section.text}
          projects={section.projects}
          index={index}
        />
      ))}
      
      <FinalSection />
    </div>
  );
};

export default Index;
