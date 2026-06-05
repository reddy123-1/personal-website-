"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Badge({ children, className, delay = 0 }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
      className={cn(
        "inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
