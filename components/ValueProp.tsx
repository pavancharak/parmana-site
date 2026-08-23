import {
  ShieldExclamationIcon,
  ScaleIcon,
  UserGroupIcon,
  DocumentMagnifyingGlassIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const items = [
  { title: "Prevent unintended actions", icon: ShieldExclamationIcon },
  { title: "Apply business rules consistently", icon: ScaleIcon },
  { title: "Keep people involved when required", icon: UserGroupIcon },
  { title: "Understand why every action happened", icon: DocumentMagnifyingGlassIcon },
  { title: "Adopt AI with confidence", icon: CheckBadgeIcon },
];

export default function ValueProp() {
  return (
    <section id="value-prop" className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          The challenge isn&apos;t intelligence anymore. It&apos;s control.
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-bg-light p-6 flex flex-col items-center text-center gap-3"
            >
              <item.icon className="h-12 w-12 text-primary" aria-hidden="true" />
              <p className="text-base font-bold text-text-primary">{item.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-base leading-[1.6] text-text-secondary text-center max-w-[800px] mx-auto">
          Parmana makes sure AI only does what your business allows. It sits between AI and the
          systems AI interacts with. It checks every action before it happens. If the action
          follows your rules, it proceeds. If not, it stops.
        </p>
      </div>
    </section>
  );
}
