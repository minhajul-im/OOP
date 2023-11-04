import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Contact Section */}
      <Contact />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
