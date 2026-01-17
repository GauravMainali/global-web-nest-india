import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web Design", "Marketing", "Branding", "Development"];

const projects = [
  {
    title: "NeoBank Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    metrics: "+340% User Engagement",
    description: "Complete redesign of a fintech platform.",
  },
  {
    title: "FitTech Brand Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    metrics: "2.5M Impressions",
    description: "Multi-channel campaign for fitness startup.",
  },
  {
    title: "EcoStyle E-commerce",
    category: "Development",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    metrics: "+180% Revenue",
    description: "Custom e-commerce platform build.",
  },
  {
    title: "Quantum AI Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    metrics: "Featured on Awwwards",
    description: "Complete brand identity overhaul.",
  },
  {
    title: "CloudSync SaaS",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    metrics: "+520% Sign-ups",
    description: "B2B SaaS platform redesign.",
  },
  {
    title: "Urban Eats Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    metrics: "12K New Customers",
    description: "Restaurant chain digital campaign.",
  },
  {
    title: "Nexus Finance App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    metrics: "4.9★ App Store",
    description: "Mobile banking app development.",
  },
  {
    title: "Stellar Spaces",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    metrics: "Brand of the Year",
    description: "Real estate brand identity.",
  },
];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our collection of award-winning projects that have transformed brands and driven measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="relative py-16">
          <div className="section-container relative z-10">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground neon-glow"
                      : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                        <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                        <h3 className="mb-1 text-xl font-bold text-foreground">{project.title}</h3>
                        <p className="mb-2 text-sm text-muted-foreground">{project.description}</p>
                        <p className="text-sm font-medium text-primary">{project.metrics}</p>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        View Case Study
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
