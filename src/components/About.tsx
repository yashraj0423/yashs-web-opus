import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "MCA Student",
    description: "Currently pursuing MCA at BIT Mesra, one of India's premier technical institutions.",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    description: "Web Development Intern at Omnisciento IT Services, building real-world applications.",
  },
  {
    icon: Code,
    title: "Full Stack Focus",
    description: "Specialized in MERN stack, creating end-to-end solutions for complex problems.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. About</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Get to know <span className="text-primary">me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hey there! I'm <span className="text-primary font-medium">Yash Kumar</span>, 
              a passionate Full Stack Developer with a love for building products that 
              make a difference. Currently pursuing my MCA at BIT Mesra, I spend my time 
              turning ideas into reality through code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              What drives me is the satisfaction of solving complex problems and 
              watching users interact with applications I've built. From designing 
              intuitive user interfaces to architecting robust backend systems, 
              I enjoy every aspect of the development process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10, boxShadow: "0 0 20px hsl(var(--primary) / 0.2)" }}
                className="glass-card p-6 rounded-xl flex gap-4 cursor-pointer group transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
