import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText } from "lucide-react";

const typingTexts = [
  "CI/CD Automation Enthusiast",
  "AWS & Cloud Practitioner",
  "Docker & Terraform Explorer",
  "Hackathon Winner",
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-primary font-mono text-sm mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              👋 Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              Pavan <span className="text-gradient">Mali</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              DevOps Engineer | Full Stack Web Developer
            </p>

            {/* Typing animation */}
            <div className="font-mono text-primary text-lg mb-8 h-8 flex items-center">
              <span className="text-muted-foreground mr-2">{">"}</span>
              <span>{typingTexts[textIndex].slice(0, charIndex)}</span>
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-typing-cursor border-r-2 border-primary" />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="/Pavan_Mali_Resume_DevOps.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all hover:gap-3 border border-border/50"
              >
                <FileText size={16} />
                Preview Resume
              </a>
              <a
                href="https://www.linkedin.com/in/pavan-mali-1808b6273/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-110 border border-border/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/PAVAN2627"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-110 border border-border/50"
                aria-label="GitHub Profile - PAVAN2627"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Photo with 3D animated frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Outer animated ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl animate-pulse-glow group-hover:opacity-40 transition-opacity" />
              
              {/* Spinning border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-60" style={{ animationDuration: "8s" }} />
              
              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/ProffesionalPhoto.jpeg"
                  alt="Pavan Mali - DevOps Engineer & Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-card shadow-lg border border-border flex items-center justify-center"
              >
                <span className="text-lg">🐳</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 w-12 h-12 rounded-xl bg-card shadow-lg border border-border flex items-center justify-center"
              >
                <span className="text-lg">☁️</span>
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-6 w-10 h-10 rounded-lg bg-card shadow-lg border border-border flex items-center justify-center"
              >
                <span className="text-sm">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
