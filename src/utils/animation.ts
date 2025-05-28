import type { Variants } from "framer-motion";

// Fade in animation variant
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0.2
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};
