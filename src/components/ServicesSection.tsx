import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import {
  Globe,
  TrendingUp,
  Search,
  Target,
  Palette,
  Video,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Stunning, responsive websites that captivate your audience and drive conversions with modern aesthetics.",
    href: "/services/web-design",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven strategies that amplify your reach, engage audiences, and maximize ROI across channels.",
    href: "/services/digital-marketing",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Dominate search rankings with proven methodologies that drive organic traffic and visibility.",
    href: "/services/seo",
  },
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Precision-targeted campaigns on Facebook & Instagram that convert browsers into buyers.",
    href: "/services/meta-ads",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Visual identities that make your brand unforgettable and create lasting impressions.",
    href: "/services/graphic-design",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Compelling video content that tells your story, engages viewers, and drives action.",
    href: "/services/video-editing",
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-32 noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-[0.02]" />
      <div className="orb orb-secondary right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 animate-float" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
              What We Do
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Services that drive
              <br />
              <span className="text-gradient">real results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to execution, we provide end-to-end digital solutions that transform your business and exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/packages">
              <Button
                variant="outline"
                className="group rounded-full border-border/50 px-6 py-6 text-base transition-all hover:border-[hsl(var(--accent-glow))]/30"
              >
                View Packages
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
