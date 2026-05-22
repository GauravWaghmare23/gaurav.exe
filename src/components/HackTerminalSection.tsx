import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Line = { prompt?: string; text: string; color?: string; delay?: number };

const bootSequence: Line[] = [
  { text: "$ ssh gaurav@portfolio.exe --verbose", color: "text-terminal-green" },
  { text: "» Establishing secure tunnel...", color: "text-muted-foreground" },
  { text: "» Handshake [OK] · TLS 1.3 · Latency 12ms", color: "text-muted-foreground" },
  { text: "» ACCESS GRANTED — root@gaurav.exe", color: "text-terminal-green" },
  { text: "" },
  { text: "$ whoami --full", color: "text-terminal-green" },
  { text: "Gaurav Waghmare · Full Stack + AI Engineer · IN", color: "" },
  { text: "" },
  { text: "$ cat /etc/identity.json", color: "text-terminal-green" },
  { text: '  "role"      : "MERN + AI Developer",', color: "text-muted-foreground" },
  { text: '  "focus"     : ["Agentic AI", "Real-time Systems"],', color: "text-muted-foreground" },
  { text: '  "available" : true,', color: "text-muted-foreground" },
  { text: '  "coffee"    : "infinite"', color: "text-muted-foreground" },
  { text: "" },
  { text: "$ scan --target=skills --depth=max", color: "text-terminal-green" },
  { text: "[██████████] 100% · 24 modules indexed", color: "text-terminal-green" },
  { text: "" },
  { text: "$ uptime", color: "text-terminal-green" },
  { text: "system online · streak 22 days · 364 contributions YTD", color: "" },
];

const intel = [
  { k: "STATUS", v: "OPERATIONAL", c: "text-terminal-green" },
  { k: "LOCATION", v: "Pune, IN", c: "" },
  { k: "STACK", v: "MERN · AI · Cloud", c: "" },
  { k: "RESPONSE", v: "< 24h", c: "text-terminal-green" },
  { k: "PROJECTS", v: "12+ shipped", c: "" },
  { k: "MISSION", v: "Build > Ship > Iterate", c: "text-primary" },
];

const matrixChars = "01ガウラブAI{}<>/$#*";

const HackTerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStarted(true),
      { threshold: 0.2 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visibleLines >= bootSequence.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 180);
    return () => clearTimeout(t);
  }, [visibleLines, started]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleLines]);

  // matrix rain columns
  const cols = Array.from({ length: 14 });

  return (
    <section id="hack" ref={sectionRef} className="terminal-bg py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden reveal-on-scroll">
      {/* matrix rain background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex justify-between">
        {cols.map((_, i) => (
          <div key={i} className="flex flex-col gap-1 font-mono text-xs text-terminal-green animate-float" style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${4 + (i % 4)}s` }}>
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j}>{matrixChars[(i + j) % matrixChars.length]}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 sm:mb-12">
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">
              SYS_<span className="text-terminal-green">ACCESS</span>
            </h2>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse-dot" />
              <span className="text-destructive">● UNAUTHORIZED</span>
              <span className="text-muted-foreground">→</span>
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse-dot" />
              <span className="text-terminal-green">● BREACH OK</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border border-terminal-border bg-black/40 backdrop-blur-sm"
          >
            {/* title bar */}
            <div className="flex items-center justify-between border-b border-terminal-border px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">root@gaurav.exe — /bin/zsh — 80x24</span>
              <span className="font-mono text-[10px] text-terminal-green">● rec</span>
            </div>
            {/* lines */}
            <div ref={scrollRef} className="p-4 sm:p-6 font-mono text-[11px] sm:text-xs h-[360px] sm:h-[420px] overflow-y-auto leading-relaxed">
              {bootSequence.slice(0, visibleLines).map((l, i) => (
                <div key={i} className={l.color || "text-foreground/90"}>
                  {l.text || "\u00A0"}
                </div>
              ))}
              {visibleLines < bootSequence.length && (
                <span className="inline-block w-2 h-4 bg-terminal-green animate-pulse-dot align-middle" />
              )}
              {visibleLines >= bootSequence.length && (
                <div className="text-terminal-green flex items-center gap-1">
                  $ <span className="inline-block w-2 h-4 bg-terminal-green animate-pulse-dot" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Intel panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border border-terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono font-bold text-sm">// INTEL</span>
              <span className="font-mono text-[10px] text-terminal-green">CLASSIFIED</span>
            </div>
            <div className="space-y-3">
              {intel.map((i, idx) => (
                <motion.div
                  key={i.k}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="flex items-center justify-between border-b border-terminal-border/50 pb-2"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">{i.k}</span>
                  <span className={`font-mono text-xs font-bold ${i.c}`}>{i.v}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 border border-terminal-green/40 p-3">
              <p className="font-mono text-[10px] text-terminal-green mb-1">$ ping availability</p>
              <p className="font-mono text-[10px] text-muted-foreground">64 bytes from gaurav: time=0ms</p>
              <p className="font-mono text-[10px] text-muted-foreground">64 bytes from gaurav: time=0ms</p>
              <a
                href="mailto:gauravwaghmare95032@gmail.com"
                className="mt-3 inline-block border border-terminal-green text-terminal-green font-mono text-[10px] px-3 py-1.5 hover:bg-terminal-green hover:text-terminal-dark transition-colors"
              >
                INITIATE_CONTACT →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HackTerminalSection;