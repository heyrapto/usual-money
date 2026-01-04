"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PRODUCTS_CONTENT } from "@/constants/products";

export default function ProductsSection() {
    const [activeTab, setActiveTab] = useState("stablecoin");
    const [isUsdoPlus, setIsUsdoPlus] = useState(false);
    const revenueRef = useRef<HTMLDivElement>(null);

    const currentContent = isUsdoPlus ? PRODUCTS_CONTENT.busdo : PRODUCTS_CONTENT.usdo;

    // Use duplicated list for seamless loop
    const partnersList = [...PRODUCTS_CONTENT.partners.list, ...PRODUCTS_CONTENT.partners.list];

    const { scrollYProgress } = useScroll({
        target: revenueRef,
        offset: ["start start", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0.4, 1], [0, -200]);
    const xRight = useTransform(scrollYProgress, [0.4, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);

    return (
        <section className="bg-[#080808] py-32 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">

                {/* Header & Tabs */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="headline-gradient font-medium mb-4">{PRODUCTS_CONTENT.header.tag}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 whitespace-pre-line tracking-tight leading-[1.1]">
                        {PRODUCTS_CONTENT.header.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed">
                        {PRODUCTS_CONTENT.header.description}
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 bg-[#1A1A1A] p-1.5 rounded-full border border-white/10">
                        {PRODUCTS_CONTENT.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                disabled={tab.status === "coming soon"}
                                className={`
                                    px-6 py-2.5 rounded-full text-sm font-medium transition-all
                                    ${activeTab === tab.id
                                        ? "bg-[#2A2A2A] text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-300"
                                    }
                                    ${tab.status === "coming soon" ? "opacity-50 cursor-not-allowed group relative" : ""}
                                `}
                            >
                                {tab.label}
                                {tab.status === "coming soon" && (
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        Coming soon
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">

                    {/* Main Card (Left) - Dynamic Content */}
                    <div className="md:col-span-7 bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">{currentContent.mainCard.title}</h3>
                            <p className="text-gray-400 text-sm max-w-md mb-8">{currentContent.mainCard.description}</p>

                            <div className="grid grid-cols-2 gap-8">
                                {currentContent.mainCard.stats.map((stat, i) => (
                                    <div key={i}>
                                        <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">{stat.label}</span>
                                        <span className="text-2xl font-bold">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Green Toggle Card (Right) - Dynamic Content */}
                    <div className="md:col-span-5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between"
                        style={{
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}
                    >
                        {/* Background Logic */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/products/boosted-bg.avif"
                                alt="Boosted Background"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 flex flex-col h-full place-content-center items-start text-start gap-4">
                            {/* Centered layout as requested/observed in screenshots for this card */}
                            <h3 className="text-2xl font-bold">{currentContent.greenCard.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
                                {currentContent.greenCard.description}
                            </p>

                            {/* Toggle Switch */}
                            <div
                                className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1 inline-flex items-center cursor-pointer relative mt-4 overflow-hidden"
                                onClick={() => setIsUsdoPlus(!isUsdoPlus)}
                            >
                                <div
                                    className={`absolute top-1 bottom-1  bg-white/10 rounded-full transition-transform duration-300 ease-out ${isUsdoPlus ? "translate-x-[112px] w-[80px]" : "translate-x-0 w-27.5"
                                        }`}
                                />
                                <span
                                    className={`relative z-10 px-6 py-2 text-[10px] font-bold tracking-wider transition-colors duration-300 cursor-pointer ${!isUsdoPlus ? "text-white" : "text-gray-500"
                                        }`}
                                >
                                    STRATEGY
                                </span>

                                <span
                                    className={`relative z-10 px-6 py-2 text-[10px] font-bold tracking-wider transition-colors duration-300 cursor-pointer ${isUsdoPlus ? "text-white" : "text-gray-500"
                                        }`}
                                >
                                    AI VAULT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid - Dynamic Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-0 relative z-10">
                    {currentContent.features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="bg-[#111] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors group h-[350px] flex flex-col justify-start w-full">
                                <div className="w-30 h-30 relative mb-6">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h4 className="text-lg font-bold mb-3 group-hover:text-gray-200 transition-colors">{feature.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Handle below each card */}
                            <div className="relative w-full h-64 -mt-14 pointer-events-none z-0">
                                <Image
                                    src={i === 0 ? "/images/products/left-image.avif" : i === 1 ? "/images/products/middle-image.avif" : "/images/products/right-image.avif"}
                                    alt="connection handle"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners Section ("Built on Stability") */}
                <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden h-[300px] -mt-14"> {/* Fixed height for scroll masking */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 h-full">
                        <div className="max-w-md h-full flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 whitespace-pre-line">
                                {PRODUCTS_CONTENT.partners.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {PRODUCTS_CONTENT.partners.description}
                            </p>
                        </div>

                        <div className="w-full max-w-sm h-full relative overflow-hidden mask-vertical-fade">
                            {/* Vertical Scrolling Container */}
                            <div className="absolute top-0 left-0 w-full animate-scroll-vertical-fast flex flex-col gap-6 pb-6">
                                {partnersList.map((partner, i) => (
                                    <div key={i} className="flex items-center gap-4 group flex-shrink-0 h-[30px]"> {/* Fixed item height for consistent spacing */}
                                        <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">{partner.name}</span>
                                        {partner.name === "ONDO" && (
                                            <span className="bg-[#1A1A1A] border border-white/10 text-xs px-2 py-0.5 rounded-full text-gray-500 ml-auto">Coming soon</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subtle Background Mesh/Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "30px 30px"
                        }}
                    />
                </div>

                {/* Bottom Connection below Partners */}
                <div className="relative w-full flex flex-col items-center pointer-events-none z-0">
                    <div className="relative w-full max-w-5xl h-64">
                        <Image
                            src="/images/products/bottom-handle-image.avif"
                            alt="Bottom Branch"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Revenue-Based Token Section */}
                <div ref={revenueRef} className="relative px-4 overflow-hidden ">
                    {/* Background Grid & Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at center, rgba(160, 118, 249, 0.15) 0%, transparent 70%)`,
                            }}
                        />
                        <div className="absolute inset-0"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px',
                                perspective: '1000px',
                                transform: 'rotateX(60deg) translateY(-100px)',
                                transformOrigin: 'top'
                            }}
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full">

                            {/* Left Stats */}
                            <motion.div
                                className="flex flex-col gap-12 lg:text-right order-2 lg:order-1"
                                style={{
                                    x: xLeft,
                                    opacity
                                }}
                            >
                                {PRODUCTS_CONTENT.revenue.stats.filter(s => s.position === "left").map((stat, i) => (
                                    <div key={stat.label} className="group cursor-default">
                                        <span className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-2 block">{stat.label}</span>
                                        <span className="text-2xl font-bold text-white group-hover:text-[#a076f9] transition-colors">{stat.value}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Central Image/Graphic */}
                            <div className="relative w-full aspect-square max-w-[400px] mx-auto order-1 lg:order-2">
                                <div className="absolute inset-0 bg-[#a076f9]/20 blur-[100px] rounded-full animate-pulse" />
                                <Image
                                    src={PRODUCTS_CONTENT.revenue.centralImage}
                                    alt="Revenue-Based Token"
                                    fill
                                    className="object-contain relative z-10"
                                />
                            </div>

                            {/* Right Stats */}
                            <motion.div
                                className="flex flex-col gap-12 lg:text-left order-3"
                                style={{
                                    x: xRight,
                                    opacity
                                }}
                            >
                                {PRODUCTS_CONTENT.revenue.stats.filter(s => s.position === "right").map((stat, i) => (
                                    <div key={stat.label} className="group cursor-default">
                                        <span className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-2 block">{stat.label}</span>
                                        <span className="text-2xl font-bold text-white group-hover:text-[#a076f9] transition-colors">{stat.value}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Text Content Below */}
                        <div className="mt-16 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line leading-tight">
                                {PRODUCTS_CONTENT.revenue.title}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                                {PRODUCTS_CONTENT.revenue.description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all group">
                                Learn more
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .mask-vertical-fade {
                    mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
                }
                @keyframes scroll-vertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-scroll-vertical-fast {
                    animation: scroll-vertical 20s linear infinite;
                }
            `}</style>
        </section >
    );
}