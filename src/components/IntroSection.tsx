
import React from 'react';

const IntroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-8 py-16 max-w-[900px] mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-[2.75rem] font-semibold mb-6 leading-tight transform transition-all duration-700 ease-out">
        Hi, I'm Christian,<br />
        <span className="inline-block transform transition-transform duration-700 ease-out hover:translate-x-1">
          Service Designer based in Barcelona.
        </span>
      </h1>
      <p className="text-xl md:text-2xl leading-relaxed max-w-[700px] text-[#111] transform transition-all duration-700 ease-out delay-300 opacity-90 hover:opacity-100">
        I design services that make sense from the inside of organizations and feel right from the outside.<br />
        I work on complex projects, full of uncertainty, with teams that need to move forward without losing sight of what really matters.
      </p>
    </section>
  );
};

export default IntroSection;
