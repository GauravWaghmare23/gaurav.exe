import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen grid-bg flex flex-col items-center justify-center relative pt-16 px-4 sm:px-6">
      {/* Floating shapes */}
      <div className="absolute left-[10%] top-[30%] w-8 h-8 sm:w-10 sm:h-10 bg-accent animate-float" />
      <div className="absolute right-[8%] top-[55%] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/30 animate-float-delayed" />

      {/* Faded "CODE" text */}
      <div className="absolute right-[5%] top-[20%] text-[8rem] font-sans font-bold text-foreground/5 select-none hidden lg:block">
        CODE
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-foreground px-4 py-1.5 flex items-center gap-2 mb-6 sm:mb-8"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-dot" />
        <span className="font-mono text-[10px] sm:text-xs font-medium tracking-wider">SYSTEM STATUS: ONLINE</span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <span className="block font-sans font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
          FULL STACK
        </span>
        <span className="block font-sans font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-outline">
          DEVELOPER
        </span>
      </motion.h1>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 sm:mt-8 bg-primary px-4 sm:px-6 py-3 max-w-lg text-center"
      >
        <p className="font-mono text-xs sm:text-sm text-primary-foreground">
          I build digital products that refuse to be boring.
        </p>
        <p className="font-mono text-xs sm:text-sm text-primary-foreground mt-1">
          React • Node.js • TypeScript • Python
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0"
      >
        <a
          href="https://github.com/GauravWaghmare23"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background font-mono text-xs font-bold px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-foreground text-center"
        >
          VIEW GITHUB
        </a>
        <a
          href="mailto:gauravwaghmare95032@gmail.com"
          className="bg-background text-foreground font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors text-center"
        >
          ✉ CONTACT ME
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-accent text-accent-foreground font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors text-center flex items-center justify-center gap-2"
        >
          <Download className="w-3.5 h-3.5" />
          DOWNLOAD RESUME
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
