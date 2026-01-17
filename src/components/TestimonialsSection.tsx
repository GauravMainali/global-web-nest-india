import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Web Nest India transformed our entire digital presence. The results exceeded every expectation—our leads increased by 400% in just 3 months.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, GreenScale",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with this team was a game-changer. Their strategic approach to design and marketing helped us secure Series A funding.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "CMO, Luxe Brands",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    content:
      "The attention to detail and creativity is unmatched. Every project they deliver feels like a premium, bespoke experience.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-32 noise-overlay">
      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--accent-glow))]/[0.02] blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
            Testimonials
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            What clients <span className="text-gradient">say</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Don't just take our word for it—hear from the brands we've helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group relative rounded-2xl p-8"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-foreground/[0.03]" />

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-foreground/80 text-foreground/80"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="gradient-divider mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-foreground/10 transition-all group-hover:ring-[hsl(var(--accent-glow))]/30" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
