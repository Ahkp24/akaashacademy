import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { cn } from "../lib/utils";
import { useInView } from "../hooks/useInView";

interface CardProps {
  title: string;
  description: string;
  tag?: string;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  tag,
  className,
  delay = 0,
  onClick,
}: CardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    VanillaTilt.init(el as unknown as HTMLElement, {
      max: 6,
      speed: 500,
      glare: false,
    });
    return () => {
      if ((el as any).vanillaTilt) (el as any).vanillaTilt.destroy();
    };
  }, []);

  const mergedRef = (el: HTMLDivElement | null) => {
    (tiltRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (inViewRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  return (
    <div
      ref={mergedRef}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group relative border border-white/10 bg-white/[0.02] p-8",
        "transition-all duration-700 ease-out cursor-default",
        "hover:border-red-DEFAULT/40 hover:bg-white/[0.04]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Red accent line on hover */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-red-DEFAULT transition-all duration-300 group-hover:w-full" />

      {tag && (
        <span className="font-heading text-xs tracking-[0.2em] text-red-DEFAULT mb-4 block">
          {tag}
        </span>
      )}
      <h3 className="font-heading text-3xl lg:text-4xl text-white mb-3 leading-none">
        {title}
      </h3>
      <p className="font-body text-sm text-white/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
