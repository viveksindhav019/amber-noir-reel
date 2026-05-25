import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Morgan — Cinematic Video Editor & Visual Storyteller" },
      { name: "description", content: "Mumbai-based cinematic video editor with 6+ years crafting brand films, music videos, documentaries and social content for global clients." },
      { property: "og:title", content: "Alex Morgan — Cinematic Video Editor" },
      { property: "og:description", content: "Transforming raw footage into emotions that last forever." },
    ],
  }),
});

function Index() {
  return (
    <main className="grain bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
