import React from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

// UPDATED: Now supports the new multi-platform links
interface ReelItem {
  title: string;
  description: string;
  duration: string;
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

interface SubSection {
  id: string;
  title: string;
  items: ReelItem[];
}

// Generates a COMING SOON card without socialLinks
const createPlaceholder = (topic: string): ReelItem[] => [
  {
    title: topic,
    description: `The strategic framework for ${topic}. Video dropping soon. Follow @akaashacademy to stay updated on our latest strategy drops.`,
    duration: "COMING SOON",
  }
];

// 1. SAT MATH SUB-SECTIONS
const satMathSections: SubSection[] = [
  { id: "algebra", title: "Algebra", items: createPlaceholder("Algebra") },
  { id: "advanced-algebra", title: "Advanced Algebra", items: createPlaceholder("Advanced Algebra") },
  { id: "problem-solving", title: "Problem Solving & Data", items: createPlaceholder("Problem Solving & Data Analysis") },
  { id: "geometry", title: "Geometry", items: createPlaceholder("Geometry") },
  { id: "probability", title: "Probability", items: createPlaceholder("Probability") },
];

// 2. ACT MATH SUB-SECTIONS
const actMathSections: SubSection[] = [
  { id: "linear-algebra", title: "Linear Algebra", items: createPlaceholder("Linear Algebra") },
  { id: "trigonometry", title: "Trigonometry", items: createPlaceholder("Trigonometry") },
];

const ACT = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Split-Screen Hero & Table of Contents */}
      <section className="px-6 md:px-16 py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Context */}
          <ScrollReveal>
            <div>
              <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6 glitch-text cursor-default">
                THE MATH HUB
              </h1>
              <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                Stop relying on raw calculation speed. We teach you how to translate word problems and recognize formula triggers instantly across both exams.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Side: The Strategy Matrix (TOC) */}
          <ScrollReveal delay={200}>
            <div className="bg-[#09090b] border border-white/10 p-8 md:p-10 hover:border-[#FF0000]/50 transition-colors duration-500">
              <h2 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#FF0000] mb-8 border-b border-[#FF0000]/20 pb-4">
                THE STRATEGY MATRIX
              </h2>
              
              <div className="space-y-8 font-['DM_Sans']">
                
                {/* TOC: SAT Math */}
                <div>
                  <span className="font-['Bebas_Neue'] text-2xl text-white block mb-3">
                    » 01. SAT MATH
                  </span>
                  <ul className="text-sm text-white/70 pl-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 list-none">
                    {satMathSections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="hover:text-[#FF0000] transition-colors flex items-center gap-2">
                          <span className="text-[#FF0000] text-xs">▹</span> {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TOC: ACT Math */}
                <div>
                  <span className="font-['Bebas_Neue'] text-2xl text-white block mb-3">
                    » 02. ACT MATH
                  </span>
                  <ul className="text-sm text-white/70 pl-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 list-none">
                    {actMathSections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="hover:text-[#FF0000] transition-colors flex items-center gap-2">
                          <span className="text-[#FF0000] text-xs">▹</span> {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SAT Math Sub-sections */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="mb-16">
          <SectionTitle title="SAT MATH FRAMEWORKS" subtitle="From algebra fundamentals to probability — master the core patterns." />
        </div>

        <div className="space-y-24">
          {satMathSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <ScrollReveal>
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6 border-l-4 border-[#FF0000] pl-4">{section.title}</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((reel, idx) => (
                  <ScrollReveal key={reel.title} delay={idx * 50}>
                    <Card 
                      title={reel.title} 
                      description={reel.description} 
                      duration={reel.duration} 
                      socialLinks={reel.socialLinks} 
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACT Math Sub-sections */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-b border-white/10">
        <div className="mb-16">
          <SectionTitle title="ACT MATH FRAMEWORKS" subtitle="Advanced quantitative concepts exclusive to the ACT sprint." />
        </div>

        <div className="space-y-24">
          {actMathSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <ScrollReveal>
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6 border-l-4 border-[#FF0000] pl-4">{section.title}</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((reel, idx) => (
                  <ScrollReveal key={reel.title} delay={idx * 50}>
                    <Card 
                      title={reel.title} 
                      description={reel.description} 
                      duration={reel.duration} 
                      socialLinks={reel.socialLinks} 
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center">
        <ScrollReveal>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6 glitch-text cursor-default">
            MASTER THE <span className="text-[#FF0000]">BLUEPRINTS</span>
          </h2>
          <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Follow @akaashacademy for daily strategy drops.
          </p>
          <a href="https://www.instagram.com/akaashacademy/" target="_blank" rel="noopener noreferrer" className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] hover:scale-105 transition-all duration-300">
            FOLLOW ON INSTAGRAM
          </a>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default ACT;
