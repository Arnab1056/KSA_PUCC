import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot";
import Stats from "./components/status";
import Wings from "./components/wings/wings";
import Events from "./components/Events";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Snapshot />
      <Stats />
      <Wings />
      <Events />
      <Achievements />
      <Testimonials />
      <CTASection />
       <Footer />
    </main>
  );
}