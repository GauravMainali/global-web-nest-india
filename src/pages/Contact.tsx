import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Web Design",
  "Digital Marketing",
  "SEO Optimization",
  "Meta Ads",
  "Graphic Design",
  "Video Editing",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", service: "", message: "" });
    setIsSubmitting(false);
  };

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
                Let's Build Something <span className="text-gradient">Epic</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your digital presence? Get in touch and let's discuss your project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative py-20">
          <div className="section-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-card rounded-3xl p-8 sm:p-10">
                  <h2 className="mb-8 text-2xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Name
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="rounded-xl border-border/50 bg-background/50 px-4 py-3 focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                          className="rounded-xl border-border/50 bg-background/50 px-4 py-3 focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Service Interested In
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="rounded-xl border-border/50 bg-background/50 px-4 py-3">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        className="rounded-xl border-border/50 bg-background/50 px-4 py-3 focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="group w-full rounded-full bg-primary py-6 text-lg font-semibold text-primary-foreground transition-all hover:scale-[1.02] neon-glow disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h2 className="mb-8 text-2xl font-bold text-foreground">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">hello@novadigital.agency</p>
                    </div>
                  </div>

                  <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Drive<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-green-500/10 px-6 py-4 font-semibold text-green-500 transition-all hover:bg-green-500/20"
                >
                  <MessageCircle className="h-6 w-6" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
