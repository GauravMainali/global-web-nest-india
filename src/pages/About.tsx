import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Target, Heart, Lightbulb, Users, Award, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is guided by measurable outcomes and real business impact.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We're invested in every project like it's our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends to deliver cutting-edge solutions that set you apart.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "True partnership means working together, not just for you.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We don't settle for good. Every pixel, every word, every strategy matters.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Fast-moving markets require fast-moving teams. We adapt and deliver.",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sneha Kapoor",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ananya Rao",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-40 noise-overlay">
          <div className="orb orb-primary left-1/4 top-1/4 h-[600px] w-[600px] animate-float" />
          <div className="orb orb-secondary right-1/4 bottom-1/4 h-[400px] w-[400px] animate-float animation-delay-2000" />
          
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-center"
            >
              <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
                About Us
              </span>
              <h1 className="mb-8 text-5xl font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                We Build <span className="text-gradient">Digital Dreams</span>
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Since 2020, we've been transforming ambitious brands into digital powerhouses.
                Our mission is simple: create experiences that captivate, convert, and scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-border/30 py-12">
          <div className="section-container">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "15+", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="stat-number text-3xl text-foreground sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-32 noise-overlay">
          <div className="absolute inset-0 grid-bg opacity-[0.02]" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
                Our Values
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                What drives <span className="text-gradient">us</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="premium-card group p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-gradient-to-b from-foreground/10 to-transparent transition-all duration-500 group-hover:border-[hsl(var(--accent-glow))]/20">
                    <value.icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-32 noise-overlay">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
                Our Team
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Meet the <span className="text-gradient">team</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                A diverse group of creators, strategists, and innovators.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="image-grain relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-foreground/10 transition-all duration-300 group-hover:ring-[hsl(var(--accent-glow))]/30" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground/60">{member.role}</p>
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

export default About;
