import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkflowSection from "@/components/WorkflowSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CareerTimeline from "@/components/CareerTimeline";
import DashboardPreview from "@/components/DashboardPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ArchitectureSection />
        <CareerTimeline />
        <DashboardPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;