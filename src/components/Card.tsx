import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

interface CardProps {
  title: string;
  description: string;
  number?: string; // Optional: Used for the "01, 02" numbering on the Home page
  link?: string;   // Optional: Used for internal routing (like /reading or /math)
  duration?: string; // NEW: Used for Reels ("0:27" or "COMING SOON")
  socialLinks?: {    // NEW: The 3 platform links
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

// Minimal, zero-lag SVGs for the buttons
const Icons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  )
};

const Card: React.FC<CardProps> = ({ title, description, number, link, duration, socialLinks }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isComingSoon = duration === "COMING SOON";

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      // @ts-ignore - Tells TypeScript to stop stressing over VanillaTilt's strict types
      VanillaTilt.init(cardElement, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
      });
    }
    return () => {
      if (cardElement && (cardElement as any).vanillaTilt) {
        (cardElement as any).vanillaTilt.destroy();
      }
    };
  }, []);

  const CardContent = () => (
    <div 
      ref={cardRef}
      className="relative p-6 md:p-8 bg-[#09090b] border border-white/10 hover:border-[#FF0000] transition-colors duration-300 h-full flex flex-col justify-between group"
    >
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-[#FF0000] transition-all duration-300" />
      
      <div>
        {/* Header Block: Handles generic numbers OR reel durations */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            {number && (
              <span className="block font-['Bebas_Neue'] text-sm tracking-widest text-[#FF0000] mb-2">
                {number}
              </span>
            )}
            <h4 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide text-white">
              {title}
            </h4>
          </div>
          
          {/* Reel Duration Badge */}
          {duration && (
            <span className={`flex-shrink-0 font-['DM_Sans'] text-xs tracking-widest border px-2 py-1 whitespace-nowrap mt-1 ${isComingSoon ? "text-white/50 border-white/20" : "text-[#FF0000] border-[#FF0000]/40"}`}>
              {isComingSoon ? duration : `REEL • ${duration}`}
            </span>
          )}
        </div>
        
        <p className="font-['DM_Sans'] text-sm md:text-base text-white/60 leading-relaxed">
          {description}
        </p>
      </div>

      {/* FOOTER LOGIC: Determines what buttons to show */}
      
      {/* Scenario 1: Standard internal navigation link (Homepage) */}
      {link && !duration && (
        <span className="block font-['Bebas_Neue'] text-xs tracking-widest text-[#FF0000] mt-8 group-hover:translate-x-2 transition-transform duration-300">
          LEARN MORE →
        </span>
      )}

      {/* Scenario 2: It's a Reel Card (Either active or coming soon) */}
      {duration && (
        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
          {isComingSoon ? (
            <a href="https://www.instagram.com/akaashacademy/" target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="w-full font-['Bebas_Neue'] text-sm md:text-base tracking-[0.15em] text-white/70 border border-white/10 hover:border-white/40 hover:text-white transition-all duration-300 py-3 px-4">
                FOLLOW FOR THIS DROP →
              </button>
            </a>
          ) : (
            <div>
              <span className="block font-['Bebas_Neue'] text-xs tracking-widest text-white/40 mb-3">
                VIEW STRATEGY ON:
              </span>
              <div className="grid grid-cols-3 gap-2">
                
                {/* Instagram */}
                <a href={socialLinks?.instagram || "https://instagram.com/akaashacademy"} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1.5 py-2.5 border border-white/10 hover:border-[#FF0000] hover:text-[#FF0000] text-white/70 transition-all duration-300 group/btn">
                  <Icons.Instagram />
                  <span className="font-['Bebas_Neue'] text-xs tracking-widest">INSTA</span>
                </a>

                {/* TikTok */}
                <a href={socialLinks?.tiktok || "https://tiktok.com/@akaashacademy"} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1.5 py-2.5 border border-white/10 hover:border-[#00f2fe] hover:text-[#00f2fe] text-white/70 transition-all duration-300 group/btn">
                  <Icons.TikTok />
                  <span className="font-['Bebas_Neue'] text-xs tracking-widest">TIKTOK</span>
                </a>

                {/* YouTube */}
                <a href={socialLinks?.youtube || "https://youtube.com/@akaash_academy"} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1.5 py-2.5 border border-white/10 hover:border-[#FF0000] hover:text-[#FF0000] text-white/70 transition-all duration-300 group/btn">
                  <Icons.YouTube />
                  <span className="font-['Bebas_Neue'] text-xs tracking-widest">SHORTS</span>
                </a>

              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // If it's just a generic internal link card, wrap the whole thing in a Link.
  if (link && !duration) {
    return (
      <Link to={link} className="block h-full cursor-pointer no-underline">
        <CardContent />
      </Link>
    );
  }

  // If it's a Reel Card, the buttons inside handle the clicks, so don't wrap the whole card.
  return <CardContent />;
};

export default Card;
