import React from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

interface ReelItem {
  title: string;
  description: string;
  duration: string;
  reelUrl: string;
}

// 1. THE 16 UNIVERSAL GRAMMAR RULES (Copy-paste this array to ACT.tsx too)
const universalGrammarReels: ReelItem[] = [
  {
    title: "Rule 1: Commas",
    description: "The absolute baseline. Learn exactly when to use commas for lists, intro phrases, and non-essential clauses.",
    duration: "0:45",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_01/",
  },
  {
    title: "Rule 2: Semicolons & Colons",
    description: "Semicolons separate two full sentences. Colons introduce lists or explanations. Master the difference in seconds.",
    duration: "0:42",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_02/",
  },
  {
    title: "Rule 3: Dashes",
    description: "Dashes are just aggressive commas. Learn how to use them to isolate non-essential information.",
    duration: "0:38",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_03/",
  },
  {
    title: "Rule 4: Apostrophes",
    description: "Possession vs. Contraction. Stop letting 'its' vs 'it's' steal your points.",
    duration: "0:40",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_04/",
  },
  {
    title: "Rule 5: Subject-Verb Agreement",
    description: "Testmakers hide the subject behind prepositional phrases to trick you. Here is the visual check to find the real subject.",
    duration: "0:50",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_05/",
  },
  {
    title: "Rule 6: Pronoun Agreement",
    description: "Singular nouns need singular pronouns. Plural needs plural. Spot the mismatch instantly.",
    duration: "0:35",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_06/",
  },
  {
    title: "Rule 7: Verb Tense Consistency",
    description: "Keep your verbs in the same time zone. Learn the trigger words that force a tense shift.",
    duration: "0:44",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_07/",
  },
  {
    title: "Rule 8: Pronoun Case",
    description: "When to use 'I' vs 'me' or 'who' vs 'whom'. The foolproof test to get it right every time.",
    duration: "0:41",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_08/",
  },
  {
    title: "Rule 9: Misplaced Modifiers",
    description: "If a descriptive phrase starts a sentence, the thing it describes MUST come right after the comma.",
    duration: "0:48",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_09/",
  },
  {
    title: "Rule 10: Parallel Structure",
    description: "Lists must match in format (e.g., running, jumping, and swimming). Spot the odd one out.",
    duration: "0:39",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_10/",
  },
  {
    title: "Rule 11: Logical Comparisons",
    description: "You can compare a book to a book, but you can't compare a book to an author. Catch the faulty comparisons.",
    duration: "0:46",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_11/",
  },
  {
    title: "Rule 12: Concision",
    description: "When multiple answers are grammatically correct, the shortest one almost always wins. Cut the fluff.",
    duration: "0:37",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_12/",
  },
  {
    title: "Rule 13: Redundancy",
    description: "Saying 'annually every year' is a trap. Learn to spot words that repeat the same meaning.",
    duration: "0:34",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_13/",
  },
  {
    title: "Rule 14: Idioms & Expressions",
    description: "Sometimes the test just wants to know if you know the right preposition. Is it 'capable of' or 'capable to'?",
    duration: "0:43",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_14/",
  },
  {
    title: "Rule 15: Sentence Fragments",
    description: "A sentence needs a main subject and an active verb. Learn to spot fake verbs (-ing words) that create fragments.",
    duration: "0:47",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_15/",
  },
  {
    title: "Rule 16: Run-on Sentences",
    description: "Two independent clauses cannot be glued together with just a comma. Here are the 3 ways to legally fix a run-on.",
    duration: "0:52",
    reelUrl: "https://www.instagram.com/reel/GRAMMAR_16/",
  },
];

// 2. THE READING HUB (Grammar removed, purely reading logic now)
const readingReels: ReelItem[] = [
  {
    title: "Transitions",
    description: "Master the logic words that connect ideas — and learn how the SAT tests whether you actually understand the relationship between sentences.",
    duration: "0:38",
    reelUrl: "https://www.instagram.com/reel/CXXXXXXXXXX2/",
  },
  {
    title: "Evidence Questions",
    description: "Stop guessing which line supports the answer. Use a simple elimination strategy to lock in evidence-based reading questions.",
    duration: "0:52",
    reelUrl: "https://www.instagram.com/reel/CXXXXXXXXXX3/",
  },
  {
    title: "Vocabulary in Context",
    description: "The SAT doesn't test obscure words anymore — it tests context. Here's how to nail vocab-in-context questions every time.",
    duration: "0:36",
    reelUrl: "https://www.instagram.com/reel/CXXXXXXXXXX5/",
  },
];

const mathReels: ReelItem[] = [
  {
    title: "Algebra Core",
    description: "The foundational algebra moves that show up across nearly every math section — linear equations, systems, and manipulation shortcuts.",
    duration: "0:48",
    reelUrl: "https://www.instagram.com/reel/CYYYYYYYYYY1/",
  },
  {
    title: "Advanced Math",
    description: "Quadratics, exponentials, and functions broken down into a repeatable process so harder problems stop feeling random.",
    duration: "0:55",
    reelUrl: "https://www.instagram.com/reel/CYYYYYYYYYY2/",
  },
  {
    title: "Problem Solving",
    description: "Word problems are pattern problems. Learn to translate real-world scenarios into equations fast and without second-guessing.",
    duration: "0:50",
    reelUrl: "https://www.instagram.com/reel/CYYYYYYYYYY3/",
  },
  {
    title: "Data Analysis",
    description: "Tables, scatterplots, and ratios — the exact framework for reading data questions correctly the first time, every time.",
    duration: "0:43",
    reelUrl: "https://www.instagram.com/reel/CYYYYYYYYYY4/",
  },
];

const trapReels: ReelItem[] = [
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
];

interface ReelCardProps {
  reel: ReelItem;
}

const ReelCard = ({ reel }: ReelCardProps) => {
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
      <a href={reel.reelUrl} target="_blank" rel="noopener noreferrer" className="block">
        <button className="w-full font-['Bebas_Neue'] text-sm md:text-base tracking-[0.15em] text-white border border-white/20 hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300 py-3 px-4">
          WATCH STRATEGY ON INSTAGRAM →
        </button>
      </a>
    </div>
  );
};

const SAT = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-16 py-24 md:py-32 text-center border-b border-white/10">
        <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6">
          SAT REEL STRATEGIES
        </h1>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          The SAT rewards pattern recognition, not memorization. Click any strategy below to master the pattern on Instagram.
        </p>
      </section>

      {/* NEW: Universal Grammar Hub (16 Rules) */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle title="THE 16 UNIVERSAL GRAMMAR RULES" subtitle="The exact frameworks that govern the Writing section. Master these, and you master the grammar on both the SAT and ACT." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {universalGrammarReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Reading Hub */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-b border-white/10">
        <SectionTitle title="READING LOGIC HUB" subtitle="Stop relying on 'feeling' the right answer. Use concrete evidence to eliminate traps." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {readingReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Math Hub */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle title="MATH HUB" subtitle="From algebra fundamentals to data analysis — strategy over raw computation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {mathReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Deconstructing Traps */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-white/10">
        <SectionTitle title="DECONSTRUCTING TRAPS" subtitle="Learn how the SAT disguises wrong answers — and how to spot every trick." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {trapReels.map((reel) => (
            <React.Fragment key={reel.title}>
              <ReelCard reel={reel} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center border-t border-white/10">
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
