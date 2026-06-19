import React from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

interface ReelItem {
  title: string;
  description: string;
  duration: string;
  reelUrl: string;
}

interface SubSection {
  id: string;
  title: string;
  items: ReelItem[];
}

const createPlaceholder = (topic: string): ReelItem[] => [
  {
    title: topic,
    description: `The strategic framework for ${topic}. Video dropping soon. Follow @akaashacademy to stay updated on our latest strategy drops.`,
    duration: "COMING SOON",
    reelUrl: "https://www.instagram.com/akaashacademy/",
  }
];

// 3. MATH SUB-SECTIONS (Coming Soon)
const mathSections: SubSection[] = [
  { id: "algebra-core", title: "Algebra Core", items: createPlaceholder("Algebra Core") },
  { id: "advanced-algebra", title: "Advanced Algebra", items: createPlaceholder("Advanced Algebra") },
  { id: "problem-solving", title: "Problem Solving & Data", items: createPlaceholder("Problem Solving & Data Analysis") },
  { id: "geometry", title: "Geometry", items: createPlaceholder("Geometry") },
];

// 4. TRAPS SUB-SECTION (Coming Soon)
const trapSections: SubSection[] = [
  { id: "deconstructing-traps", title: "Deconstructing Traps", items: createPlaceholder("Testmaker Traps") },
];

interface ReelCardProps {
  reel: ReelItem;
}

const ReelCard = ({ reel }: ReelCardProps) => {
  const isComingSoon = reel.duration === "COMING SOON";

  return (
    <div className="bg-[#09090b] border border-white/10 hover:border-[#FF0000] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide text-white">
            {reel.title}
          </h3>
          <span className={`flex-shrink-0 font-['DM_Sans'] text-xs tracking-widest border px-2 py-1 whitespace-nowrap ${isComingSoon ? "text-white/50 border-white/20" : "text-[#FF0000] border-[#FF0000]/40"}`}>
            {isComingSoon ? reel.duration : `REEL • ${reel.duration}`}
          </span>
        </div>
        <p className="font-['DM_Sans'] text-sm md:text-base text-white/70 leading-relaxed mb-8">
          {reel.description}
        </p>
      </div>
      <a href={reel.reelUrl} target="_blank" rel="noopener noreferrer" className="block">
        <button className={`w-full font-['Bebas_Neue'] text-sm md:text-base tracking-[0.15em] transition-all duration-300 py-3 px-4 border ${isComingSoon ? "text-white/70 border-white/10 hover:border-white/40 hover:text-white" : "text-white border-white/20 hover:border-[#FF0000] hover:text-[#FF0000]"}`}>
          {isComingSoon ? "FOLLOW FOR THIS DROP →" : "WATCH STRATEGY ON INSTAGRAM →"}
        </button>
      </a>
    </div>
  );
};

const ACT = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Split-Screen Hero & Table of Contents */}
      <section className="px-6 md:px-16 py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Context */}
          <div>
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6">
              THE MATH HUB
            </h1>
            <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              Stop relying on raw calculation speed. We teach you how to translate word problems and recognize formula triggers instantly.
            </p>
          </div>

          {/* Right Side: The Strategy Matrix (TOC) */}
          <div className="bg-[#09090b] border border-white/10 p-8 md:p-10 hover:border-[#FF0000]/50 transition-colors duration-500">
            <h2 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#FF0000] mb-8 border-b border-[#FF0000]/20 pb-4">
              THE STRATEGY MATRIX
            </h2>
            
            <div className="space-y-8 font-['DM_Sans']">
              {/* TOC 3: Math */}
              <div>
                <span className="font-['Bebas_Neue'] text-2xl text-white block mb-3">
                  » 01. QUANTITATIVE LOGIC
                </span>
                <ul className="text-sm text-white/70 pl-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 list-none">
                  {mathSections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="hover:text-[#FF0000] transition-colors flex items-center gap-2">
                        <span className="text-[#FF0000] text-xs">▹</span> {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TOC 4: Traps */}
              <div>
                <a href="#deconstructing-traps" className="font-['Bebas_Neue'] text-2xl text-white hover:text-[#FF0000] transition-colors block mb-2">
                  » 02. TESTMAKER TRAPS
                </a>
                <p className="text-sm text-white/50 pl-6">Spot the wrong answers instantly.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Math Sub-sections */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="mb-16">
          <SectionTitle title="MATH FRAMEWORKS" subtitle="From algebra fundamentals to data analysis — strategy over raw computation." />
        </div>

        <div className="space-y-24">
          {mathSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6 border-l-4 border-[#FF0000] pl-4">{section.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((reel) => (
                  <ReelCard key={reel.title} reel={reel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traps Sub-sections */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-b border-white/10">
        <div className="space-y-24">
          {trapSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <SectionTitle title={section.title} subtitle="Learn how the testmakers disguise wrong answers — and how to spot every trick." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {section.items.map((reel) => (
                  <ReelCard key={reel.title} reel={reel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
          MASTER THE <span className="text-[#FF0000]">BLUEPRINTS</span>
        </h2>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Follow @akaashacademy for daily strategy drops.
        </p>
        <a href="https://www.instagram.com/akaashacademy/" target="_blank" rel="noopener noreferrer" className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300">
          FOLLOW ON INSTAGRAM
        </a>
      </section>

    </div>
  );
};

export default ACT;
