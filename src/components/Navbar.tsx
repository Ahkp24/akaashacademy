import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "SAT", to: "/sat" },
  { label: "ACT", to: "/act" },
  { label: "Akaash Arena", to: "/arena" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl tracking-widest text-white hover:text-red-DEFAULT transition-colors duration-200">
          AKAASH ACADEMY
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "font-body text-sm font-medium tracking-wide transition-colors duration-200",
                  location.pathname === link.to
                    ? "text-red-DEFAULT"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md",
          menuOpen ? "max-h-96 border-b border-white/5" : "max-h-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "font-body text-base font-medium tracking-wide transition-colors duration-200",
                  location.pathname === link.to
                    ? "text-red-DEFAULT"
                    : "text-white/70"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
