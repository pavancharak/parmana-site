import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parmana Systems | The trust layer for every action",
  description:
    "Parmana checks every action, by a person or a machine, against the limits your business sets, and keeps proof of what happened.",
  metadataBase: new URL("https://parmanasystems.com"),
  alternates: { canonical: "/" },
  twitter: { card: "summary" },
  openGraph: {
    title: "Parmana Systems | The trust layer for every action",
    description:
      "Every action stays within what your business allowed. Parmana checks each one and keeps the proof.",
    url: "https://parmanasystems.com",
    siteName: "Parmana Systems",
    type: "website",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Parmana Systems",
  url: "https://parmanasystems.com/",
  sameAs: ["https://docs.parmanasystems.com/"],
};

const productData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Parmana",
  applicationCategory: "BusinessApplication",
  description:
    "Checks AI agent actions against your business rules, asks for approval when needed, and keeps a record of why each action was allowed or stopped.",
  url: "https://parmanasystems.com/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
        {children}
      </body>
    </html>
  );
}
