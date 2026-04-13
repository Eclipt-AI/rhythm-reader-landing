"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
}: AnimateOnScrollProps) {
  const reduce = useReducedMotion();

  const offset = reduce ? { x: 0, y: 0 } : getOffset(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}
