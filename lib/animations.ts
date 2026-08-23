import type { Transition, Variants } from "framer-motion";

export const flowTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const requestFlow: Variants = {
  animate: {
    left: ["2%", "50%", "98%"],
    transition: flowTransition,
  },
};

export const checkmarkPulse: Variants = {
  animate: {
    opacity: [0, 0, 1, 1, 0],
    transition: flowTransition,
  },
};
