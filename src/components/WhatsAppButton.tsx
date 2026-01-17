import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your services. Can we discuss my project?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Hide tooltip after 5 seconds
  useState(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="relative glass-card rounded-2xl px-4 py-3 max-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm text-foreground font-medium">Need help? 💬</p>
            <p className="text-xs text-muted-foreground mt-1">Chat with us on WhatsApp</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 glass-card border-r border-b border-border/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
        
        {/* Icon */}
        <MessageCircle className="relative z-10 h-6 w-6 fill-current" />

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
      </motion.a>
    </div>
  );
};
