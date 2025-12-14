import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Omnisciento IT Services",
    period: "2024",
    location: "Remote",
    description: [
      "Developed and maintained full-stack web applications using the MERN stack",
      "Collaborated with cross-functional teams to deliver client projects on time",
      "Implemented responsive UI components using React and Material UI",
      "Optimized application performance and improved user experience",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "MUI"],
  },
];

const achievements = [
  {
    title: "Tata Steel Adventure Camp",
    description: "Demonstrated leadership and teamwork skills in challenging outdoor activities. Developed problem-solving abilities through adventure-based learning experiences.",
    icon: "🏆",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0 mb-12"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 glow-sm z-10"
                />

                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {/* Date - Left side on desktop */}
                  <div className="hidden md:flex justify-end items-start pt-0">
                    <div className="text-right">
                      <span className="inline-flex items-center gap-2 text-primary font-mono text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Content - Right side on desktop */}
                  <div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="glass-card p-6 rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-primary text-sm">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4 md:hidden">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <span className="text-primary mt-1">▹</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <span className="text-4xl mb-4 block">{achievement.icon}</span>
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
