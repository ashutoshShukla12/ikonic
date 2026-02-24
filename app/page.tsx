import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import GiftCards from "@/components/GiftCards";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Team />
        <Products />
        <Testimonial />
        <Gallery />
        <GiftCards />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
