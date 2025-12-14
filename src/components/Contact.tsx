import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yashkumar0001",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600",
      handle: "@yashkumar0001",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      handle: "@yashkumar",
    },
    {
      name: "Email",
      href: "mailto:yashraj348@gmail.com",
      icon: Mail,
      color: "from-red-500 to-orange-500",
      handle: "yashraj348@gmail.com",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

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
            <MessageSquare size={14} />
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's <span className="text-gradient-primary">connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
              <p className="text-muted-foreground">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">Jamshedpur, Jharkhand, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">yashraj348@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-widest">
                Connect with me
              </h4>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-border/50">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2 text-xs text-primary bg-card px-2' 
                          : 'top-4 text-muted-foreground'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-secondary/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2 text-xs text-primary bg-card px-2' 
                          : 'top-4 text-muted-foreground'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-secondary/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message 
                        ? '-top-2 text-xs text-primary bg-card px-2' 
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-secondary/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
