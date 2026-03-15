import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ABOUT_DATA = {
  name: "Gaurav Waghmare",
  role: "Full Stack Developer",
  location: "Nagpur, India",
  email: "gauravwaghmare95032@gmail.com",
  education: "3rd-year B.Tech CSE student",
  skills: "React, Node.js, TypeScript, Python, MongoDB, Socket.io, Next.js, React Native, AI/ML",
  specialization: "MERN Stack & AI-powered Web Apps",
  achievements: "Google Gemini Student Ambassador, Hackathon Development Lead & Co-organiser",
  github: "https://github.com/GauravWaghmare23",
  projects: "CodeJarvis (AI coding agent), HypeChat (real-time chat), Uber Clone (ride-hailing), AgriTrace (supply chain)",
  leetcode: "82 problems solved (65 Easy, 15 Medium, 2 Hard)",
  githubStats: "426+ contributions, longest streak of 11 days",
  about: "A full-stack developer who believes the web has become too sanitized and brings personality back to code. Currently building an AI-powered Browser IDE.",
};

type Message = { role: "user" | "assistant"; content: string };

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.match(/hi|hello|hey|sup/)) return `Hey! 👋 I'm Gaurav's AI assistant. Ask me anything about his skills, projects, or experience!`;
  if (q.match(/name|who/)) return `He's **${ABOUT_DATA.name}** — a ${ABOUT_DATA.role} based in ${ABOUT_DATA.location}. ${ABOUT_DATA.about}`;
  if (q.match(/skill|tech|stack|know/)) return `**Tech Stack:** ${ABOUT_DATA.skills}\n\n**Specialization:** ${ABOUT_DATA.specialization}`;
  if (q.match(/project|work|build|made/)) return `**Projects:**\n${ABOUT_DATA.projects.split(", ").map(p => `• ${p}`).join("\n")}\n\nCheck out his GitHub: ${ABOUT_DATA.github}`;
  if (q.match(/education|study|college|degree/)) return `📚 ${ABOUT_DATA.education}`;
  if (q.match(/contact|email|hire|reach/)) return `📧 Email: ${ABOUT_DATA.email}\n\nHe's currently **available** for opportunities!`;
  if (q.match(/leetcode|dsa|coding|problem/)) return `**LeetCode Stats:** ${ABOUT_DATA.leetcode}`;
  if (q.match(/github|contrib|commit/)) return `**GitHub:** ${ABOUT_DATA.githubStats}\n\n🔗 ${ABOUT_DATA.github}`;
  if (q.match(/achieve|award|ambassador/)) return `🏆 ${ABOUT_DATA.achievements}`;
  if (q.match(/location|where|city|from/)) return `📍 Based in **${ABOUT_DATA.location}**`;
  if (q.match(/resume|cv/)) return `You can download his resume using the **Download Resume** button in the hero section!`;

  return `I can tell you about Gaurav's **skills**, **projects**, **education**, **LeetCode stats**, **GitHub contributions**, or **contact info**. What would you like to know?`;
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Gaurav's AI assistant. Ask me about his skills, projects, experience, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const reply: Message = { role: "assistant", content: getResponse(input.trim()) };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[28rem] border-2 border-foreground bg-background flex flex-col shadow-[6px_6px_0px_hsl(var(--foreground))]"
          >
            {/* Header */}
            <div className="bg-foreground text-background px-4 py-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs font-bold">GAURAV.AI — ASK ME ANYTHING</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 font-mono text-[11px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground border border-border"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-2 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-muted px-3 py-2 font-mono text-xs border border-border focus:outline-none focus:border-primary"
              />
              <button
                onClick={send}
                className="bg-foreground text-background p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
