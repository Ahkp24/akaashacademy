import { cn } from "../lib/utils";
import { useInView } from "../hooks/useInView";

interface SectionTitleProps {
  label?: string;
  title: string;
  accent?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  accent,
  className,
  align = "left",
}: SectionTitleProps) {
  const { ref, inView } = useInView();

  // Split title to insert red accent word
  const titleParts = accent ? title.split(accent) : [title];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "flex flex-col gap-3 transition-all duration-700",
        align === "center" && "items-center text-center",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {label && (
        <span className="font-heading text-sm tracking-[0.25em] text-red-DEFAULT">
          {label}
        </span>
      )}
      <h2 className="font-heading text-5xl lg:text-7xl text-white leading-none">
        {accent ? (
          <>
            {titleParts[0]}
            <span className="text-red-DEFAULT">{accent}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}
