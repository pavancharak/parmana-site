"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  IdentificationIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { requestFlow, checkmarkPulse } from "@/lib/animations";

const boxes = [
  { label: "Any Actor", icon: IdentificationIcon },
  { label: "Parmana", icon: ShieldCheckIcon },
  { label: "Business System", icon: BuildingOffice2Icon },
];

export default function Diagram({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={compact ? "w-full" : "max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20"}>
      {!compact && (
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center mb-12">
          How authorization works
        </h2>
      )}
      <span className="sr-only">
        Diagram: any actor, AI agent, human, application, or automated system, sends a
        request. Parmana checks it against your authorization rules. The request either
        proceeds to the business system or is refused.
      </span>

      <div
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
        aria-hidden="true"
      >
        <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border-light" />

        {!reduceMotion && (
          <motion.div
            className="hidden md:block absolute top-1/2 -translate-y-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"
            variants={requestFlow}
            animate="animate"
          />
        )}

        {boxes.map((box, i) => (
          <div
            key={box.label}
            className="relative z-10 flex flex-col items-center gap-3 rounded-lg border border-border-light bg-white px-6 py-6 w-full md:w-auto md:flex-1"
          >
            {i === 1 && (
              <motion.div
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-success"
                variants={reduceMotion ? undefined : checkmarkPulse}
                animate={reduceMotion ? { opacity: 1 } : "animate"}
              >
                <svg viewBox="0 0 20 20" fill="white" className="h-4 w-4">
                  <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L8.3 11.6l6.3-6.3a1 1 0 011.4 0z" />
                </svg>
              </motion.div>
            )}
            <box.icon className="h-12 w-12 text-text-primary" />
            <span className="text-sm font-bold text-text-primary">{box.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
