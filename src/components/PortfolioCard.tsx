import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  metrics: string;
  index: number;
}

export const PortfolioCard = ({
  title,
  category,
  image,
  metrics,
  index,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Image with Grain */}
      <div className="image-grain absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
          {category}
        </span>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-[hsl(var(--accent-glow))]">{metrics}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10 transition-all duration-500 group-hover:ring-[hsl(var(--accent-glow))]/20" />
    </motion.div>
  );
};
