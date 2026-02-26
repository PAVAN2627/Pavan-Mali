import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner – Tutedude Web Hackathon (2025)",
    description: "Won 1st place for building an innovative web application.",
    color: "from-primary to-accent",
    image: "/tutedude-winner.png",
  },
  {
    title: "Hackathon Winner – SkillSprint 2025",
    description: "Top performer among 200+ participants.",
    color: "from-accent to-primary",
    image: "/skillsprint-winner.png",
  },
  {
    title: "GirlScript Summer of Code 2025",
    description: "Contributed to open-source projects in GSSoC program.",
    color: "from-accent to-primary",
    image: "/gssoc-2025.jpg",
  },
  {
    title: "NVIDIA Certification – Building LLM Applications",
    description: "Certified in Building LLM Applications with Prompt Engineering.",
    color: "from-primary to-accent",
    image: "/nvidia-llm.png",
  },
  {
    title: "AWS Summit India 2024",
    description: "Attended AWS Summit and gained insights into cloud technologies.",
    color: "from-primary to-glow",
    image: "/awssummit.jpg",
  },
  {
    title: "Microsoft Learn AI Skills Challenge",
    description: "Completed Microsoft Learn AI Skills Challenge program.",
    color: "from-accent to-primary",
    image: "/mslearn.jpg",
  },
  {
    title: "GenAI Program Certification",
    description: "Completed comprehensive Generative AI training program.",
    color: "from-primary to-accent",
    image: "/genai program.jpg",
  },
  {
    title: "Algoverse Hackathon",
    description: "Competed in Algoverse algorithmic hackathon challenge.",
    color: "from-primary to-glow",
    image: "/algoverse.jpg",
  },
  {
    title: "EventEye Hackathon",
    description: "Built innovative event management solution.",
    color: "from-accent to-primary",
    image: "/eventeyehack.jpg",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Achievements & Certifications</h2>
          <p className="section-subheading">Recognition and milestones</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border hover-lift cursor-pointer group devops-card"
              onClick={() => setSelectedIndex(i)}
            >
              {/* Certificate visual */}
              <div className="relative h-40 rounded-t-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 certificate-shine">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {achievements[selectedIndex].title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                {achievements[selectedIndex].description}
              </p>

              {/* Certificate preview */}
              <div className="mt-6 rounded-lg overflow-hidden border border-border">
                <img
                  src={achievements[selectedIndex].image}
                  alt={achievements[selectedIndex].title}
                  className="w-full h-auto"
                />
              </div>
              
              <a
                href={achievements[selectedIndex].image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} />
                View Full Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
