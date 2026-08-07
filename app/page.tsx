import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Clients from "@/app/components/Clients";
import Edge from "@/app/components/Edge";
import Domains from "@/app/components/Domains";
import Programs from "@/app/components/Programs";
import Process from "@/app/components/Process";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Edge />
        <Domains />
        <Programs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
