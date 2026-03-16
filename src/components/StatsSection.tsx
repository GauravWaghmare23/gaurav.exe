import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section id="stats" className="terminal-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-10 sm:mb-12">
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">
              CODING_<span className="text-terminal-green">STATS</span>
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse-dot" />
              <span className="font-mono text-xs text-terminal-green">● LIVE</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {/* GitHub Card */}
          <AnimatedSection>
            <motion.div whileHover={{ scale: 1.01 }} className="border border-terminal-border p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <span className="text-terminal-green">◉</span>
                <span className="font-mono font-bold text-base sm:text-lg">GITHUB</span>
              </div>

              <div className="border border-terminal-border p-3 sm:p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-mono font-bold text-sm sm:text-base">GauravWaghmare23</p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">FULL STACK DEV</p>
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-terminal-green">364+</span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="border border-terminal-border p-2 sm:p-3">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">CONTRIBUTIONS</p>
                    <p className="font-mono text-xl sm:text-2xl font-bold">364</p>
                  </div>
                  <div className="border border-terminal-border p-2 sm:p-3">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">CURRENT STREAK</p>
                    <p className="font-mono text-xl sm:text-2xl font-bold">22</p>
                  </div>
                  <div className="border border-terminal-border p-2 sm:p-3">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">LONGEST STREAK</p>
                    <p className="font-mono text-xl sm:text-2xl font-bold">21</p>
                  </div>
                  <div className="border border-terminal-border p-2 sm:p-3">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">JOINED</p>
                    <p className="font-mono text-xl sm:text-2xl font-bold">2024</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-muted-foreground">
                <span>$ gh --stats _</span>
                <a
                  href="https://github.com/GauravWaghmare23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-terminal-green text-terminal-green px-3 py-1 hover:bg-terminal-green hover:text-terminal-dark transition-colors"
                >
                  VIEW_GH →
                </a>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* LeetCode Card */}
          <AnimatedSection delay={0.15}>
            <motion.div whileHover={{ scale: 1.01 }} className="border border-terminal-border p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <span className="text-primary">◉</span>
                <span className="font-mono font-bold text-base sm:text-lg">LEETCODE</span>
              </div>

              <div className="border border-terminal-border p-3 sm:p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-mono font-bold text-sm sm:text-base">Gaurav_Waghmare</p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">PROBLEM SOLVER</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-8 mb-4">
                  <div className="text-center">
                    <p className="font-mono text-3xl sm:text-4xl font-bold text-primary">105</p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">SOLVED</p>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between font-mono text-[10px] sm:text-xs">
                      <span className="text-terminal-green">Easy</span>
                      <span>72 / 929</span>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] sm:text-xs">
                      <span className="text-primary">Medium</span>
                      <span>28 / 2018</span>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] sm:text-xs">
                      <span className="text-destructive">Hard</span>
                      <span>5 / 912</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GFG Stats */}
              <div className="border border-terminal-border p-3 sm:p-4 mb-4">
                <p className="font-mono font-bold text-xs sm:text-sm mb-3">GEEKSFORGEEKS</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="border border-terminal-border p-2">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">CODING SCORE</p>
                    <p className="font-mono text-lg sm:text-xl font-bold">36</p>
                  </div>
                  <div className="border border-terminal-border p-2">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">PROBLEMS SOLVED</p>
                    <p className="font-mono text-lg sm:text-xl font-bold">18</p>
                  </div>
                  <div className="border border-terminal-border p-2">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">INSTITUTE RANK</p>
                    <p className="font-mono text-lg sm:text-xl font-bold">#11</p>
                  </div>
                  <div className="border border-terminal-border p-2">
                    <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground">BIO</p>
                    <p className="font-mono text-[10px] sm:text-xs">Always a learner</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-muted-foreground">
                <span>$ leetcode --p _</span>
                <div className="flex gap-2">
                  <a
                    href="https://www.geeksforgeeks.org/user/gauravwaghmare23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-terminal-green text-terminal-green px-3 py-1 hover:bg-terminal-green hover:text-terminal-dark transition-colors"
                  >
                    VIEW_GFG →
                  </a>
                  <a
                    href="https://leetcode.com/u/Gaurav_Waghmare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-terminal-green text-terminal-green px-3 py-1 hover:bg-terminal-green hover:text-terminal-dark transition-colors"
                  >
                    VIEW_LC →
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
