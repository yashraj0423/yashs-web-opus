import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown, Code2, Database, Palette } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  { text: "Full Stack Developer", icon: Code2 },
  { text: "MERN Stack Enthusiast", icon: Database },
  { text: "Building Real-World Apps", icon: Palette },
];

const FloatingOrb = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
    className={`absolute ${size} ${color} rounded-full blur-3xl animate-float`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const CurrentIcon = roles[currentRole].icon;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating orbs */}
      <FloatingOrb delay={0} size="w-96 h-96 -top-48 -left-48" color="bg-primary/20" />
      <FloatingOrb delay={0.5} size="w-80 h-80 top-1/2 -right-40" color="bg-accent/20" />
      <FloatingOrb delay={1} size="w-64 h-64 bottom-20 left-1/4" color="bg-primary/10" />
      
      {/* Orbiting elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 animate-orbit">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
        <div className="absolute inset-0 animate-orbit" style={{ animationDelay: "-7s" }}>
          <div className="w-2 h-2 bg-accent rounded-full" />
        </div>
        <div className="absolute inset-0 animate-orbit" style={{ animationDelay: "-14s" }}>
          <div className="w-4 h-4 bg-primary/50 rounded-full blur-sm" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-gradient-primary">Yash Kumar</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-16 mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <CurrentIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                    {roles[currentRole].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              MCA student at <span className="text-foreground font-medium">BIT Mesra</span>, crafting 
              intuitive digital experiences. I transform ideas into elegant, 
              scalable solutions that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/YashResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-semibold shadow-xl shadow-primary/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileText size={20} />
                  View Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yashkumar0001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-2xl font-semibold border border-border hover:border-primary/50 transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-2xl font-semibold border border-border hover:border-primary/50 transition-all"
              >
                <Github size={20} />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex justify-center order-1 lg:order-2 perspective-1000"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl scale-110" />
              
              {/* Main image container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-gradient"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                  <img
                    src={profilePhoto}
                    alt="Yash Kumar - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-full" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 glass-card px-4 py-2 rounded-xl border-gradient"
              >
                <span className="text-sm font-semibold">3+ Projects</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-xl border-gradient"
              >
                <span className="text-sm font-semibold">MERN Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
