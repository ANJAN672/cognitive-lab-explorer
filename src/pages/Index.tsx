
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { TeamSection } from "@/components/TeamSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <TeamSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
