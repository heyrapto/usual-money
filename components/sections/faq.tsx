"use client"

import { useState } from "react";
import { FAQ_CONTENT } from "@/constants/faq";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-32">
            <div className="container mx-auto px-4 max-w-[800px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-purple-500 font-medium mb-4 uppercase tracking-wider text-sm">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                        {FAQ_CONTENT.headline.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-[500px] mx-auto">
                        {FAQ_CONTENT.headline.description}
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-0">
                    {FAQ_CONTENT.questions.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 last:border-0"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                            >
                                <span className="text-sm font-bold text-black group-hover:text-gray-700 transition-colors">
                                    {item.question}
                                </span>
                                <span className={`text-black transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    <FiChevronDown size={20} />
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-500 leading-relaxed text-xs md:text-base">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-12 border-t border-gray-100 pt-8">
                    <Link
                        href={FAQ_CONTENT.cta.href}
                        className="flex items-center justify-between w-full text-black font-bold group hover:text-gray-600 transition-colors"
                    >
                        <span>{FAQ_CONTENT.cta.text}</span>
                        <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}