import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { UPDATES_CONTENT } from "@/constants/updates";

export default function UpdatesSection() {
    return (
        <section className="bg-black py-32 text-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-purple-500 font-medium mb-4 uppercase tracking-wider text-sm">
                        {UPDATES_CONTENT.headline.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {UPDATES_CONTENT.headline.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-[600px] mx-auto">
                        {UPDATES_CONTENT.headline.description}
                    </p>
                </div>

                {/* Featured Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {UPDATES_CONTENT.featured.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="group relative block rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 aspect-[16/9] hover:border-white/20 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.date}</p>
                            </div>

                            {/* Tag */}
                            {index === 1 && (
                                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-white/70">Vault Announcement</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* List View */}
                <div className="grid gap-4 mb-20">
                    {UPDATES_CONTENT.list.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="group bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <BsArrowRight className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" size={24} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="text-center">
                    <Link
                        href={UPDATES_CONTENT.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors"
                    >
                        {UPDATES_CONTENT.cta.text} <BsArrowRight />
                    </Link>
                </div>

            </div>
        </section>
    );
}