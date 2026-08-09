"use client";

import {
  ShieldCheck,
  Landmark,
  Building2,
  Scale,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    icon: Landmark,
    title: "Authority",
    description:
      "Execution reflects the authority defined by the institution.",
  },
  {
    icon: CheckCircle2,
    title: "Determinism",
    description:
      "The same request evaluated under the same policies always produces the same decision.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Authority remains consistent, transparent, and verifiable throughout execution.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description:
      "Every authorization decision is accompanied by verifiable evidence.",
  },
];

const institutions = [
  "Enterprises",
  "Financial Institutions",
  "Governments",
  "Regulators",
  "Healthcare",
  "Critical Infrastructure",
  "Public Sector",
];

export default function Company() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Company
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Authority Infrastructure
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Authority is the foundation of every institution.
          </p>

          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Businesses operate through policies. Financial institutions
              operate through controls. Governments operate through laws.
              Every institution relies on authority to govern execution.
            </p>

            <p>
              Parmana provides the infrastructure that ensures institutional
              authority remains in control of execution, regardless of who
              or what requests it. AI agents are one source of execution
              risk, not the only one, and Parmana is built to remain
              agnostic to who or what makes the request.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Mission</h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Build the infrastructure that enables institutions to retain
              authority over execution, regardless of who or what initiates
              it. AI agents are accelerating the need for this, but the
              mission does
              not depend on any one technology.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Vision</h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A world where every execution reflects the authority of the
              institution it serves.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-semibold">What We Build</h3>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-600">
            Parmana is authority infrastructure. It evaluates execution
            requests against institutional policies, determines whether
            execution is authorized, and produces verifiable evidence for
            every decision.
          </p>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-semibold">Principles</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-8"
                >
                  <Icon className="mb-5 h-8 w-8 text-blue-600" />

                  <h4 className="text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-semibold">Built for Institutions</h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {institutions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border px-5 py-4"
              >
                <Building2 className="h-5 w-5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl border bg-gray-50 p-12">
          <h3 className="text-3xl font-semibold">Our Commitment</h3>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-600">
            We believe authority should remain clear, consistent, and
            verifiable wherever execution occurs.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 font-medium">
            Parmana ensures institutions don&apos;t lose authority over what
            becomes real, no matter who or what requests it. AI may decide.
            You
            decide what becomes real.
          </p>
        </div>
      </div>
    </section>
  );
}