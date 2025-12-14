import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Law Firm ERP Portal",
    description: "A comprehensive enterprise resource planning system for law firms, featuring case management, client tracking, document handling, and team collaboration tools.",
    longDescription: "Built a full-featured ERP system tailored for law firms. The platform enables efficient case lifecycle management, secure document storage, client communication tracking, and automated billing. Implemented role-based access control and real-time notifications.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "MUI", "JWT"],
    features: [
      "Case tracking & management",
      "Client management portal",
      "Document handling & storage",
      "Role-based access control",
      "Real-time notifications",
    ],
    image: "🏛️",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Travel Package Booking",
    description: "A modern travel booking platform with advanced search, filtering capabilities, responsive design, and seamless payment integration.",
    longDescription: "Developed a user-friendly travel booking website that allows users to explore, compare, and book travel packages. Features include advanced filtering, wishlist functionality, and a streamlined checkout process.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    features: [
      "Advanced search & filters",
      "Package comparison",
      "Responsive design",
      "Payment integration",
      "User reviews & ratings",
    ],
    image: "✈️",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  onViewDetails: () => void;
}

const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <motion.div
        whileHover={{ y: -10 }}
        className="relative glass-card rounded-2xl overflow-hidden h-full"
      >
        {/* Header with emoji */}
        <div className="relative h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <motion.span
            animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-7xl"
          >
            {project.image}
          </motion.span>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center border border-border"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* View details button */}
          <motion.button
            onClick={onViewDetails}
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-primary text-sm font-medium"
          >
            View Details
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{project.image}</span>
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex gap-2 mt-2">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-muted-foreground mb-6">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
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

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            What I've <span className="text-primary">Built</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building full-stack applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};
