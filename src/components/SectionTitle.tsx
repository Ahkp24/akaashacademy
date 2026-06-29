import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string; // <-- We just added this optional prop!
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <ScrollReveal>
      <div className="mb-12">
        <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl tracking-wide text-white mb-4 uppercase">
          {title}
        </h2>
        {/* If a subtitle is passed, render it! */}
        {subtitle && (
          <p className="font-['DM_Sans'] text-white/70 max-w-2xl text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionTitle;
