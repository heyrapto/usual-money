
"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS_CONTENT } from "@/constants/products";
import { FiChevronRight } from "react-icons/fi";

export default function ProductsSection() {
    const [activeTab, setActiveTab] = useState("stablecoin");
    const [isUsdoPlus, setIsUsdoPlus] = useState(false);

    // Determine content based on toggle state
    // If isUsdoPlus is true, show "bUSDO" (busdo content), else "USDO" (usdo content)
    const currentContent = isUsdoPlus ? PRODUCTS_CONTENT.busdo : PRODUCTS_CONTENT.usdo;

    return (
        <section className="bg-black py-32 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">

                {/* Header & Tabs */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-[#a076f9] font-medium mb-4">{PRODUCTS_CONTENT.header.tag}</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 whitespace-pre-line tracking-tight leading-[1.1]">
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

                        {/* Background Image / Decoration */}
                        <div className="absolute top-1/2 right-[-50px] md:right-[-100px] -translate-y-1/2 w-[300px] h-[300px] opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                            <Image
                                src={currentContent.mainCard.image}
                                alt="USDO"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Green Toggle Card (Right) - Dynamic Content */}
                    <div className="md:col-span-5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between"
                        style={{
                            background: "radial-gradient(120% 120% at 50% 120%, #1e4530 0%, #0d1f14 50%, #000000 100%)",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}
                    >
                        <div className="relative z-10 flex flex-col h-full place-content-center items-center text-center gap-4">
                            {/* Centered layout as requested/observed in screenshots for this card */}
                            <h3 className="text-2xl font-bold">{currentContent.greenCard.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
                                {currentContent.greenCard.description}
                            </p>

                            {/* Toggle Switch */}
                            <div
                                className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1 inline-flex items-center cursor-pointer relative mt-4"
                                onClick={() => setIsUsdoPlus(!isUsdoPlus)}
                            >
                                {/* Animated Background Pill */}
                                <div className={`absolute top-1 bottom-1 w-[80px] bg-white/10 rounded-full transition-transform duration-300 ease-out ${isUsdoPlus ? "translate-x-[82px]" : "translate-x-0"}`}></div>

                                <span className={`relative z-10 px-6 py-2 text-[10px] font-bold tracking-wider transition-colors duration-300 ${!isUsdoPlus ? "text-white" : "text-gray-500"}`}>
                                    USDO
                                </span>
                                <span className={`relative z-10 px-6 py-2 text-[10px] font-bold tracking-wider transition-colors duration-300 ${isUsdoPlus ? "text-white" : "text-gray-500"}`}>
                                    USD0++
                                </span>
                            </div>
                        </div>

                        {/* Green Glow Effect */}
                        <div className="absolute inset-0 bg-green-500/5 pointer-events-none"></div>
                    </div>
                </div>

                {/* Features Grid - Dynamic Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-0 relative z-10">
                    {currentContent.features.map((feature, i) => (
                        <div key={i} className="bg-[#111] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors group min-h-[250px] flex flex-col justify-start">
                            <div className="w-16 h-16 relative mb-6">
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
                    ))}
                </div>

                {/* Connecting Handle */}
                <div className="relative w-full h-[100px] md:h-[150px] flex justify-center -mt-6 -mb-6 pointer-events-none z-0">
                    <div className="w-full max-w-[800px] h-full relative opacity-50">
                        <Image
                            src={PRODUCTS_CONTENT.partners.bottomImage}
                            alt="Connection"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Partners Section ("Built on Stability") */}
                <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="max-w-md">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 whitespace-pre-line">
                                {PRODUCTS_CONTENT.partners.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {PRODUCTS_CONTENT.partners.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 w-full max-w-sm">
                            {PRODUCTS_CONTENT.partners.list.map((partner, i) => (
                                <div key={i} className="flex items-center gap-4 group">
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

                    {/* Subtle Background Mesh/Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "30px 30px"
                        }}
                    />
                </div>

            </div>
        </section>
    );
}