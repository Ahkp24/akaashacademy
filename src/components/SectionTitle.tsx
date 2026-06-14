import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string; // The question mark makes it optional so it never errors
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-left max-w-3xl">
      <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl tracking-wide text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-['DM_Sans'] text-base md:text-lg text-white/50 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
