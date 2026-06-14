import { Link } from "react-router-dom";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

const navLinks = [
  { label: "SAT", to: "/sat" },
  { label: "ACT", to: "/act" },
  { label: "Akaash Arena", to: "/arena" },
  { label: "About", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-3xl tracking-widest text-white">
              AKAASH ACADEMY
            </span>
            <p className="font-body text-sm text-white/40 max-w-xs">
              Strategy over guesswork.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm tracking-widest text-white/30">
              NAVIGATE
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm tracking-widest text-white/30">
              FOLLOW
            </span>
            <ul className="flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/50 hover:text-red-DEFAULT transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
          <span className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} Akaash Academy. All rights reserved.
          </span>
          <span className="font-body text-xs text-white/20">
            Student-led. Strategy-first.
          </span>
        </div>
      </div>
    </footer>
  );
}
