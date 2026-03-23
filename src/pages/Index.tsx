import CircuitBackground from "@/components/CircuitBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthoritySection from "@/components/AuthoritySection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <CircuitBackground />
      <Header />
      <HeroSection />
      <SectionDivider />
      <div className="bg-muted/40">
        <ProblemsSection />
      </div>
      <SectionDivider />
      <SolutionSection />
      <SectionDivider />
      <BeforeAfterSection />
      <SectionDivider />
      <div className="bg-muted/40">
        <MethodSection />
      </div>
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <div className="bg-muted/40">
        <SocialProofSection />
      </div>
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <div className="bg-muted/40">
        <AuthoritySection />
      </div>
      <SectionDivider />
      <div className="bg-muted/40">
        <FaqSection />
      </div>
      <SectionDivider />
      <FinalCtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
