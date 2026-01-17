import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Meta Ads", href: "/services/meta-ads" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Video Editing", href: "/services/video-editing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="section-container relative z-10 py-20">
        {/* Top Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-bold text-foreground sm:text-5xl"
            >
              Let's build something
              <br />
              <span className="text-gradient">extraordinary</span>
            </motion.h2>
            <p className="text-muted-foreground">
              Ready to transform your digital presence? Get in touch and let's discuss your project.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full border border-border bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-foreground/90"
          >
            Start a Project
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
                <span className="text-lg font-black text-background">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Web Nest
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  India
                </span>
              </div>
            </Link>
            <p className="mb-6 text-muted-foreground">
              Premium digital agency crafting exceptional experiences that elevate brands and drive growth.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-foreground/60" />
                <span>hello@webnestindia.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-foreground/60" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-foreground/60" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Web Nest India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
