import { motion } from "framer-motion";

const processSteps = [
  { number: "01", title: "Discovery", description: "Understanding your goals" },
  { number: "02", title: "Strategy", description: "Planning the approach" },
  { number: "03", title: "Design", description: "Crafting the visuals" },
  { number: "04", title: "Develop", description: "Building the solution" },
  { number: "05", title: "Launch", description: "Going live & support" },
];

export const ProcessSection = () => {
  return (
    <section className="relative py-32 noise-overlay">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
            How We Work
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            A proven methodology that delivers results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block">
            <div className="gradient-divider" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mx-auto mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/50 bg-background transition-all duration-500 group-hover:border-[hsl(var(--accent-glow))]/30 group-hover:shadow-[0_0_30px_-10px_hsl(var(--accent-glow))]">
                    <span className="text-lg font-bold text-foreground/60 transition-colors group-hover:text-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
