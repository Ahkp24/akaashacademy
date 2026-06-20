import React from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

interface ReelItem {
  title: string;
  description: string;
  duration: string;
  reelUrl: string;
}

// THE 6 ACTIVE TIPS & TRICKS REELS
const tipsReels: ReelItem[] = [
  {
    title: "The Wording Trick",
    description: "Testmakers love subtle word swaps that flip the meaning of an answer choice. Learn to catch them before they catch you.",
    duration: "0:39",
    reelUrl: "https://www.instagram.com/reel/CZZZZZZZZZZ1/",
  },
  {
    title: "The Extreme Choice Trap",
    description: "Answers with words like 'always,' 'never,' or 'completely' are rarely correct. Here's the rule and the rare exceptions.",
    duration: "0:34",
    reelUrl: "https://www.instagram.com/reel/CZZZZZZZZZZ2/",
  },
  {
    title: "The Half-Right Trap",
    description: "Some answers are 90% correct — and 100% wrong. Learn to spot the one detail that disqualifies an almost-perfect choice.",
    duration: "0:46",
    reelUrl: "https://www.instagram.com/reel/CZZZZZZZZZZ3/",
  },
  {
    title: "Tip 4 Title",
    description: "Add your tip description here.",
    duration: "0:45",
    reelUrl: "https://www.instagram.com/akaashacademy/",
  },
  {
    title: "Tip 5 Title",
    description: "Add your tip description here.",
    duration: "0:45",
    reelUrl: "https://www.instagram.com/akaashacademy/",
  },
  {
    title: "Tip 6 Title",
    description: "Add your tip description here.",
    duration: "0:45",
    reelUrl: "https://www.instagram.com/akaashacademy/",
  },
];

interface ReelCardProps { reel: ReelItem; }

const ReelCard = ({ reel }: ReelCardProps) => {
  const isComingSoon = reel.duration === "COMING SOON";
  return (
    <div className="bg-[#09090b] border border-white/10 hover:border-[#FF0000] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide text-white">{reel.title}</h3>
          <span className={`flex-shrink-0 font-['DM_Sans'] text-xs tracking-widest border px-2 py-1 whitespace-nowrap ${isComingSoon ? "text-white/50 border-white/20" : "text-[#FF0000] border-[#FF0000]/40"}`}>
            {isComingSoon ? reel.duration : `REEL • ${reel.duration}`}
          </span>
        </div>
        <p className="font-['DM_Sans'] text-sm md:text-base text-white/70 leading-relaxed mb-8">{reel.description}</p>
      </div>
      <a href={reel.reelUrl} target="_blank" rel="noopener noreferrer" className="block">
        <button className={`w-full font-['Bebas_Neue'] text-sm md:text-base tracking-[0.15em] transition-all duration-300 py-3 px-4 border ${isComingSoon ? "text-white/70 border-white/10 hover:border-white/40 hover:text-white" : "text-white border-white/20 hover:border-[#FF0000] hover:text-[#FF0000]"}`}>
          {isComingSoon ? "FOLLOW FOR THIS DROP →" : "WATCH STRATEGY ON INSTAGRAM →"}
        </button>
      </a>
    </div>
  );
};

const Tips = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-24 md:py-32 text-center border-b border-white/10">
        <ScrollReveal>
          <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6 glitch-text cursor-default">
            TIPS & <span className="text-[#FF0000]">TRICKS</span>
          </h1>
          <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stop falling for the bait. Here is how testmakers disguise wrong answers and build traps to ruin your score.
          </p>
        </ScrollReveal>
      </section>

      {/* Unified Tips Grid */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="mb-16">
          <SectionTitle title="THE TRAP MATRIX" subtitle="Learn to spot subtle word swaps, extreme choices, and calculation baits." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipsReels.map((reel, idx) => (
            <ScrollReveal key={reel.title} delay={idx * 100}>
              <ReelCard reel={reel} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center">
        <ScrollReveal>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
            OUTSMART THE <span className="text-[#FF0000]">TEST</span>
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

export default Tips;
