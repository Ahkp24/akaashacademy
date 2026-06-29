import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-['DM_Sans']">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Header and Slogan */}
          <ScrollReveal>
            <div className="text-left">
              <h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-wide mb-2 glitch-text cursor-default">
                AKAASH ACADEMY
              </h1>
              {/* Slogan */}
              <p className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-widest text-[#FF0000] mb-6 uppercase">
                LEARN IT QUICK. MAKE IT STICK.
              </p>
              <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 leading-relaxed max-w-lg mb-10">
                Mastering standardized tests through pattern recognition, not raw memorization. Access our complete strategy hubs below.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/reading" className="font-['Bebas_Neue'] text-base md:text-lg tracking-[0.15em] px-8 py-4 border border-[#FF0000] text-white bg-[#FF0000] hover:bg-transparent hover:text-[#FF0000] transition-colors duration-300">
                  READING & WRITING
                </Link>
                <Link to="/math" className="font-['Bebas_Neue'] text-base md:text-lg tracking-[0.15em] px-8 py-4 border border-white/20 text-white hover:border-white transition-colors duration-300">
                  MATH HUB
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Portrait 1080x1920 Canva Video Embed */}
          <ScrollReveal delay={200}>
            <div className="max-w-[340px] mx-auto w-full">
              <div className="relative w-full pt-[177.78%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.15)] hover:border-[#FF0000]/40 transition-all duration-500 bg-[#09090b]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.canva.com/design/DAHN695m0SE/ktMcoQvXwD1vZcFpFkHNtQ/watch?embed"
                  allowFullScreen
                  loading="lazy"
                  title="The Akaash Method"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Feature Navigation Grid */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl tracking-wide text-white mb-4">CHOOSE YOUR PATH</h2>
              <p className="text-white/70 max-w-2xl text-lg">Everything you need to break past your score plateaus.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Reading Card */}
            <ScrollReveal delay={100}>
              <Link to="/reading" className="group block h-full">
                <div className="bg-[#09090b] border border-white/10 group-hover:border-[#FF0000] transition-all duration-300 p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-4 group-hover:text-[#FF0000] transition-colors duration-300">READING & WRITING</h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      Stop relying on "feeling" the right answer. Master the 16 grammar rules and reading frameworks.
                    </p>
                  </div>
                  <span className="font-['Bebas_Neue'] text-sm tracking-[0.2em] text-[#FF0000]">ACCESS HUB →</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Math Card */}
            <ScrollReveal delay={200}>
              <Link to="/math" className="group block h-full">
                <div className="bg-[#09090b] border border-white/10 group-hover:border-[#FF0000] transition-all duration-300 p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-4 group-hover:text-[#FF0000] transition-colors duration-300">MATH HUB</h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      From foundational algebra to advanced quantitative logic. Strategy over raw computation.
                    </p>
                  </div>
                  <span className="font-['Bebas_Neue'] text-sm tracking-[0.2em] text-[#FF0000]">ACCESS HUB →</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Tips Card */}
            <ScrollReveal delay={300}>
              <Link to="/tips" className="group block h-full">
                <div className="bg-[#09090b] border border-white/10 group-hover:border-[#FF0000] transition-all duration-300 p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-4 group-hover:text-[#FF0000] transition-colors duration-300">TIPS & TRICKS</h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      Outsmart the test. Swipe through the master deck and learn how to spot wrong answers instantly.
                    </p>
                  </div>
                  <span className="font-['Bebas_Neue'] text-sm tracking-[0.2em] text-[#FF0000]">DECONSTRUCT TRAPS →</span>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-6 md:px-16 py-32 text-center bg-white/[0.02]">
        <ScrollReveal>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
            JOIN THE <span className="text-[#FF0000]">ACADEMY</span>
          </h2>
          <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Daily strategy drops to guarantee your score improves. Follow us on social media.
          </p>
          <a href="https://www.instagram.com/akaashacademy/" target="_blank" rel="noopener noreferrer" className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] hover:scale-105 transition-all duration-300">
            FOLLOW ON INSTAGRAM
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
