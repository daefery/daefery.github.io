"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function StaggerGroup({ children, className, style, delay = 0 }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}
