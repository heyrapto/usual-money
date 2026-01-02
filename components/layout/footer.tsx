import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Assuming react-icons v5+ for X icon, or fallback
import { SiSubstack, SiGitbook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/images/footer/footer-image.avif"
          alt="Echo Background"
          fill
          className="object-cover object-center"
        />
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
              <FaXTwitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              {/* Gitbook/Docs placeholder */}
              <SiGitbook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] transition-all">
              <FaGithub size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}