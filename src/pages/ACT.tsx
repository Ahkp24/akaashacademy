import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

interface ReelItem {
  title: string;
  description: string;
  duration: string;
  reelUrl: string;
}

const universalGrammarReels: ReelItem[] = [
  {
    title: "Clauses",
    description: "What makes up a sentence?",
    duration: "0:27",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZYGEKXgrwr/",
  },
  {
    title: "Boundaries",
    description: "Know exactly what the SAT and ACT tests.",
    duration: "0:37",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZYNunAgJkJ/",
  },
  {
    title: "Boundary Errors",
    description: "Traps and Tricks the SAT and ACT always try to pull.",
    duration: "0:28",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZY7sVTsUEY/",
  },
  {
    title: "PUNCTUATION: Semicolons & Periods",
    description: "What makes a sentence done?",
    duration: "0:33",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZaQsweRXj6/",
  },
  {
    title: "PUNCTUATION: Colons",
    description: "The easiest punctuation on the SAT and ACT.",
    duration: "0:29",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZaW-lBRdKU/",
  },
  {
    title: "PUNCTATION: Dashes",
    description: "You never use these, but the SAT and ACT LOVE them.",
    duration: "0:37",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZbJ51KMSWD/",
  },
  {
    title: "FANBOYS",
    description: "Is that Drake?",
    duration: "0:28",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZcuf5hxVlC/",
  },
  {
    title: "Subordinating Conjunctions",
    description: "The ultimate TRICK the SAT and ACT pull that's really easy to see through.",
    duration: "0:41",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZdVr_CgTkS/",
  },
  {
    title: "PUNCTUATION: Commas",
    description: "A rapid-fire overview of when to use and not use commas.",
    duration: "0:21",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZdaMnags6s/",
  },
  {
    title: "Appositives",
    description: "Michael Jackson can help you with a rare rule for the SAT and ACT.",
    duration: "0:56",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZd6QcNMK7z/",
  },
  {
    title: "Modifiers",
    description: "What sounds right isn't always right.",
    duration: "0:42",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZeD6Mds-AK/",
  },
  {
    title: "Agreement",
    description: "THE ULTIMATE GRAMMAR TRICK STOPPING YOU FROM A 1600!",
    duration: "0:60",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZfbAT4xzJn/",
  },
  {
    title: "Possession",
    description: "Who owns what and why?",
    duration: "0:60",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZfjG3pRmOw/",
  },
  {
    title: "Consistency",
    description: "Learn what the SAT and ACT love and hate to see.",
    duration: "0:42",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZf-rr_ABqm/",
  },
  {
    title: "Parallelism",
    description: "Another rare rule that keeps people from breaking past the 600s.",
    duration: "0:27",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZgVotQMCP2/",
  },
  {
    title: "Logic",
    description: "What makes a sentence make sense?",
    duration: "0:41",
    reelUrl: "https://www.instagram.com/akaashacademy/reel/DZgdX8YsPmE/",
  },
];

const mathReels: ReelItem[] = [
  {
    title: "Pacing Shortcuts",
    description:
      "With under 60 seconds per question, you can't afford to solve everything from scratch. Learn the shortcuts that skip steps without skipping accuracy.",
    duration: "0:47",
    reelUrl: "https://www.instagram.com/reel/CBBBBBBBBBB1/",
  },
  {
    title: "Problem-Solving Translation",
    description:
      "Word problems are just disguised equations. We show you the fastest way to translate ACT word problems into solvable math on the spot.",
    duration: "0:51",
    reelUrl: "https://www.instagram.com/reel/CBBBBBBBBBB2/",
  },
  {
    title: "Geometry Triggers",
    description:
      "Certain keywords and shapes instantly trigger specific formulas. Train your brain to recognize the trigger and apply the formula on reflex.",
    duration: "0:44",
    reelUrl: "https://www.instagram.com/reel/CBBBBBBBBBB3/",
  },
];

const readingReels: ReelItem[] = [
  {
    title: "Timeline Blueprints",
    description:
      "Map the structure of an ACT passage in seconds using a simple timeline framework — before you even start answering questions.",
    duration: "0:39",
    reelUrl: "https://www.instagram.com/reel/CCCCCCCCCC1/",
  },
  {
    title: "Main Idea Scanning",
    description:
      "Most ACT Reading questions hinge on the main idea. Learn how to extract it from a passage without reading every single word.",
    duration: "0:35",
    reelUrl: "https://www.instagram.com/reel/CCCCCCCCCC2/",
  },
  {
    title: "Evidence Selection",
    description:
      "Under time pressure, you need to locate proof fast. This strategy shows you exactly where to look — and what to ignore — under pressure.",
    duration: "0:43",
    reelUrl: "https://www.instagram.com/reel/CCCCCCCCCC3/",
  },
];

