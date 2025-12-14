import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-40 flex flex-col gap-3"
        >
          {/* Contact quick action */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-accent/25"
          >
            <MessageCircle size={22} />
          </motion.a>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25"
          >
            <ArrowUp size={22} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
