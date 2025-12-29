"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { NAV_LINKS, DROPDOWN_SECTIONS, SOCIAL_LINKS } from "@/constants/navbar";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0 bg-black" : "-translate-y-full"
        }`}
    >
      <div className="flex w-full max-w-[1440px] items-center justify-between px-8 py-6">
        <div className="flex items-center">
          {/* Logo with Dropdown */}
          <div className="group relative flex items-center gap-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border border-white/30 border-t-white animate-[spin_3s_linear_infinite]" />
              </div>
              <span className="text-lg font-bold tracking-widest text-white uppercase">Usual</span>
              <svg
                width="12" height="8" viewBox="0 0 12 8" fill="none"
                className="text-white/50 transition-transform duration-300 group-hover:rotate-180"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-full -left-10 mt-4 hidden group-hover:block transition-all duration-300 animate-in fade-in slide-in-from-top-2">
              <div className="w-64 rounded-3xl bg-[#0a0a0a] border border-white/5 px-4 py-6 shadow-2xl backdrop-blur-xl">
                <div className="space-y-8">
                  {DROPDOWN_SECTIONS.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-white font-bold mb-2 text-sm">{section.title}</h3>
                      <div className="flex flex-col gap-3">
                        {section.links.map((link) => (
                          <Link key={link.label} href={link.href} className="text-white/60 hover:text-white transition-colors text-xs">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Socials */}
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <Link key={idx} href="#" className="h-5 w-5 flex items-center justify-center rounded-md px-3 py-4 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors w-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                          <path d={social.path} />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href="/app"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
          >
            Access App
          </Link>
        </div>
      </div>
    </nav>
  );
}