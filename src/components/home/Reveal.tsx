import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className, delay = 0, y = 18, transition, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={prefersReducedMotion ? false : { opacity: 0, y }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          transition ?? {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay,
          }
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Reveal.displayName = "Reveal";

export default Reveal;
