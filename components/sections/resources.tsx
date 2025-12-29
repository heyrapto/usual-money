import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { RESOURCES_CONTENT } from "@/constants/resources";

export default function ResourcesSection() {
    return (
        <section className="bg-black pb-32 pt-10 text-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-purple-500 font-medium mb-4 uppercase tracking-wider text-sm">
                        {RESOURCES_CONTENT.headline.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {RESOURCES_CONTENT.headline.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-[500px] mx-auto text-sm md:text-base">
                        {RESOURCES_CONTENT.headline.description}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {RESOURCES_CONTENT.cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 h-[400px] flex flex-col"
                        >
                            {/* Image Top Half */}
                            <div className="relative h-1/2 w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                            </div>

                            {/* Content Bottom Half */}
                            <div className="flex-1 p-8 flex flex-col justify-end">
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    {card.description}
                                </p>

                                <Link
                                    href={card.linkHref}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors"
                                >
                                    {card.linkText} <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}