import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Server, Cloud, Code2, Rocket } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Cloud, label: "Cloud Architecture", desc: "AWS, Azure, GCP" },
    { icon: Server, label: "Infrastructure as Code", desc: "Terraform, Ansible" },
    { icon: Code2, label: "CI/CD Automation", desc: "Jenkins, GitHub Actions" },
    { icon: Rocket, label: "Container Orchestration", desc: "Docker, Kubernetes" },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">DevOps Engineer | Cloud Architect | Linux Enthusiast</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass-card glow-border p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal size={20} className="text-primary" />
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                ~/about <span className="text-primary">$</span> cat profile.md
              </div>
            </div>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                I am a passionate <span className="text-primary font-semibold">DevOps Engineer</span> and <span className="text-primary font-semibold">Full Stack Developer</span> specializing in building and automating cloud-native infrastructure. With deep expertise in <span className="font-semibold">AWS</span>, <span className="font-semibold">Docker</span>, <span className="font-semibold">Terraform</span>, and <span className="font-semibold">CI/CD pipelines</span>, I bridge the gap between development and operations.
              </p>
              
              <p>
                My journey in DevOps revolves around <span className="text-primary font-semibold">Linux-based systems</span>, where I've mastered shell scripting, system administration, and server optimization. I architect scalable cloud solutions on AWS (EC2, S3, VPC, IAM, CloudWatch) and implement Infrastructure as Code using Terraform to ensure reproducible and version-controlled deployments.
              </p>
              
              <p>
                I build robust <span className="font-semibold">CI/CD pipelines</span> with Jenkins and GitHub Actions, containerize applications with Docker, and orchestrate microservices. My full-stack capabilities allow me to understand the complete software lifecycle—from writing efficient backend APIs with FastAPI and Flask to crafting responsive frontends with React and Next.js.
              </p>
              
              <p>
                Beyond technical skills, I'm an active participant in <span className="font-semibold">hackathons</span> and <span className="font-semibold">open-source communities</span>, having won multiple competitions and contributed to projects like GSSoC and Hacktoberfest. I'm constantly exploring emerging technologies in AI/ML, cloud computing, and DevSecOps.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {["Pune, India", "B.E. IT (Pursuing)", "Diploma in IT", "AWS Certified", "Linux Expert"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-mono bg-secondary text-secondary-foreground rounded-full border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass-card glow-border p-5 hover-lift"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
