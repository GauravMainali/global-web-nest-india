import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  { icon: Palette, text: "Custom designs that reflect your brand identity" },
  { icon: Zap, text: "Lightning-fast loading speeds (95+ Lighthouse)" },
  { icon: Shield, text: "Enterprise-grade security & reliability" },
  { icon: TrendingUp, text: "Conversion-optimized layouts" },
  { icon: Code, text: "Clean, maintainable codebase" },
  { icon: Smartphone, text: "Perfect on every device" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your brand, goals, and target audience to create a strategic foundation.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We craft a comprehensive plan including UX research, sitemap, and content strategy.",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create stunning, user-centric interfaces that captivate and convert.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build using cutting-edge tech for performance, accessibility, and scalability.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We ensure a flawless launch and provide ongoing optimization and support.",
  },
];

const WebDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-40">
          <div className="orb orb-cyan left-1/4 top-1/4 h-80 w-80 animate-float" />
          <div className="orb orb-magenta right-1/4 bottom-1/4 h-64 w-64 animate-float animation-delay-2000" />
          
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Web Design Services
              </div>
              <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                Websites That <span className="text-gradient">Convert</span>
              </h1>
              <p className="mb-10 text-xl text-muted-foreground">
                We create stunning, high-performance websites that captivate your audience
                and drive measurable business results.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground neon-glow"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative py-32">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
                Why Choose <span className="text-gradient">Us</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card flex items-center gap-4 rounded-2xl p-6"
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative py-32">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A proven methodology that delivers results every time.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-primary lg:left-1/2 lg:block" />

              <div className="space-y-12">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 lg:justify-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`glass-card max-w-md rounded-2xl p-8 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}>
                      <div className="mb-4 text-5xl font-bold text-gradient">{item.step}</div>
                      <h3 className="mb-2 text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-6 hidden h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50 lg:relative lg:left-0 lg:block" />

                    <div className="hidden max-w-md lg:block lg:flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WebDesign;
