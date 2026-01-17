import { motion } from "framer-motion";

const clients = [
  "TechFlow",
  "GreenScale",
  "Luxe Brands",
  "NeoBank",
  "FitTech",
  "EcoStyle",
  "Quantum AI",
  "StartupHub",
];

export const ClientsMarquee = () => {
  return (
    <section className="relative border-y border-border/30 py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="section-container mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground/60"
        >
          Trusted by ambitious brands
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="mx-12 inline-block text-2xl font-bold text-foreground/20 transition-colors hover:text-foreground/40 sm:text-3xl"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
