import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  className?: string;
}

export default function Hero({
  eyebrow,
  title,
  accent,
  subtitle,
  cta,
  className,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleParts = accent ? title.split(accent) : [title];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Staggered entrance
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col justify-center px-6 lg:px-12",
        className
      )}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Red glow — cinematic accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto w-full">
        {eyebrow && (
          <span className="font-heading text-sm tracking-[0.3em] text-red-DEFAULT block mb-6">
            {eyebrow}
          </span>
        )}

        <h1 className="font-heading text-[clamp(4rem,12vw,10rem)] leading-none text-white mb-6">
          {accent ? (
            <>
              {titleParts[0]}
              <span className="text-red-DEFAULT">{accent}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>

        {subtitle && (
          <p className="font-body text-base lg:text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
            {subtitle}
          </p>
        )}

        {cta && (
          <a
            href={cta.href}
            className="inline-block font-body text-sm font-medium px-8 py-4 bg-red-DEFAULT text-white tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