interface ComparisonRow {
  category: string;
  sat: string;
  act: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    category: "Time Per Question",
    sat: "More time per question, built for deeper reasoning.",
    act: "Under 60 seconds per question, built for rapid execution.",
  },
  {
    category: "Core Demand",
    sat: "Deep concept decoding and nuanced interpretation.",
    act: "Hyper-rapid procedural execution under strict time limits.",
  },
  {
    category: "Reading Approach",
    sat: "Analytical reading with room to dissect language.",
    act: "Scan-and-locate sprinting across dense passages.",
  },
  {
    category: "Math Style",
    sat: "Layered, multi-step reasoning problems.",
    act: "Formula-recognition and pacing under pressure.",
  },
  {
    category: "Winning Skill",
    sat: "Reasoning through ambiguity and nuance.",
    act: "Speed, pattern recall, and relentless pacing.",
  },
];

interface ReelCardProps {
  reel: ReelItem;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
  return (
    <div className="bg-[#09090b] border border-white/10 hover:border-[#FF0000] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide text-white">
            {reel.title}
          </h3>
          <span className="flex-shrink-0 font-['DM_Sans'] text-xs tracking-widest text-[#FF0000] border border-[#FF0000]/40 px-2 py-1 whitespace-nowrap">
            REEL • {reel.duration}
          </span>
        </div>

        <p className="font-['DM_Sans'] text-sm md:text-base text-white/70 leading-relaxed mb-8">
          {reel.description}
        </p>
      </div>

      {/* FIXED: Readded missing opening anchor link tag */}
      <a
        href={reel.reelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button className="w-full font-['Bebas_Neue'] text-sm md:text-base tracking-[0.15em] text-white border border-white/20 hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300 py-3 px-4">
          WATCH STRATEGY ON INSTAGRAM →
        </button>
      </a>
    </div>
  );
};

const ACT: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-16 py-24 md:py-32 text-center border-b border-white/10">
        <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6">
          MASTER THE ACT SPEED
        </h1>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          The ACT is a speed test disguised as an academic test. Learn the
          tactical frameworks to beat the clock on English, Math, and
          Reading.
        </p>
      </section>

      {/* Universal English Patterns */}
     <section className="px-6 md:px-16 py-24">
        <SectionTitle title="ALL OF SAT AND ACT GRAMMAR IN 10 MINUTES" subtitle="16 reels. Each under a minute. Get all grammar DONE for the SAT AND ACT." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {universalGrammarReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Math Dash Drills */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-b border-white/10">
        <SectionTitle
          title="MATH DASH DRILLS"
          subtitle="Instant recall. Zero hesitation."
        />
        <p className="font-['DM_Sans'] text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto text-center mt-6 mb-16">
          The ACT math section gives you less than 60 seconds per question.
          We train you on instant formula recognition and timing shortcuts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathReels.map((reel) => (
            <ReelCard key={reel.title} reel={reel} />
          ))}
        </div>
      </section>

      {/* Speed Reading Comprehension */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle
          title="SPEED READING COMPREHENSION"
          subtitle="Scan smart. Sprint faster."
        />
        <p className="font-['DM_Sans'] text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto text-center mt-6 mb-16">
          ACT Reading is an absolute sprint. We show you how to scan passages
          strategically for concrete proof anchors without drowning in the
          text.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {readingReels.map((reel) => (
            <ReelCard key={reel.title} reel={reel} />
          ))}
        </div>
      </section>

      {/* SAT vs ACT Comparison */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-b border-white/10">
        <SectionTitle
          title="SAT VS ACT"
          subtitle="Same goal. Completely different battlefield."
        />

        <div className="max-w-5xl mx-auto mt-16 border border-white/10">
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-4 md:p-6 font-['Bebas_Neue'] text-lg md:text-2xl tracking-wide text-white/50 border-r border-white/10">
              CATEGORY
            </div>
            <div className="p-4 md:p-6 font-['Bebas_Neue'] text-lg md:text-2xl tracking-wide text-white border-r border-white/10">
              THE SAT
            </div>
            <div className="p-4 md:p-6 font-['Bebas_Neue'] text-lg md:text-2xl tracking-wide text-[#FF0000]">
              THE ACT
            </div>
          </div>

          {/* Data Rows */}
          {comparisonRows.map((row, index) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 ${
                index !== comparisonRows.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="p-4 md:p-6 font-['Bebas_Neue'] text-sm md:text-lg tracking-wide text-white/50 border-r border-white/10 flex items-center">
                {row.category}
              </div>
              <div className="p-4 md:p-6 font-['DM_Sans'] text-sm md:text-base text-white/80 leading-relaxed border-r border-white/10">
                {row.sat}
              </div>
              <div className="p-4 md:p-6 font-['DM_Sans'] text-sm md:text-base text-white/80 leading-relaxed">
                {row.act}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center border-t border-white/10">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
          CHOOSE YOUR <span className="text-[#FF0000]">PLAYBOOK</span>
        </h2>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Follow @akaashacademy on Instagram for daily speed drills.
        </p>
        
        {/* FIXED: Readded missing opening anchor link tag */}
        <a
          href="https://www.instagram.com/akaashacademy/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300"
        >
          FOLLOW ON INSTAGRAM
        </a>
      </section>

    </div>
  );
};

export default ACT;
