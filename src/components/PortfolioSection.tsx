import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "./PortfolioCard";

const projects = [
  {
    title: "NeoBank Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    metrics: "+340% Engagement",
  },
  {
    title: "FitTech Brand Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    metrics: "2.5M Impressions",
  },
  {
    title: "EcoStyle E-commerce",
    category: "Development",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    metrics: "+180% Revenue",
  },
  {
    title: "Quantum AI Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    metrics: "Featured on Awwwards",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="relative py-32 noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
              Portfolio
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Featured <span className="text-gradient">work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of our best projects that have driven real results for ambitious brands.
            </p>
          </div>
          <Link to="/our-work">
            <Button
              variant="outline"
              className="group rounded-full border-border/50 px-6 py-6 text-base transition-all hover:border-[hsl(var(--accent-glow))]/30"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              metrics={project.metrics}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
