import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <Scene3D />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm tracking-wider uppercase backdrop-blur-md">
              Future of Digital
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
              Web Nest
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              India
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Transforming concepts into immersive
            <span className="text-primary font-medium"> 3D experiences</span>.
            Elevate your brand with the next generation of web design.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-medium text-lg px-8 py-6 rounded-full backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
