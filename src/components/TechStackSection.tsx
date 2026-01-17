import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Search, 
  BarChart3, 
  Video, 
  Megaphone,
  Layers,
  Zap
} from "lucide-react";

const technologies = [
  { icon: Code2, name: "React & Next.js", category: "Development" },
  { icon: Palette, name: "Figma & Adobe CC", category: "Design" },
  { icon: Search, name: "Ahrefs & SEMrush", category: "SEO Tools" },
  { icon: BarChart3, name: "Google Analytics", category: "Analytics" },
  { icon: Video, name: "Premiere & After Effects", category: "Video" },
  { icon: Megaphone, name: "Meta Business Suite", category: "Ads" },
  { icon: Layers, name: "WordPress & Webflow", category: "CMS" },
  { icon: Zap, name: "Shopify & WooCommerce", category: "E-commerce" },
];

export const TechStackSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Our Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            Tools We Master
          </motion.h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:border-foreground/20"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                <tech.icon className="h-7 w-7 text-foreground/70 transition-colors group-hover:text-foreground" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground text-sm">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
