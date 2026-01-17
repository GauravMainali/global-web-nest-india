import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Successful launches" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Happy customers" },
  { value: 5, suffix: "+", label: "Years Experience", description: "Industry expertise" },
  { value: 50, suffix: "+", label: "Team Members", description: "Creative minds" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 bottom-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-foreground/10 to-transparent blur-2xl"
      />

      <div className="section-container relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 hover:border-foreground/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                {/* Number */}
                <div className="relative mb-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="relative mb-1 text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="relative text-sm text-muted-foreground">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
