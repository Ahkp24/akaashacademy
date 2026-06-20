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

// 📌 THE TIPS & TRICKS REELS ARRAY
const tipsReels: ReelItem[] = [
  {
    title: "SAT: Grammar First",
    description: "Targeting low-hanging fruit first will actually help you do the tests MUCH faster.",
    duration: "0:26",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DXGATutjF2u/",
  },
  {
    title: "Skipping Hard Questions",
    description: "Sometimes a question may take too long to solve. Here's how to maximize your points and unstuck yourself.",
    duration: "0:44",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DXRnXGlDchL/",
  },
  {
    title: "SAT: Skipping the Notes",
    description: "The last few questions on SAT reading are very time-consuming, but top-scoring students solve them in 20 seconds. How?",
    duration: "0:27",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DXSEYJyEVLJ/",
  },
  {
    title: "Read the Question First",
    description: "A super-simple tip that many overlook costs them their scores.",
    duration: "0:15",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DYfpaqAAdkA/",
  },
  {
    title: "Distractors",
    description: "How do you know when an answer choice is incorrect?",
    duration: "0:39",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DYf0OwZgNwk/",
  },
  {
    title: "50/50 Rule",
    description: "We ALL get that moment trapped between two answer choices. But when you watch this, you'll never encounter that again.",
    duration: "0:20",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZDgwy3A2lA/",
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
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-24 md:py-32 text-center border-b border-white/10">
        <ScrollReveal>
          <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6 glitch-text cursor-default">
            TIPS & <span className="text-[#FF0000]">TRICKS</span>
          </h1>
          <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Swipe through this deck to unlock all the tips that top-scoring students use on their tests, and go below to see video breakdowns of how they work.
          </p>
        </ScrollReveal>
      </section>

      {/* Canva Live Embed Section */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        {/* CHANGED: max-w-md keeps the vertical slide from blowing up too huge on desktop */}
        <div className="max-w-md mx-auto">
          <ScrollReveal>
            <SectionTitle title="THE MASTER TRAP DECK" subtitle="Swipe to unlock ALL the time-saving and score-boosting tips & tricks you need!" />
            
            {/* CHANGED: pt-[125%] perfectly matches your Canva's portrait aspect ratio */}
            <div className="mt-16 relative w-full pt-[125%] rounded-lg overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(255,0,0,0.1)] hover:border-[#FF0000]/50 transition-colors duration-500 bg-[#09090b]">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.canva.com/design/DAHGrG-I2Yw/wfE7aO-cvt3s7CiFRQ5kaQ/view?embed"
                allowFullScreen
                loading="lazy"
                title="Akaash Academy Tips and Tricks"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reels Grid Section */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="mb-16">
          <SectionTitle title="THE VIDEO VAULT" subtitle="Watch the complete breakdowns of each trick on Instagram." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipsReels.map((reel, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <ReelCard reel={reel} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center mt-auto">
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
