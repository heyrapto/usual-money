import { HERO_ICONS, HERO_STATS, PARTNERS } from "@/constants/hero";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-[80px] pb-40 overflow-hidden bg-black flex items-center justify-center">
      <div className="container relative z-10 mx-auto px-4 max-w-[1200px] mt-[150px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="flex-1 max-w-[650px]">
            <h1 className="text-5xl lg:text-[3.3rem] font-bold text-white leading-[1.1] mb-8">
              Autonomous <br />
              trading Decentralized <br />
              for crypto{" "}
              <span className="inline-flex items-center align-middle -mt-2">
                <span className="relative flex items-center -space-x-4">
                  {HERO_ICONS.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon.src}
                      alt={icon.alt}
                      width={48}
                      height={48}
                      className={`${icon.zIndex} h-10 w-10 md:h-10 md:w-10`}
                    />
                  ))}
                </span>
              </span>{" "}
              markets
            </h1>
            <p className="text-lg text-white/50  mb-12 leading-relaxed">
              A decentralized AI that captures DeFi opportunities, automates strategies, and returns value to the community.
            </p>

            <Link
              href="/app"
              className="group relative inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 pl-4 pr-8 py-3 text-lg font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
              </span>
              Access app
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-4/3 max-w-[900px] mx-auto scale-130 z-10">
              <Image
                src="/images/hero/right-img.png"
                alt="Dashboard Visualization"
                fill
                priority
                className="object-contain"
              />

              {/* Overlayed Stats */}
              <div className="absolute inset-0 pointer-events-none text-white font-medium">
                {/* TVL */}
                <div className="absolute top-[13%] left-[39%] text-xl font-bold">
                  {HERO_STATS.tvl}
                </div>

                {/* Revenue */}
                <div className="absolute top-[26%] left-[39%] text-sm">
                  {HERO_STATS.revenue}
                </div>

                {/* Staking APY */}
                <div className="absolute top-[40%] left-[39%] text-sm">
                  {HERO_STATS.stakingApy}
                </div>

                {/* Locking APY */}
                <div className="absolute top-[40%] left-[52%] text-sm">
                  {HERO_STATS.lockingApy}
                </div>

                {/* Redistributed */}
                <div className="absolute bottom-[40%] left-[37.5%] text-xs">
                  {HERO_STATS.redistributed}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Partners Footer */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center grayscale opacity-40">
        <div className="flex items-center gap-10 md:gap-16 px-4 flex-wrap justify-center">
          {PARTNERS.map((partner) => (
            <span key={partner.name} className={`${partner.className} text-white/80`}>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}