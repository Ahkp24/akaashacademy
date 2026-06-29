import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 px-6 md:px-16 py-12 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide mb-2">
            AKAASH ACADEMY
          </h3>
          <p className="font-['DM_Sans'] text-sm text-white/50">
            Strategy over guesswork.
          </p>
        </div>

        {/* Navigation - UPDATED WITH UNIFIED HUBS */}
        <div>
          <h4 className="font-['Bebas_Neue'] text-lg tracking-wider text-white/40 mb-4">
            NAVIGATE
          </h4>
          <ul className="font-['DM_Sans'] text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-[#FF0000] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/reading" className="hover:text-[#FF0000] transition-colors">Reading / Writing</Link>
            </li>
            <li>
              <Link to="/math" className="hover:text-[#FF0000] transition-colors">Math Hub</Link>
            </li>
            <li>
              <Link to="/tips" className="hover:text-[#FF0000] transition-colors">Tips & Tricks</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FF0000] transition-colors">About</Link>
            </li>
          </ul>
        </div>

        {/* Social Follow */}
        <div>
          <h4 className="font-['Bebas_Neue'] text-lg tracking-wider text-white/40 mb-4">
            FOLLOW
          </h4>
          <ul className="font-['DM_Sans'] text-sm space-y-2">
            <li>
              <a href="https://www.instagram.com/akaashacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">Instagram</a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@akaashacademy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">TikTok</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@akaash_academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">YouTube</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-white/5 font-['DM_Sans'] text-xs text-white/30">
        <p>© {new Date().getFullYear()} Akaash Academy. All rights reserved.</p>
        <p className="tracking-widest uppercase mt-2 sm:mt-0">Student-led. Strategy-first.</p>
      </div>
    </footer>
  );
};

export default Footer;
