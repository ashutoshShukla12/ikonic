import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Instagram />
        <Marquee />
        <About />
        <Services />
        <Team />
        <Products />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
