import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Works />
      <About />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
