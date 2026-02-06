import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioShell from "@/components/layout/PortfolioShell";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AISynergySection from "@/components/sections/AISynergySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <AISynergySection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </PortfolioShell>
  );
}
