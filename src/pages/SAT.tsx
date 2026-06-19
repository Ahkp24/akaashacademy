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

// 1. THE 16 UNIVERSAL GRAMMAR RULES
const universalGrammarReels: ReelItem[] = [
  { title: "Clauses", description: "What makes up a sentence?", duration: "0:27", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZYGEKXgrwr/" },
  { title: "Boundaries", description: "Know exactly what the SAT and ACT tests.", duration: "0:37", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZYNunAgJkJ/" },
  { title: "Boundary Errors", description: "Traps and Tricks the SAT and ACT always try to pull.", duration: "0:28", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZY7sVTsUEY/" },
  { title: "PUNCTUATION: Semicolons & Periods", description: "What makes a sentence done?", duration: "0:33", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZaQsweRXj6/" },
  { title: "PUNCTUATION: Colons", description: "The easiest punctuation on the SAT and ACT.", duration: "0:29", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZaW-lBRdKU/" },
  { title: "PUNCTATION: Dashes", description: "You never use these, but the SAT and ACT LOVE them.", duration: "0:37", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZbJ51KMSWD/" },
  { title: "FANBOYS", description: "Is that Drake?", duration: "0:28", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZcuf5hxVlC/" },
  { title: "Subordinating Conjunctions", description: "The ultimate TRICK the SAT and ACT pull that's really easy to see through.", duration: "0:41", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZdVr_CgTkS/" },
  { title: "PUNCTUATION: Commas", description: "A rapid-fire overview of when to use and not use commas.", duration: "0:21", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZdaMnags6s/" },
  { title: "Appositives", description: "Michael Jackson can help you with a rare rule for the SAT and ACT.", duration: "0:56", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZd6QcNMK7z/" },
  { title: "Modifiers", description: "What sounds right isn't always right.", duration: "0:42", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZeD6Mds-AK/" },
  { title: "Agreement", description: "THE ULTIMATE GRAMMAR TRICK STOPPING YOU FROM A 1600!", duration: "0:60", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZfbAT4xzJn/" },
  { title: "Possession", description: "Who owns what and why?", duration: "0:60", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZfjG3pRmOw/" },
  { title: "Consistency", description: "Learn what the SAT and ACT love and hate to see.", duration: "0:42", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZf-rr_ABqm/" },
  { title: "Parallelism", description: "Another rare rule that keeps people from breaking past the 600s.", duration: "0:27", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZgVotQMCP2/" },
  { title: "Logic", description: "What makes a sentence make sense?", duration: "0:41", reelUrl: "https://www.instagram.com/akaashacademy/reel/DZgdX8YsPmE/" },
];

// 2. READING SUB-SECTIONS (Coming Soon)
const readingSections: SubSection[] = [
  { id: "central-ideas", title: "Central Ideas & Details", items: createPlaceholder("Central Ideas & Details") },
  { id: "command-evidence", title: "Command of Evidence", items: createPlaceholder("Command of Evidence") },
  { id: "inferences", title: "Inferences", items: createPlaceholder("Inferences") },
  { id: "cross-text", title: "Cross-Text Connections", items: createPlaceholder("Cross-Text Connections") },
  { id: "text-structure", title: "Text Structure & Purpose", items: createPlaceholder("Text Structure & Purpose") },
  { id: "words-context", title: "Words in Context", items: createPlaceholder("Words in Context") },
  { id: "rhetorical-synthesis", title: "Rhetorical Synthesis", items: createPlaceholder("Rhetorical Synthesis") },
  { id: "transitions", title: "Transitions", items: createPlaceholder("Transitions") },
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

const SAT = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Split-Screen Hero & Table of Contents */}
      <section className="px-6 md:px-16 py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Context */}
          <div>
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6">
              READING & WRITING
            </h1>
            <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              The verbal sections reward pattern recognition, not "feeling" the right answer. Click any strategy below to master the logic.
            </p>
          </div>

          {/* Right Side: The Strategy Matrix (TOC) */}
          <div className="bg-[#09090b] border border-white/10 p-8 md:p-10 hover:border-[#FF0000]/50 transition-colors duration-500">
            <h2 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#FF0000] mb-8 border-b border-[#FF0000]/20 pb-4">
              THE STRATEGY MATRIX
            </h2>
            
            <div className="space-y-8 font-['DM_Sans']">
              {/* TOC 1: Grammar */}
              <div>
                <a href="#grammar" className="font-['Bebas_Neue'] text-2xl text-white hover:text-[#FF0000] transition-colors block mb-2">
                  » 01. UNIVERSAL GRAMMAR HUB
                </a>
                <p className="text-sm text-white/50 pl-6">(All 16 Master Rules)</p>
              </div>

              {/* TOC 2: Reading */}
              <div>
                <span className="font-['Bebas_Neue'] text-2xl text-white block mb-3">
                  » 02. READING LOGIC HUB
                </span>
                <ul className="text-sm text-white/70 pl-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 list-none">
                  {readingSections.map((section) => (
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

        </div>
      </section>

      {/* Grammar Hub */}
      <section id="grammar" className="px-6 md:px-16 py-24 scroll-mt-20 border-b border-white/10">
        <SectionTitle title="ALL OF SAT AND ACT GRAMMAR IN 10 MINUTES" subtitle="16 reels. Each under a minute. Get all grammar DONE for the SAT AND ACT." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {universalGrammarReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Reading Sub-sections */}
      <section id="reading" className="px-6 md:px-16 py-24 bg-white/[0.02] border-b border-white/10 scroll-mt-20">
        <div className="mb-16">
          <SectionTitle title="READING LOGIC HUB" subtitle="Stop relying on 'feeling' the right answer. Master these specific passage types." />
        </div>
        
        <div className="space-y-24">
          {readingSections.map((section) => (
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

export default SAT;
