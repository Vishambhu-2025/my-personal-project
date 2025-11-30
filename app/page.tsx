import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";
import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Services />
      {/* <Clients /> */}
      <Footer />
    </main>
  );
}
