import Banner from "@/components/Banner";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Product from "@/components/Product";
import SignUp from "@/components/SignUp";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Product />
      <EverythingYouNeed />
      <Pricing />
      <Testimonials />
      <SignUp />
      <Footer />
    </main>
  );
}
