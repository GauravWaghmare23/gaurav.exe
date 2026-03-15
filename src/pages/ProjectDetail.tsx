import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects: Record<string, {
  title: string;
  tagline: string;
  desc: string;
  tech: string[];
  link: string;
}> = {
  codejarvis: {
    title: "CODEJARVIS",
    tagline: "AI-Powered Coding Agent",
    desc: "An AI-powered coding agent with multi-team collaboration, intelligent code suggestions, and agentic workflows for automating dev tasks.",
    tech: ["React", "Node.js", "AI/ML", "TypeScript", "Socket.io"],
    link: "https://github.com/GauravWaghmare23/CodeJarvis",
  },
  hypechat: {
    title: "HYPECHAT",
    tagline: "Real-Time Chat Application",
    desc: "A real-time chat application for mobile and web using Socket.io with instant messaging, typing indicators, and cross-platform support.",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/GauravWaghmare23/HypeChat",
  },
  "uber-clone": {
    title: "UBER CLONE",
    tagline: "Ride-Hailing Application",
    desc: "Full-stack Uber-style ride-hailing app with real-time tracking, fare calculation, JWT auth, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/GauravWaghmare23/UBER",
  },
  agritrace: {
    title: "AGRITRACE",
    tagline: "Agricultural Supply Chain Platform",
    desc: "Agricultural supply-chain platform with role-based dashboards, QR-based crop traceability, and farm-to-consumer tracking.",
    tech: ["Next.js", "TypeScript", "MongoDB", "REST API"],
    link: "https://github.com/GauravWaghmare23/Crop-Tracking-App",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">PROJECT NOT FOUND</h1>
          <button onClick={() => navigate("/")} className="font-mono text-sm underline">
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-mono text-xs font-bold hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-background font-mono text-xs font-bold px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            VIEW SOURCE <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">{project.tagline}</p>
            <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="bg-foreground text-background font-mono text-[10px] font-bold px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {project.desc}
            </p>
          </motion.div>

          {/* Placeholder sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Screenshots */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">📸 SCREENSHOTS</h2>
              <p className="font-mono text-xs text-muted-foreground">Add project screenshots and demo images here</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-muted h-48 border border-border flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground">Screenshot {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Statement */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">🎯 PROBLEM STATEMENT</h2>
              <p className="font-mono text-xs text-muted-foreground">Describe the problem this project solves</p>
            </div>

            {/* Features */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">⚡ KEY FEATURES</h2>
              <p className="font-mono text-xs text-muted-foreground">List the main features and capabilities</p>
            </div>

            {/* Architecture */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">🏗️ ARCHITECTURE</h2>
              <p className="font-mono text-xs text-muted-foreground">Add system architecture diagram and explanation</p>
            </div>

            {/* Challenges & Learnings */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">🧠 CHALLENGES & LEARNINGS</h2>
              <p className="font-mono text-xs text-muted-foreground">Share technical challenges and what you learned</p>
            </div>

            {/* Future Scope */}
            <div className="border-2 border-dashed border-border p-8 sm:p-12">
              <h2 className="font-sans text-2xl font-bold mb-2">🚀 FUTURE SCOPE</h2>
              <p className="font-mono text-xs text-muted-foreground">Describe planned features and improvements</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
