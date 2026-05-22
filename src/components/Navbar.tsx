import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "SKILLS", id: "tech-stack" },
  { label: "PROJECTS", id: "projects" },
  { label: "HACK", id: "hack" },
  { label: "BLOGS", id: "blogs" },
  { label: "STATS", id: "stats" },
  { label: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <div 
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="border border-foreground px-3 py-1 font-mono font-bold text-sm cursor-pointer hover:bg-foreground hover:text-background transition-colors"
        >
          GAURAV.exe
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="font-mono text-xs px-3 py-1.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              /{item.label}
            </button>
          ))}
          <div className="ml-2"><ThemeToggle /></div>
          <a
            href="mailto:gauravwaghmare95032@gmail.com"
            className="ml-2 border-2 border-foreground bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="block w-full text-left font-mono text-sm px-3 py-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  /{item.label}
                </button>
              ))}
              <a
                href="mailto:gauravwaghmare95032@gmail.com"
                className="block text-center mt-3 border-2 border-foreground bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
