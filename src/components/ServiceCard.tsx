import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={href} className="group block h-full">
        <div className="premium-card h-full p-8">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-b from-foreground/10 to-transparent transition-all duration-500 group-hover:border-[hsl(var(--accent-glow))]/20 group-hover:shadow-[0_0_30px_-10px_hsl(var(--accent-glow))]">
              <Icon className="h-6 w-6 text-foreground/80" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>

          {/* Content */}
          <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <span className="text-sm font-medium text-muted-foreground/60 transition-all duration-300 group-hover:text-[hsl(var(--accent-glow))]">
              Learn more
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
