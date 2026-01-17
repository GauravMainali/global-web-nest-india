import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <ClientsMarquee />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
