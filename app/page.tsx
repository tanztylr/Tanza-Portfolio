import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import HowIThink from "./components/HowIThink";
import Experience from "./components/Experience";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <Hero />

        <ProjectCarousel />

        <HowIThink />

        <Experience />

        <Beyond />

        <Contact />

      </div>

    </main>
  );
}
