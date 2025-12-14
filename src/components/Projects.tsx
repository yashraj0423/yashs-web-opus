import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Layers, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Law Firm ERP Portal",
    subtitle: "Enterprise Resource Planning",
    description: "A comprehensive ERP system for law firms with case management, client tracking, and document handling.",
    longDescription: "Built a full-featured ERP system tailored for law firms. The platform enables efficient case lifecycle management, secure document storage, client communication tracking, and automated billing. Implemented role-based access control and real-time notifications.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "MUI", "JWT"],
    features: [
      "Case tracking & management",
      "Client management portal",
      "Document handling & storage",
      "Role-based access control",
    ],
    color: "from-violet-500 to-purple-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Travel Booking Platform",
    subtitle: "Package Booking Website",
    description: "Modern travel booking platform with advanced search, filters, and seamless payment integration.",
    longDescription: "Developed a user-friendly travel booking website that allows users to explore, compare, and book travel packages. Features include advanced filtering, wishlist functionality, and a streamlined checkout process.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    features: [
      "Advanced search & filters",
      "Package comparison",
      "Payment integration",
      "User reviews & ratings",
    ],
    color: "from-emerald-500 to-teal-600",
    liveUrl: "#",
    githubUrl: "#",
  },
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border/50"
      >
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-br ${project.color} bg-opacity-10`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-4">Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 bg-gradient-to-r ${project.color} bg-opacity-10 text-sm font-medium rounded-lg`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold hover:opacity-90 transition-opacity`}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold border border-border hover:border-primary/50 transition-colors"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

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
            <Layers size={14} />
            Projects
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient-primary">work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real-world applications showcasing my full-stack development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative glass-card rounded-3xl overflow-hidden border border-border/50 group-hover:border-transparent transition-colors h-full">
                {/* Header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 grid-pattern" />
                  </div>
                  
                  {/* Floating icon */}
                  <motion.div
                    animate={{ 
                      y: hoveredIndex === index ? -10 : 0,
                      rotate: hoveredIndex === index ? 10 : 0 
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Layers className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Quick actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-md text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View details */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
