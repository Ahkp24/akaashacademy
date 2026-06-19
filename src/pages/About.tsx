import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 py-24 md:py-32 text-center border-b border-white/10">
        <h1 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-wide mb-6">
          THE MISSION IS <span className="text-[#FF0000]">SIMPLE</span>
        </h1>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Raise the national average by building a generation of students who play the game of the SAT and ACT at the maximum level.
        </p>
      </section>

      {/* 2. The Founder Section (Image + Bio) */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group">
            {/* Subtle red accent behind the image */}
            <div className="absolute -inset-4 bg-[#FF0000]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="/image_36e52b.jpg" 
              alt="Akaash Patel - Founder of Akaash Academy" 
              className="relative z-10 w-full h-auto object-cover border border-white/10 grayscale-[50%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-[#FF0000] transition-all duration-300 z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-[#FF0000] transition-all duration-300 z-20" />
          </div>

          {/* Text Column */}
          <div>
            <SectionTitle 
              title="MEET AKAASH PATEL" 
              subtitle="Founder, Lead Tutor, & Digital Strategist" 
            />
            <div className="mt-8 space-y-6 font-['DM_Sans'] text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                The national average is a <strong className="text-white">1029 on the SAT</strong> and a <strong className="text-white">19.4 on the ACT</strong>. High-end colleges won't even open your application if they see a score like that.That's because traditional test prep relies on rote memorization, expensive 800-page textbooks, and boring repetition. Akaash Academy relies on quick understanding and application that lasts.
              </p>
              <p>
                Most of us taking the SAT and ACT now are young and have a low attention span. We don't need long practice books or videos. We need bite-sized, memorable content to help us understand quickly. I provide that with Akaash Academy. Our videos are always around or less than a minute long and organized by topic so you easily find what you are looking for.
              </p>
              <p>
                As a Lead SAT Tutor at Schoolhouse.world, I've instructed multi-week bootcamps for international cohorts of students, analyzing exactly where students get stuck. By combining that frontline teaching experience with my background in many skill-based competitions (FBLA, HOSA, TSA), I engineer strategies that feel less like studying and more like beating a videogame (which is one of my hobbies).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Blueprint / Values Grid */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-b border-white/10">
        <SectionTitle 
          title="THE AKAASH ADVANTAGE" 
          subtitle="Akaash Academy is entirely built on my real experience with standardized tests and thus engineered for everyday students to crack them." 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
          <Card 
            number="01"
            title="POWERFUL"
            description="Tested and refined through instructing international SAT bootcamps at Schoolhouse.world. These strategies work across diverse learning styles."
          />
          <Card 
            number="02"
            title="AVAILABLE"
            description="Social media and the internet are the most powerful ways to spread information today and really popular among our generation. Akaash Academy leverages that to full extent."
          />
          <Card 
            number="03"
            title="BACKED"
            description="Leveraging a background in programming and game design to break down the SAT and ACT into quick and easily understandable content, not massive sets of rules or problems"
          />
        </div>
      </section>

      {/* 4. Core Values (Strategy Over Guessing) */}
      <section className="px-6 md:px-16 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl tracking-wide text-white mb-6">
            OUR <span className="text-[#FF0000]">PHILOSOPHY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="border-l-2 border-[#FF0000] pl-6 py-2">
              <h4 className="font-['Bebas_Neue'] text-2xl tracking-wide mb-2">STRATEGIES KEEP YOU FROM BEING STUCK</h4>
              <p className="font-['DM_Sans'] text-sm text-white/60">Really quick and understandable tips and tricks to save you time and prevent you from being stuck.</p>
            </div>
            <div className="border-l-2 border-[#FF0000] pl-6 py-2">
              <h4 className="font-['Bebas_Neue'] text-2xl tracking-wide mb-2">UNDERSTANDING CONTENT YOU WON'T FORGET</h4>
              <p className="font-['DM_Sans'] text-sm text-white/60">Don't just spam flashcards or read notes – we have everything you need to build understanding over time.</p>
            </div>
            <div className="border-l-2 border-[#FF0000] pl-6 py-2">
              <h4 className="font-['Bebas_Neue'] text-2xl tracking-wide mb-2">PROPER PRACTICE AND COMPREHENSION, NOT RANDOM TESTS</h4>
              <p className="font-['DM_Sans'] text-sm text-white/60">Spamming practice questions won't always help you IMPROVE. Understanding HOW you can improve matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Social CTA */}
      <section className="px-6 md:px-16 py-32 text-center border-t border-white/10 flex-grow">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
          HELP US RAISE THE <span className="text-[#FF0000]">AVERAGE</span>
        </h2>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          These tests are just like games – meant to be beaten.
        </p>
        
        <a 
          href="https://www.instagram.com/akaashacademy/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block"
        >
          <button className="font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300">
            FOLLOW ON INSTAGRAM →
          </button>
        </a>
      </section>

    </div>
  );
};

export default About;
