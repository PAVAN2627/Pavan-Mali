import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Marathwada Mitra Mandal's College of Engineering, Pune",
    year: "2027 (Pursuing)",
    degree: "B.E. – Information Technology",
    score: "CGPA: 8.57",
    color: "from-primary to-accent",
  },
  {
    icon: School,
    institution: "Abhaysinhraje Bhonsle Institute of Technology, Shendre",
    year: "2024",
    degree: "Diploma in Information Technology",
    score: "91.88%",
    color: "from-accent to-primary",
  },
  {
    icon: BookOpen,
    institution: "Shri Mhalsakant Vidyamandir, Pal",
    year: "2020",
    degree: "SSC",
    score: "81.80%",
    color: "from-primary to-glow",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">My academic journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={`${edu.institution}-${edu.score}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 shadow-lg shadow-primary/50" />

                <div className="glass-card glow-border p-6 hover-lift devops-card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <edu.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base mb-1">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:text-right shrink-0 ml-14 sm:ml-0">
                      <span className="px-3 py-1.5 text-xs font-mono bg-accent/10 text-accent rounded-lg font-semibold border border-accent/20">
                        {edu.score}
                      </span>
                      <span className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-lg border border-border/50">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
