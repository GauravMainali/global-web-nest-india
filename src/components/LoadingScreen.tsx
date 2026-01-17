import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-5" />
          
          {/* Animated orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-foreground/10 to-transparent blur-3xl"
          />

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-2xl border-2 border-dashed border-foreground/20"
            />
            
            {/* Pulsing glow */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-foreground blur-xl"
            />

            {/* Main Logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-foreground shadow-2xl shadow-foreground/20"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-black text-background"
              >
                W
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Web Nest
            </h1>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              India
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative h-1 w-[200px] overflow-hidden rounded-full bg-foreground/10"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-foreground/50 to-foreground"
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading experience...
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
