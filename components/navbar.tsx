import Link from "next/link";

const navigation = [
  { name: "Architecture", href: "/architecture" },
  { name: "Blog", href: "/blog" },
  {
    name: "Docs",
    href: "https://docs.parmanasystems.com/",
    external: true,
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-900"
        >
          Parmana
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}