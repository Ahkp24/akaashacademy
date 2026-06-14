import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTilt } from "../hooks/useTilt"; // Hooks up your custom tilt mechanics

interface CardProps {
  title: string;
  description: string;
  number?: string; // Optional: Used for the "01, 02" numbering on the Home page
  link?: string;   // Optional: Used to make a card clickable (like /sat or /act)
}

const Card: React.FC<CardProps> = ({ title, description, number, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Activate your cinematic hover tilt effect
  useTilt(cardRef);

  // The actual card design layer
  const CardContent = () => (
    <div 
      ref={cardRef}
      className="relative p-8 bg-[#09090b] border border-white/10 hover:border-[#FF0000] transition-colors duration-300 h-full flex flex-col justify-between group"
    >
      {/* Subtle red corner accent light that shows up on hover */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-[#FF0000] transition-all duration-300 w-4 h-4" />
      
      <div>
        {/* If a number exists (like "01"), render it in Bebas Neue */}
        {number && (
          <span className="block font-['Bebas_Neue'] text-sm tracking-widest text-[#FF0000] mb-4">
            {number}
          </span>
        )}
        
        <h4 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide mb-3 text-white">
          {title}
        </h4>
        
        <p className="font-['DM_Sans'] text-sm md:text-base text-white/60 leading-relaxed">
          {description}
        </p>
      </div>

      {/* If a link exists, show a minimal call-to-action chevron */}
      {link && (
        <span className="block font-['Bebas_Neue'] text-xs tracking-widest text-[#FF0000] mt-6 group-hover:translate-x-2 transition-transform duration-300">
          LEARN MORE →
        </span>
      )}
    </div>
  );

  // If the card has a link parameter, wrap it in a React Router Link tag. Otherwise, just show a standard box.
  if (link) {
    return (
      <Link to={link} className="block h-full cursor-pointer">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default Card;
