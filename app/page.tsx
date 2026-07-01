import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot";
import Stats from "./components/status";
import Wings from "./components/wings/wings";
import Events from "./components/Events";
import Achievements from "./components/Achievements";
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
    </main>
  );
}