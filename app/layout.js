import "./globals.css";

export const metadata = {
  title: "Parmana | Business authority for AI actions",
  description:
    "If the business has not authorized it, AI cannot do it. Parmana checks AI actions before execution and records evidence for review and audit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
