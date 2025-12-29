import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Assuming react-icons v5+ for X icon, or fallback
import { SiSubstack, SiGitbook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">

      {/* Large Background Text Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] pointer-events-none opacity-[0.03] select-none flex justify-center">
        <span className="text-[15rem] md:text-[25rem] font-bold tracking-tighter leading-none whitespace-nowrap">USUAL</span>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Left Column: CTA Button */}
          <div className="md:col-span-3">
            <Link
              href="/app"
              className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#252525] text-white px-6 py-3 rounded-full border border-white/10 transition-all group"
            >
              <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-medium">Access app</span>
            </Link>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-5 gap-8">
            {FOOTER_CONTENT.columns.map((col, index) => (
              <div key={index}>
                <h4 className="text-gray-500 font-medium mb-6 text-sm">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-sm font-medium hover:text-gray-300 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
            <span>{FOOTER_CONTENT.bottom.copyright}</span>
            {FOOTER_CONTENT.bottom.links.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <FaTelegramPlane size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <FaDiscord size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <FaXTwitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              {/* LinkedIn placeholder or logic for specific icon */}
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              {/* Gitbook/Docs placeholder */}
              <SiGitbook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <FaGithub size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <SiSubstack size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}