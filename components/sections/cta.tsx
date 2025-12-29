import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { CTA_CONTENT } from "@/constants/cta";
import { FaCheckCircle } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-black pb-32 pt-10 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 md:gap-24 relative overflow-hidden">

          {/* Background Grid Pattern (Subtle) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50"
            style={{ backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          {/* Left Content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Governed by you <br />
              and +10,000 more stakers
            </h2>
            <p className="text-gray-500 mb-10 max-w-[400px] leading-relaxed">
              {CTA_CONTENT.headline.description}
            </p>
            <Link
              href={CTA_CONTENT.headline.linkHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity"
            >
              {CTA_CONTENT.headline.linkText} <BsArrowUpRight strokeWidth={1} />
            </Link>
          </div>

          {/* Right Card */}
          <div className="flex-1 relative z-10">
            <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex-1">
                <span className="text-xs font-bold text-black uppercase tracking-wider mb-2 block">{CTA_CONTENT.card.tag}</span>
                <h3 className="text-xl font-bold text-black mb-12">{CTA_CONTENT.card.title}</h3>

                <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" /> {/* Status dot */}
                  {CTA_CONTENT.card.status}
                </div>
              </div>
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={CTA_CONTENT.card.image}
                  alt="Proposal Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}