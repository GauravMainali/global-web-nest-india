import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layers, Brush, Image, FileImage, Sparkles } from "lucide-react";

const benefits = [
  { icon: Palette, text: "Brand identity design" },
  { icon: Layers, text: "UI/UX design systems" },
  { icon: Brush, text: "Illustration & iconography" },
  { icon: Image, text: "Social media graphics" },
  { icon: FileImage, text: "Print & packaging" },
  { icon: Sparkles, text: "Motion graphics" },
];

const GraphicDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
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
                Graphic Design Services
              </div>
              <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                Visual <span className="text-gradient">Excellence</span>
              </h1>
              <p className="mb-10 text-xl text-muted-foreground">
                Stunning visuals that capture attention and communicate your brand story.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground neon-glow"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative py-32">
          <div className="section-container relative z-10">
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

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
