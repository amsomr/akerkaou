import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import BoardMembers from "@/components/BoardMembers";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stats />
      <About />
      <BoardMembers />
    </>
  );
}
