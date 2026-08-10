import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold">Parmana</h3>

            <p className="mt-6 text-neutral-400 leading-8">
              Parmana ensures institutions don&apos;t lose authority over
              what becomes real, no matter who or what requests it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Learn
              </p>

              <Link
                href="/why"
                className="block text-neutral-300 hover:text-white"
              >
                Why
              </Link>

              <Link
                href="/architecture"
                className="block text-neutral-300 hover:text-white"
              >
                Architecture
              </Link>

              <Link
                href="/faq"
                className="block text-neutral-300 hover:text-white"
              >
                FAQ
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Company
              </p>

              <Link
                href="/company"
                className="block text-neutral-300 hover:text-white"
              >
                Company
              </Link>

              <Link
                href="/contact"
                className="block text-neutral-300 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Parmana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}