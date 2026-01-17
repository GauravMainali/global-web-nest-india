import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Star, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "₹15,000",
    period: "one-time",
    description: "Perfect for startups and small businesses getting started online.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "1 month support",
      "SSL certificate",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: "₹35,000",
    period: "one-time",
    description: "Ideal for growing businesses that need a powerful online presence.",
    features: [
      "10-page responsive website",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "Blog/News section",
      "Google Analytics setup",
      "WhatsApp integration",
      "3 months support",
      "Performance optimization",
      "Social media integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "₹75,000",
    period: "one-time",
    description: "Complete digital solution for established businesses and brands.",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Custom animations",
      "CMS integration",
      "Multi-language support",
      "Advanced analytics",
      "Priority 24/7 support",
      "Custom API integrations",
      "A/B testing setup",
      "Performance monitoring",
    ],
    popular: false,
  },
];

const addons = [
  { name: "Logo Design", price: "₹5,000" },
  { name: "Brand Identity Kit", price: "₹15,000" },
  { name: "Monthly SEO Package", price: "₹8,000/mo" },
  { name: "Social Media Management", price: "₹12,000/mo" },
  { name: "Meta Ads Management", price: "₹10,000/mo" },
  { name: "Video Editing (per video)", price: "₹3,000" },
  { name: "Content Writing (per page)", price: "₹1,500" },
  { name: "Website Maintenance", price: "₹5,000/mo" },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-40">
          <div className="orb orb-primary left-1/4 top-1/4 h-[500px] w-[500px] animate-float" />
          <div className="orb orb-secondary right-1/4 bottom-1/4 h-[400px] w-[400px] animate-float animation-delay-2000" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Pricing
              </span>
              <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                Transparent
                <br />
                <span className="text-gradient">Pricing Plans</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the perfect package for your business needs. No hidden fees, no surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="relative py-20">
          <div className="section-container relative z-10">
            <div className="grid gap-8 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${pkg.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                      <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`h-full rounded-2xl p-8 ${
                      pkg.popular
                        ? "package-highlight bg-card"
                        : "premium-card"
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-foreground/5">
                      <pkg.icon className="h-7 w-7 text-foreground" />
                    </div>

                    {/* Name & Price */}
                    <h3 className="mb-2 text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground">/{pkg.period}</span>
                    </div>
                    <p className="mb-8 text-muted-foreground">{pkg.description}</p>

                    {/* Features */}
                    <ul className="mb-8 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-foreground" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to="/contact">
                      <Button
                        className={`w-full rounded-full ${
                          pkg.popular
                            ? "bg-foreground text-background hover:bg-foreground/90"
                            : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                        }`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="relative py-32">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Extras
              </span>
              <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
                Add-on <span className="text-gradient">Services</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Enhance your package with these additional services tailored to your needs.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="premium-card flex items-center justify-between p-5"
                >
                  <span className="font-medium text-foreground">{addon.name}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ-like info */}
        <section className="relative py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 sm:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">What's Included?</h3>
                  <p className="text-muted-foreground">
                    All packages include responsive design, SEO basics, and post-launch support. We ensure your website is fast, secure, and optimized.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Payment Terms</h3>
                  <p className="text-muted-foreground">
                    50% upfront to start the project, 50% upon completion. We accept bank transfers, UPI, and all major payment methods.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Timeline</h3>
                  <p className="text-muted-foreground">
                    Starter: 1-2 weeks, Professional: 2-3 weeks, Enterprise: 4-6 weeks. Rush delivery available at additional cost.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
