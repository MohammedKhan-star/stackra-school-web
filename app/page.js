import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About School */}
        <About />

        {/* 3. Academics */}
        <Academics />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Contact */}
        <Contact />

        {/* 6. Google Map */}
        <GoogleMap />
      </main>

      <Footer />
    </>
  );
}