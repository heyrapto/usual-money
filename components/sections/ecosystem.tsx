import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsLayers } from "react-icons/bs";
import { SiChainlink } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbWaveSine } from "react-icons/tb";
import { ECOSYSTEM_CONTENT } from "@/constants/ecosystem";

const renderIcon = (iconName: string, className: string = "") => {
  switch (iconName) {
    case "chainlink": return <SiChainlink className={`text-blue-500 ${className}`} />;
    case "layerzero": return <BsLayers className={`text-black ${className}`} />;
    case "curve": return <TbWaveSine className={`text-blue-600 ${className}`} />;
    case "eth": return <FaEthereum className={`text-blue-400 ${className}`} />;
    case "arbitrum": return <div className={`rounded-full bg-blue-500 ${className}`} />;
    default: return <div className={`rounded-full bg-gray-300 ${className}`} />;
  }
};

export default function EcosystemSection() {
  return (
    <section className="relative pt-32 pb-60 bg-white flex justify-center overflow-hidden">
      {/* Bottom Background Image */}
      <div className="absolute bottom-0 left-0 right-0 h-[450px] w-full z-0 pointer-events-none">
        <Image
          src="/images/ecosystem/ecosystem-bg.avif"
          alt="Ecosystem Background"
          fill
          className="object-cover object-bottom opacity-100"
          priority
        />
        {/* Gradient fade from white to transparent to blend the top of the image */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <span className="headline-gradient inline-block font-medium mb-4">{ECOSYSTEM_CONTENT.headline.category}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            {ECOSYSTEM_CONTENT.headline.title}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {ECOSYSTEM_CONTENT.headline.description}
          </p>
        </div>

        {/* Cards Grid Container with Fade Effect */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM_CONTENT.cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-300 h-[200px] flex flex-col justify-between"
              >
                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <BsArrowUpRight className="text-black text-xl" />
                </div>

                <div>
                  <span className="text-xs font-medium text-black tracking-wider block mb-6">
                    {card.category}
                  </span>

                  <div className="flex items-center gap-3 mb-6">
                    {card.image ? (
                      <div className="relative h-8 w-8">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="text-2xl">
                        {renderIcon(card.icon || "")}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-black">{card.name}</h3>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Gradient Overlay for "Fading" effect on bottom cards */}
          <div
            className="
            absolute
            -bottom-20
            left-0
            right-0
            h-[300px]
            bg-gradient-to-t
            from-white
            via-white/80
            to-transparent
            pointer-events-none
            z-10
          "
          />
        </div>

        {/* Explore Link */}
        <div className="text-center mb-32 relative z-20">
          <Link href="/ecosystem" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity">
            Explore all the ecosystem <BsArrowUpRight strokeWidth={0.5} />
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pt-20 relative z-10">
          {ECOSYSTEM_CONTENT.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-6xl font-bold text-black mb-4">{stat.value}</span>
              <span className="text-gray-600 font-medium mb-6">{stat.label}</span>

              <div className="flex items-center gap-2">
                {/* Render Icons if present */}
                {stat.icons && (
                  <div className="flex -space-x-2">
                    {stat.icons.map((icon, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden z-[3] first:z-[3] last:z-[1]">
                        {renderIcon(icon, "h-4 w-4")}
                      </div>
                    ))}
                    {stat.extra && (
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 z-[0]">
                        {stat.extra}
                      </div>
                    )}
                  </div>
                )}

                {/* Render Badges if present */}
                {stat.badges && (
                  <div className="flex gap-2">
                    {stat.badges.map((badge, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                        {badge}
                      </span>
                    ))}
                    {stat.extra && (
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                        {stat.extra}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
