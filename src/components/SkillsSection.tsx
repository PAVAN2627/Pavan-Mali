import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, Monitor, Database, Code } from "lucide-react";

// Real logo URLs from CDN
const skillLogos: Record<string, string> = {
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
};

const SkillLogo = ({ name, logo }: { name: string; logo?: string }) => {
  if (logo) {
    return (
      <img 
        src={logo} 
        alt={name} 
        className="w-5 h-5 object-contain"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }
  return null;
};

const categories = [
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, IAM, VPC)", logo: skillLogos["AWS"], display: "AWS" },
      { name: "Docker", logo: skillLogos["Docker"], display: "Docker" },
      { name: "Kubernetes", logo: skillLogos["Kubernetes"], display: "Kubernetes" },
      { name: "Terraform", logo: skillLogos["Terraform"], display: "Terraform" },
      { name: "Jenkins", logo: skillLogos["Jenkins"], display: "Jenkins" },
      { name: "Ansible", logo: skillLogos["Ansible"], display: "Ansible" },
      { name: "Linux", logo: skillLogos["Linux"], display: "Linux" },
      { name: "Nginx", logo: skillLogos["Nginx"], display: "Nginx" },
      { name: "Git", logo: skillLogos["Git"], display: "Git" },
      { name: "GitHub Actions", logo: skillLogos["GitHub"], display: "GitHub Actions" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", logo: skillLogos["Python"], display: "Python" },
      { name: "FastAPI", logo: skillLogos["FastAPI"], display: "FastAPI" },
      { name: "Flask", logo: skillLogos["Flask"], display: "Flask" },
      { name: "PHP", logo: skillLogos["PHP"], display: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React", logo: skillLogos["React"], display: "React" },
      { name: "Next.js", logo: skillLogos["Next.js"], display: "Next.js" },
      { name: "TypeScript", logo: skillLogos["TypeScript"], display: "TypeScript" },
      { name: "JavaScript", logo: skillLogos["JavaScript"], display: "JavaScript" },
      { name: "Tailwind CSS", logo: skillLogos["Tailwind CSS"], display: "Tailwind CSS" },
      { name: "HTML5", logo: skillLogos["HTML"], display: "HTML5" },
      { name: "CSS3", logo: skillLogos["CSS"], display: "CSS3" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", logo: skillLogos["MySQL"], display: "MySQL" },
      { name: "PostgreSQL", logo: skillLogos["PostgreSQL"], display: "PostgreSQL" },
      { name: "MongoDB", logo: skillLogos["MongoDB"], display: "MongoDB" },
      { name: "Oracle", logo: skillLogos["Oracle"], display: "Oracle" },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", logo: skillLogos["Python"], display: "Python" },
      { name: "Java", logo: skillLogos["Java"], display: "Java" },
      { name: "C++", logo: skillLogos["C++"], display: "C++" },
      { name: "Shell Scripting", logo: skillLogos["Bash"], display: "Bash/Shell" },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading">DevOps tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border p-6 hover-lift skill-glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-lg skill-badge border border-border/50 hover:border-primary/50"
                  >
                    <SkillLogo name={skill.name} logo={skill.logo} />
                    {skill.display}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
