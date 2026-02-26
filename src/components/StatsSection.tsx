import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GitBranch, Award, Users } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "10+",
    label: "Projects Completed",
    color: "from-primary to-accent",
  },
  {
    icon: GitBranch,
    value: "250+",
    label: "GitHub Contributions",
    color: "from-accent to-primary",
  },
  {
    icon: Award,
    value: "15+",
    label: "Certifications",
    color: "from-primary to-glow",
  },
  {
    icon: Users,
    value: "4+",
    label: "Hackathon Wins",
    color: "from-accent to-primary",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border p-6 text-center hover-lift devops-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-1 text-gradient bg-gradient-to-r ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
