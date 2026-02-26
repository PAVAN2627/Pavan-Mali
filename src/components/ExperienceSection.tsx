import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Smartphone } from "lucide-react";

const experiences = [
  {
    title: "AWS Cloud Intern",
    company: "Eduskill Foundation",
    icon: Cloud,
    points: [
      "Worked with EC2, IAM, S3, VPC",
      "Practiced Linux & Git workflows",
      "Learned Docker & CI/CD fundamentals",
    ],
  },
  {
    title: "Android Developer Intern",
    company: "Microdynamic Software",
    icon: Smartphone,
    points: [
      "Improved app responsiveness by 20%",
      "Reduced bugs by 15%",
      "Optimized performance and UX",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 shadow-lg shadow-primary/50" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card glow-border p-6 hover-lift devops-card">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <exp.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
