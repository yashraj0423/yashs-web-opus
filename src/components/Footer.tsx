import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg text-primary-foreground"
            >
              Y
            </motion.a>
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
                <span className="text-foreground font-medium">Yash Kumar</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
