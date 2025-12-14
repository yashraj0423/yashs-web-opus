import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Sparkles, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "MCA Student",
    description: "Currently pursuing MCA at BIT Mesra, one of India's premier technical institutions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    description: "Web Development Intern at Omnisciento IT Services, building real-world applications.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Full Stack Focus",
    description: "Specialized in MERN stack, creating end-to-end solutions for complex problems.",
    gradient: "from-orange-500 to-red-500",
  },
];

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Years Learning" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            <Sparkles size={14} />
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Passionate about{" "}
            <span className="text-gradient-primary">creating</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hey there! I'm <span className="text-foreground font-semibold">Yash Kumar</span>, 
                a passionate Full Stack Developer with a love for building products that 
                make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my MCA at BIT Mesra, I spend my time 
                turning ideas into reality through code. What drives me is the satisfaction 
                of solving complex problems and watching users interact with applications I've built.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From designing intuitive user interfaces to architecting robust backend systems, 
                I enjoy every aspect of the development process. When I'm not coding, you'll find 
                me exploring new technologies and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-secondary/50 border border-border/50"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight Cards - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group relative p-5 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
