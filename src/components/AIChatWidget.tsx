import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAkbDc05RCzipKc-HzW1ldr1RvvXFzbypM");

const SYSTEM_PROMPT = `You are Gaurav Waghmare's AI portfolio assistant. Answer questions about him based on this info:

- Name: Gaurav Waghmare
- Role: Full Stack Developer
- Location: Nagpur, India
- Email: gauravwaghmare95032@gmail.com
- Education: 3rd-year B.Tech CSE student
- Skills: React, Node.js, TypeScript, Python, MongoDB, Socket.io, Next.js, React Native, AI/ML
- Specialization: MERN Stack & AI-powered Web Apps
- Achievements: Google Gemini Student Ambassador, Hackathon Development Lead & Co-organiser
- GitHub: https://github.com/GauravWaghmare23 (426+ contributions, longest streak 11 days)
- LeetCode: 82 problems solved (65 Easy, 15 Medium, 2 Hard)
- Projects:
  1. CodeJarvis - AI-powered coding agent with multi-team collaboration (React, Node.js, AI/ML, TypeScript, Socket.io)
  2. HypeChat - Real-time chat app for mobile and web (React Native, Node.js, Socket.io, MongoDB)
  3. Uber Clone - Full-stack ride-hailing app with real-time tracking (React, Node.js, MongoDB, Socket.io)
  4. AgriTrace - Agricultural supply-chain platform with QR traceability (Next.js, TypeScript, MongoDB, REST API)
- About: A full-stack developer who believes the web has become too sanitized and brings personality back to code. Currently building an AI-powered Browser IDE.
- Status: Available for hire

Keep answers concise, friendly, and professional. If asked something unrelated to Gaurav, politely redirect.`;

type Message = { role: "user" | "assistant"; content: string };

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Gaurav's AI assistant. Ask me anything about his skills, projects, experience, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const history = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood! I'm ready to answer questions about Gaurav." }] },
          ...history,
        ],
      });

      const result = await chat.sendMessage(userMsg.content);
      const reply = result.response.text();
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[28rem] border-2 border-foreground bg-background flex flex-col shadow-[6px_6px_0px_hsl(var(--foreground))]"
          >
            <div className="bg-foreground text-background px-4 py-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs font-bold">GAURAV.AI — ASK ME ANYTHING</span>
            </div>

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
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground border border-border px-3 py-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border p-2 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-muted px-3 py-2 font-mono text-xs border border-border focus:outline-none focus:border-primary"
                disabled={isLoading}
              />
              <button
                onClick={send}
                disabled={isLoading}
                className="bg-foreground text-background p-2 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
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
