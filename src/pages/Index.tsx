import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackTerminalSection from "@/components/HackTerminalSection";
import BlogsSection from "@/components/BlogsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <TechStackSection />
      <ProjectsSection />
      <HackTerminalSection />
      <BlogsSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
