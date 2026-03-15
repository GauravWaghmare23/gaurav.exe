import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import AIChatWidget from "@/components/AIChatWidget";

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
      <BlogsSection />
      <StatsSection />
      <ContactSection />
      <AIChatWidget />
    </div>
  );
};

export default Index;
