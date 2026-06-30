import React from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

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

// ==========================================
// 1. ALGEBRA (7 Cards: 4 Real, 3 Placeholders)
// ==========================================
const algebraReels: ReelItem[] = [
  // 🟢 YOUR 4 REAL VIDEOS
  {
    title: "Linear Equations Shortcut",
    description: "A lot of word problems are literally just simple linear equations.",
    duration: "0:50",
    socialLinks: { 
      instagram: "https://www.instagram.com/akaashacademy/reel/DaGjwy5gkI7/", 
      tiktok: "https://tiktok.com/@akaashacademy/video/your_link", 
      youtube: "https://youtube.com/shorts/your_link" 
    }
  },
  {
    title: "Solving Linear Equations",
    description: "Solve word problems criminally fast.",
    duration: "0:33",
    socialLinks: { 
      instagram: "https://www.instagram.com/akaashacademy/reel/DaGj-ftgl4A/", 
      tiktok: "https://tiktok.com/@akaashacademy/video/your_link", 
      youtube: "https://youtube.com/shorts/your_link" 
    }
  },
  {
    title: "Infinite Solution Systems",
    description: "The most complex type of question solved in 30 seconds.",
    duration: "0:39",
    socialLinks: { 
      instagram: "https://www.instagram.com/akaashacademy/reel/DaNywLcROx4/", 
      youtube: "https://youtube.com/shorts/your_link" 
    }
  },
  {
    title: "No Solution Systems",
    description: "No solution? No problem.",
    duration: "0:43",
    socialLinks: { 
      instagram: "https://www.instagram.com/akaashacademy/reel/DaNzkN3xxap/", 
      tiktok: "https://tiktok.com/@akaashacademy/video/your_link", 
      youtube: "https://youtube.com/shorts/your_link" 
    }
  },

  // 🔴 THE AUTOMATIC PLACEHOLDERS
  // (Since we have 4 real videos, we need 3 placeholders to hit 7 total)
  ...Array.from({ length: 3 }, (_, i) => ({
    title: `Algebra Strategy ${i + 5}`, // Starts naming them at Strategy 5!
    description: "The strategic framework for this concept. Video dropping soon.",
    duration: "COMING SOON",
  }))
];

// ==========================================
// 2. ADVANCED MATH (19 Cards)
// ==========================================
const advancedMathReels: ReelItem[] = Array.from({ length: 19 }, (_, i) => ({
  title: `Advanced Math Strategy ${i + 1}`,
  description: "Add your video description here.",
  duration: "0:00",
  socialLinks: { instagram: "", tiktok: "", youtube: "" }
}));

// ==========================================
// 3. DATA AND STATISTICS (21 Cards)
// ==========================================
const dataStatsReels: ReelItem[] = Array.from({ length: 21 }, (_, i) => ({
  title: `Data & Stats Strategy ${i + 1}`,
  description: "Add your video description here.",
  duration: "0:00",
  socialLinks: { instagram: "", tiktok: "", youtube: "" }
}));

// ==========================================
// 4. GEOMETRY (14 Cards)
// ==========================================
const geometryReels: ReelItem[] = Array.from({ length: 14 }, (_, i) => ({
  title: `Geometry Strategy ${i + 1}`,
  description: "Add your video description here.",
  duration: "0:00",
  socialLinks: { instagram: "", tiktok: "", youtube: "" }
}));

// ==========================================
// 5. ACT MATH (17 Cards)
// ==========================================
const actMathReels: ReelItem[] = Array.from({ length: 17 }, (_, i) => ({
  title: `ACT Math Strategy ${i + 1}`,
  description: "Add your video description here.",
  duration: "0:00",
  socialLinks: { instagram: "", tiktok: "", youtube: "" }
}));


// --- SECTION MAPPING ---
const satMathSections: SubSection[] = [
  { id: "algebra", title: "Algebra", items: algebraReels },
  { id: "advanced-math", title: "Advanced Math", items: advancedMathReels },
  { id: "data-statistics", title: "Data and Statistics", items: dataStatsReels },
  { id: "geometry", title: "Geometry", items: geometryReels },
];

const actMathSections: SubSection[] = [
  { id: "act-math", title: "ACT Math Exclusive", items: actMathReels },
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
          <SectionTitle title="SAT MATH FRAMEWORKS" subtitle="From algebra fundamentals to geometry — master the core patterns." />
        </div>

        <div className="space-y-24">
          {satMathSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <ScrollReveal>
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6 border-l-4 border-[#FF0000] pl-4">{section.title}</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((reel, idx) => (
                  <ScrollReveal key={idx} delay={(idx % 4) * 50}>
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
                  <ScrollReveal key={idx} delay={(idx % 4) * 50}>
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
