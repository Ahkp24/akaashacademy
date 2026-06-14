import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-black border-b border-white/10">
      {/* Visual background placeholder for particles */}
      <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-wide mb-6 text-white leading-none">
          {title.split("GUESSWORK")[0]}
          <span className="text-[#FF0000]">GUESSWORK</span>
        </h1>
        
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        
        <Link 
          to={ctaLink} 
          className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
