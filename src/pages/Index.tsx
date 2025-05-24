
import React from 'react';
import IntroSection from '../components/IntroSection';
import ScrollSection from '../components/ScrollSection';
import FinalSection from '../components/FinalSection';

const Index = () => {
  const scrollSections = [
    {
      id: 'sec1',
      text: "I'm good at user research,\njust not the kind that looks for final answers.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          title: "Claims Navigator",
          brand: "Mutualia",
          description: "Redesigning claims process centered on patients.",
          alt: "User research"
        },
        {
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
          title: "Onboarding Insights",
          brand: "Banco Neo",
          description: "Research to rethink digital onboarding.",
          alt: "User interview"
        }
      ]
    },
    {
      id: 'sec2',
      text: "I'm good at analyzing large volumes of data,\njust not the kind that paralyzes decision-making.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          title: "Usage Patterns",
          brand: "Zenda Health",
          description: "Analysis of patient behavior data.",
          alt: "Data analysis"
        },
        {
          image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",
          title: "Performance Radar",
          brand: "RetailCo",
          description: "Dashboard to detect friction points.",
          alt: "Charts"
        }
      ]
    },
    {
      id: 'sec3',
      text: "I'm good at mapping processes,\njust not the kind that tries to fit everything into one diagram.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          title: "Service Loop",
          brand: "Educa360",
          description: "Map connecting experience with operation.",
          alt: "Workflow"
        },
        {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          title: "Claims Flow",
          brand: "Segura",
          description: "Visualizing the claims lifecycle.",
          alt: "User journey"
        }
      ]
    },
    {
      id: 'sec4',
      text: "I'm good at designing blueprints,\njust not the kind that glosses over how operations actually work.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
          title: "Support Blueprint",
          brand: "Logitek",
          description: "Blueprint linking frontstage and backstage.",
          alt: "Blueprint"
        },
        {
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
          title: "Ops Mapping",
          brand: "GreenPower",
          description: "Detailing real operations for accuracy.",
          alt: "Operations"
        }
      ]
    },
    {
      id: 'sec5',
      text: "I'm good at prototyping and experimenting,\njust not the kind obsessed with recreating the entire service environment.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
          title: "Prototype Lab",
          brand: "InnovateX",
          description: "Rapid prototyping for user feedback.",
          alt: "Prototype"
        },
        {
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
          title: "Experiment Suite",
          brand: "StartUp Hub",
          description: "Testing concepts in live scenarios.",
          alt: "Experiment"
        }
      ]
    },
    {
      id: 'sec6',
      text: "I'm good at managing stakeholders and politics,\njust not when it comes at the expense of the team's well-being.",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
          title: "Stakeholder Balance",
          brand: "CorpCo",
          description: "Aligning interests without sacrificing teams.",
          alt: "Stakeholders"
        },
        {
          image: "https://images.unsplash.com/photo-1517242020082-1f49d1bc37a2?auto=format&fit=crop&w=800&q=80",
          title: "Team Wellness",
          brand: "WellBeing Inc.",
          description: "Creating healthy work environments.",
          alt: "Team meeting"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans overflow-x-hidden">
      <IntroSection />
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
