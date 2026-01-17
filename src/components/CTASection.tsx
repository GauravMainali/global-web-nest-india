import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-32 noise-overlay">
      {/* Subtle Orbs */}
      <div className="orb orb-secondary -left-32 top-0 h-[600px] w-[600px] animate-float" />
      <div className="orb orb-primary -right-32 bottom-0 h-[500px] w-[500px] animate-float animation-delay-2000" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card relative overflow-hidden rounded-3xl p-10 text-center sm:p-16 lg:p-24"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 grid-bg opacity-[0.02]" />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mb-10 inline-flex"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-b from-foreground/10 to-transparent">
              <Sparkles className="h-7 w-7 text-foreground/80" />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[hsl(var(--accent-glow))]/10 blur-xl opacity-0 animate-pulse-subtle" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Ready to Elevate Your
            <br />
            <span className="text-gradient">Digital Presence?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
          >
            Join 50+ successful brands that have transformed their online presence with Web Nest India. Let's create something extraordinary together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="magnetic-btn glow-hover group relative overflow-hidden rounded-full bg-foreground px-8 py-7 text-base font-semibold text-background transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link to="/packages">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border/50 px-8 py-7 text-base font-medium text-foreground transition-all hover:border-[hsl(var(--accent-glow))]/30 hover:bg-foreground/5"
              >
                View Packages
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
