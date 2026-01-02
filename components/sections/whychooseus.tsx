import { WHY_CHOOSE_US_CONTENT } from "@/constants/whychooseus";

export default function WhyChooseUsSection() {
    return (
        <section className="relative py-32 bg-white flex justify-center overflow-hidden">
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container relative z-10 mx-auto px-4 max-w-[900px] text-center">
                <span className="headline-gradient inline-block font-medium mb-4">Why Usual</span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-12 leading-tight">
                    {WHY_CHOOSE_US_CONTENT.headline.prefix}{" "} <br />
                    <span className="relative inline-block mx-2 text-gray-400 decoration-2 decoration-gray-400 line-through">
                        {WHY_CHOOSE_US_CONTENT.headline.strikethrough}
                    </span>{" "}
                    <span className="text-black">{WHY_CHOOSE_US_CONTENT.headline.suffix}</span>
                </h2>

                <div className="space-y-8 max-w-[750px] mx-auto">
                    {WHY_CHOOSE_US_CONTENT.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`text-gray-600 leading-relaxed ${index === 1 ? "font-medium text-black text-lg" : "text-base md:text-lg"}`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-6 w-6 rounded-full border-2 border-black flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full border border-black/30 border-t-black animate-[spin_3s_linear_infinite]" />
                        </div>
                        <span className="text-xl font-bold tracking-widest text-black uppercase">Usual</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
