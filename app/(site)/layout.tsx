import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Inner pages keep the shared Header/Footer. The homepage renders its own nav and footer.
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
