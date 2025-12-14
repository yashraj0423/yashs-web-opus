import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Tools",
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "MUI", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium group-hover:text-foreground transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          className="text-sm font-mono text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-white/20"
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
          >
            <Zap size={14} />
            Technical Skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient-primary">toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              onMouseEnter={() => setActiveCategory(catIndex)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`relative p-6 rounded-3xl glass-card border transition-all duration-300 ${
                activeCategory === catIndex 
                  ? "border-primary/30 shadow-xl shadow-primary/10" 
                  : "border-border/50"
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                    color={category.color}
                  />
                ))}
              </div>

              {/* Hover glow */}
              {activeCategory === catIndex && (
                <motion.div
                  layoutId="skillGlow"
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${category.color} opacity-10 -z-10`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
