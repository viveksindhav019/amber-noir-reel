import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Reveal";

const items = [
  {
    quote: "Alex doesn't just edit — he thinks. He understood our brand's voice better than some people on our internal team. The Nike reel got 4M views in 72 hours.",
    name: "Rahul Sharma",
    role: "Head of Content, Nike India",
  },
  {
    quote: "Working with Alex felt like a collaboration, not a transaction. He re-cut our documentary three times without complaint until the story sang. Worth every rupee.",
    name: "Meera Iyer",
    role: "Independent Filmmaker",
  },
  {
    quote: "The Zomato monsoon reels Alex made went viral twice. He has this rare instinct for what makes people stop scrolling. Genuinely rare talent.",
    name: "Aditya Khanna",
    role: "Creative Director, Zomato",
  },
  {
    quote: "Delivered a 12-minute festival short in 5 days. Perfect grades, perfect pacing. Won Best Short Film at MIFF 2024. Need I say more?",
    name: "Sneha Patel",
    role: "Director",
  },
];

export function Testimonials() {
  const looped = [...items, ...items];
  return (
    <section className="py-32 overflow-hidden">
      <div className="px-6">
        <SectionHeading
          eyebrow="CLIENT LOVE"
          title={<>Words From the People I've <span className="italic text-amber">Worked With</span></>}
        />
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}>
          {looped.map((t, i) => (
            <article
              key={i}
              className="w-[400px] md:w-[480px] shrink-0 bg-surface border border-border p-8 relative hover:border-amber/50 transition-colors"
            >
              <Quote size={80} className="absolute -top-4 -left-2 text-amber/15" strokeWidth={1} />
              <div className="relative">
                <p className="font-editorial italic text-lg text-foreground/85 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber/40 to-teal/40 flex items-center justify-center font-display text-lg text-background">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-amber fill-amber" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
