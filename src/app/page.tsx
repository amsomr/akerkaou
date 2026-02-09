import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import BoardMembers from "@/components/BoardMembers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-zinc-900 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <BoardMembers />
      <Footer />
    </main>
  );
}
