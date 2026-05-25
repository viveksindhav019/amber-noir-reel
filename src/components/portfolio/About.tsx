import { MapPin, Star, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const tools = [
  "Premiere Pro", "After Effects", "DaVinci Resolve",
  "Final Cut Pro", "Cinema 4D", "Audition", "Photoshop", "Figma",
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        {/* Left */}
        <Reveal className="lg:col-span-5">
          <div className="relative flex">
            <div className="sprocket w-5 shrink-0" />
            <div
              className="flex-1 aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-surface via-background to-surface"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 20%, rgba(245,166,35,0.25), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(46,196,182,0.15), transparent 60%)",
              }}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22n%22><feTurbulence baseFrequency=%220.8%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')] mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6 font-display text-7xl text-foreground/30 leading-none">
                ALEX<br/>MORGAN
              </div>
            </div>
            <div className="sprocket w-5 shrink-0" />
          </div>

          <div className="mt-6 flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/40 text-teal font-mono text-xs">
              <MapPin size={14} /> MUMBAI, INDIA
            </span>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber fill-amber" />
              ))}
              <span className="font-mono text-xs text-muted-foreground ml-2">
                Rated 5.0 by 43 clients
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <div className="lg:col-span-7 space-y-8">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.4em] text-teal">[ WHO I AM ]</p>
          </Reveal>
          <Reveal>
            <h2 className="font-editorial text-5xl md:text-6xl leading-[1.05] text-foreground">
              I Don't Edit Videos.<br/>
              <span className="italic">I Build </span>
              <span className="italic text-amber">Emotions.</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-5 text-foreground/75 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Every frame tells a story. Every cut changes a feeling. I'm Alex Morgan — a Mumbai-based cinematic video editor with 6+ years of experience turning chaotic footage into stories that stop people from scrolling.
              </p>
              <p>
                I've worked with global brands, independent filmmakers, YouTube creators, and advertising agencies — delivering everything from 15-second social reels to 90-minute documentary features. My workflow is obsessively detail-oriented, deadline-driven, and always story-first.
              </p>
              <p>
                When I'm not in the edit suite, I'm studying film theory, breaking down color grades from iconic cinema, or hiking somewhere with terrible Wi-Fi and great lighting.
              </p>
            </div>
          </Reveal>

          <div className="h-px bg-gradient-to-r from-amber/60 via-amber/20 to-transparent" />

          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
              <span className="text-amber">•</span> TOOLS I MASTER
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-amber/30 bg-amber/5 text-foreground/90 text-sm hover:bg-amber/15 hover:border-amber/60 hover:shadow-[0_0_20px_rgba(245,166,35,0.25)] transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="h-px bg-gradient-to-r from-amber/60 via-amber/20 to-transparent" />

          <Reveal>
            <a
              href="#"
              className="group inline-flex items-center gap-3 border border-amber text-amber font-mono text-xs tracking-[0.25em] uppercase px-6 py-4 hover:bg-amber hover:text-background transition-colors"
            >
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              Download My CV
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
