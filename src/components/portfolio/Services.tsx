import { Film, Palette, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Film,
    title: "Narrative Editing",
    body: "Raw footage has no soul — I give it one. From assembly to final export, I shape your story with precision pacing, seamless transitions, and emotional rhythm.",
    tags: ["Long-form", "Reels", "Documentaries"],
  },
  {
    icon: Palette,
    title: "Color Grading & LUTs",
    body: "Color is the emotion your audience feels before they understand why. I create cinematic grades that match your brand's visual identity and amplify mood.",
    tags: ["DaVinci Resolve", "Custom LUTs", "HDR"],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics & VFX",
    body: "Titles that breathe. Transitions that flow. Effects that feel inevitable. I add the layer of motion design that makes good videos feel premium.",
    tags: ["After Effects", "C4D", "Lower Thirds"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="WHAT I DO"
          title={<>Every Frame. Every Story. <span className="italic text-amber">Every Time.</span></>}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative h-full bg-background border-t-[3px] border-amber border-x border-x-border border-b border-b-border p-8 hover:shadow-[0_0_60px_rgba(245,166,35,0.18)] transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/40 text-amber flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-background transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="font-editorial text-2xl mb-4 text-foreground">{s.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{s.body}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="mt-auto inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-amber group/link">
                  Start A Project
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
