import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "SEO Optimization", href: "/services/seo" },
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Video Editing", href: "/services/video-editing" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Packages", href: "/packages" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-4 transition-all duration-500 ${
        scrolled 
          ? "glass-card rounded-2xl" 
          : "bg-transparent"
      }`}>
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
                  <span className="text-lg font-black text-background">W</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-foreground opacity-0 blur-xl transition-opacity group-hover:opacity-30" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Web Nest
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`animated-underline flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                          location.pathname.startsWith("/services")
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="glass-card absolute left-0 top-full mt-2 w-56 rounded-xl p-2"
                          >
                            {services.map((service, index) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={service.href}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground"
                                >
                                  {service.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`animated-underline px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="magnetic-btn group relative overflow-hidden rounded-full bg-foreground px-6 font-medium text-background transition-all hover:bg-foreground/90">
                  <span className="relative z-10">Start Project</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="rounded-lg p-2 text-foreground lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card mx-4 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {link.hasDropdown ? (
                    <div className="py-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex w-full items-center justify-between py-2 text-lg font-medium text-foreground"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 space-y-1 border-l border-border pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-lg font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 pt-4 border-t border-border"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-foreground font-medium text-background">
                    Start Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
