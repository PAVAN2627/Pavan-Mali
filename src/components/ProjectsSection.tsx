import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CI/CD Pipeline for Web Application",
    tech: ["Jenkins", "Docker", "AWS EC2", "GitHub", "Linux"],
    description:
      "Automated build, test, Docker image creation, and deployment pipeline triggered by GitHub commits.",
    github: "https://github.com/PAVAN2627/cicd-assignmenet",
  },
  {
    title: "Infrastructure as Code using Terraform",
    tech: ["Terraform", "AWS"],
    description:
      "Provisioned AWS infrastructure using reusable Terraform configurations.",
    github: "https://github.com/PAVAN2627/terraform-assignment",
  },
  {
    title: "RoomBridge – Smart Roommate Matching",
    tech: ["React 18", "TypeScript", "Firebase", "Tailwind", "Gemini AI"],
    description:
      "Full-stack roommate matching platform with AI compatibility scoring and real-time chat.",
    github: "https://github.com/PAVAN2627/RoomBridge",
  },
  {
    title: "HackMates – Hackathon Platform",
    tech: ["React 18", "TypeScript", "Firebase", "Tailwind", "Gemini AI"],
    description:
      "AI-powered hackathon discovery and team formation platform.",
    github: "https://github.com/PAVAN2627/HackMates",
  },
  {
    title: "Devnovate X HackWithIndia",
    tech: ["React", "Supabase", "PostgreSQL", "Tailwind"],
    description:
      "Real-time hackathon collaboration platform.",
    github: "https://github.com/PAVAN2627/DevnovateXHackWithIndia",
  },
  {
    title: "CareerAdvisor – AI Career Platform",
    tech: ["PHP", "MySQL", "Vertex AI"],
    description:
      "AI-driven career guidance and skill-gap analysis system.",
    github: "https://github.com/PAVAN2627/CareerAdvisor",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Things I've built and contributed to</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border p-6 project-card-hover devops-card flex flex-col group"
            >
              {/* Project header with icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-xl">📦</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-base leading-snug">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md badge-glow border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                <Github size={14} />
                View Repository
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
