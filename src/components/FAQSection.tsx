import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What services does Web Nest India offer?",
    answer:
      "We offer a comprehensive suite of digital services including Web Design & Development, Digital Marketing, SEO Optimization, Meta Ads (Facebook & Instagram), Graphic Design, and Video Editing. Each service is tailored to meet your specific business needs and goals.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Typically, a standard website takes 2-4 weeks from concept to launch. More complex projects with custom features may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer transparent, project-based pricing. Our packages start from ₹15,000 for basic websites. For custom solutions, we provide detailed quotes after understanding your requirements. Check our Packages page for detailed pricing information.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Absolutely! We offer various maintenance and support packages. All our projects include 30 days of free support post-launch. After that, you can opt for monthly or annual maintenance plans that include updates, security patches, and technical support.",
  },
  {
    question: "Can you help improve our existing website's SEO?",
    answer:
      "Yes! Our SEO services include comprehensive audits, on-page optimization, content strategy, technical SEO fixes, and ongoing monthly optimization. We've helped clients achieve significant improvements in search rankings and organic traffic.",
  },
  {
    question: "What makes Web Nest India different from other agencies?",
    answer:
      "We combine premium design aesthetics with performance-focused development. Our team brings international experience with local market understanding. We prioritize long-term partnerships, transparent communication, and measurable results for every project.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/5 to-transparent blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground"
          >
            <Sparkles className="h-4 w-4" />
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about working with us. Can't find the answer you're looking for? Reach out to our team.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-2xl border border-border/50 px-6 data-[state=open]:border-foreground/20"
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-foreground/80"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>

      {/* Gradient Divider */}
      <div className="gradient-divider mt-20" />
    </section>
  );
};
