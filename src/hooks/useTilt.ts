import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
}

export function useTilt(options: TiltOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    VanillaTilt.init(el as HTMLElement & { vanillaTilt: unknown }, {
      max: 8,
      speed: 400,
      glare: false,
      ...options,
    });

    return () => {
      if ((el as any).vanillaTilt) {
        (el as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return { ref };
}
