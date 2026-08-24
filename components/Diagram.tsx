"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { requestFlow, checkmarkPulse } from "@/lib/animations";

const boxes = [
  {
    label: "Payment Request",
    icon: CreditCardIcon,
  },
  {
    label: "Parmana",
    icon: ShieldCheckIcon,
  },
  {
    label: "Proof of Authorization",
    icon: DocumentCheckIcon,
  },
  {
    label: "Payment System",
    icon: BuildingOffice2Icon,
  },
];

export default function Diagram({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={
        compact
          ? "w-full"
          : "max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20"
      }
    >
      {!compact && (
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center mb-12">
          Before the payment happens
        </h2>
      )}

      <span className="sr-only">
        Diagram: a payment request is sent to Parmana. Parmana checks the
        request against business rules and creates proof of authorization.
        The payment system can then verify the authorization before executing
        the payment.
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
            className="relative z-10 flex flex-col items-center justify-center gap-3 rounded-lg border border-border-light bg-white px-5 py-6 w-full md:flex-1 min-h-[150px]"
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

            <box.icon className="h-10 w-10 text-text-primary" />

            <span className="text-sm font-bold text-text-primary text-center max-w-[150px]">
              {box.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-base font-bold text-text-primary">
          Request → Check your rules → Prove authorization → Execute
        </p>

        <p className="mt-2 text-sm leading-[1.6] text-text-secondary max-w-[640px] mx-auto">
          The payment system verifies the authorization before the payment is
          allowed to happen.
        </p>
      </div>
    </div>
  );
}