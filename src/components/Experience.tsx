import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Omnisciento IT Services",
    period: "Jun 2025 – Present",
    location: "Remote",
    description: [
      "Collaborated with business and development teams to gather requirements and translate them into technical solutions",
      "Assisted in building front-end features in React (forms, lists, basic state) and fixing UI issues for mobile/desktop",
      "Contributed to back-end routes in Node/Express and simple MongoDB/Mongoose CRUD operations",
      "Conducted data validation and process documentation, improving workflow clarity",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Git", "Responsive UI"],
  },
  {
    title: "Vocational Trainee – Web Development",
    company: "Tata Steel Ltd., Jamshedpur",
    period: "May 2023 – Jun 2023",
    location: "Jamshedpur",
    description: [
      "Completed a vocational training program under the Learning & Development department",
      "Learned core web development concepts including HTML, CSS, JavaScript and basic backend flow",
      "Worked on designing simple responsive web pages and improving UI structure",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

const achievements = [
  {
    title: "Tata Steel Adventure Camp",
    description: "Led a team to victory, demonstrating strong leadership, strategic planning, and teamwork skills to achieve success in competitive outdoor challenges.",
    icon: Trophy,
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Briefcase size={14} />
            Experience
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Where I've <span className="text-gradient-primary">worked</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main card */}
              <div className="glass-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors">
                {/* Header */}
                <div className="relative p-8 bg-gradient-to-r from-primary/5 via-transparent to-accent/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25"
                      >
                        <Building2 className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-sm font-medium">
                        <Calendar size={16} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-sm font-medium">
                        <MapPin size={16} className="text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                    Key Responsibilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {exp.description.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary font-medium rounded-xl cursor-default"
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
              Recognition & <span className="text-gradient-primary">Achievements</span>
            </h3>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-all flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
