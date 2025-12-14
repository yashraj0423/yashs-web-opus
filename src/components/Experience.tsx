import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, Building2, Code2, Users, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Omnisciento IT Services",
    period: "2024",
    location: "Remote",
    logo: "🏢",
    description: [
      "Developed and maintained full-stack web applications using the MERN stack",
      "Collaborated with cross-functional teams to deliver client projects on time",
      "Implemented responsive UI components using React and Material UI",
      "Optimized application performance and improved user experience",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "MUI"],
    highlights: [
      { icon: Code2, label: "Full-Stack", value: "MERN" },
      { icon: Users, label: "Team Size", value: "5+" },
      { icon: Rocket, label: "Projects", value: "3+" },
    ],
  },
];

const achievements = [
  {
    title: "Tata Steel Adventure Camp",
    description: "Demonstrated leadership and teamwork skills in challenging outdoor activities. Developed problem-solving abilities through adventure-based learning experiences.",
    icon: "🏆",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Where I've <span className="text-primary">Worked</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building real-world applications and gaining hands-on experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
              className="relative mb-12"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl transition-opacity duration-500 ${hoveredExp === index ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative glass-card rounded-3xl overflow-hidden border border-primary/10">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-6 md:p-8 border-b border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: hoveredExp === index ? [0, -10, 10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                      >
                        {exp.logo}
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={highlight.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="text-center p-3 bg-background/50 rounded-xl"
                      >
                        <highlight.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-primary">{highlight.value}</p>
                        <p className="text-xs text-muted-foreground">{highlight.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-bold">{i + 1}</span>
                        </span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium rounded-lg border border-primary/20 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Achievements & <span className="text-primary">Recognition</span>
            </h3>

            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative glass-card p-8 rounded-2xl border border-primary/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <motion.span 
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-6xl"
                    >
                      {achievement.icon}
                    </motion.span>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
