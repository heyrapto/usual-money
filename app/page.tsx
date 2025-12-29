import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CTASection from "@/components/sections/cta";
import EcosystemSection from "@/components/sections/ecosystem";
import FAQSection from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import ResourcesSection from "@/components/sections/resources";
import UpdatesSection from "@/components/sections/updates";
import WhyChooseUsSection from "@/components/sections/whychooseus";
import TradeWidget from "@/components/ui/trade-widget";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-purple-500/30">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <EcosystemSection />
      <TradeWidget />
      <FAQSection />
      <UpdatesSection />
      <CTASection />
      <ResourcesSection />
      <Footer />
    </main>
  );
}
