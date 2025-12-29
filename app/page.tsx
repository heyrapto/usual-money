import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CTASection from "@/components/sections/cta";
import EcosystemSection from "@/components/sections/ecosystem";
import FAQSection from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import ProductsSection from "@/components/sections/products";
import ResourcesSection from "@/components/sections/resources";
import UpdatesSection from "@/components/sections/updates";
import WhyChooseUsSection from "@/components/sections/whychooseus";
import TradeWidget from "@/components/ui/trade-widget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <EcosystemSection />
      <UpdatesSection />
      <ResourcesSection />
      <TradeWidget />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
