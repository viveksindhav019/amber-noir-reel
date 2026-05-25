import { Play, ArrowDown, Youtube, Instagram, Linkedin, Video } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,166,35,0.10) 0%, transparent 55%)",
        }}
      />

      {/* Floating diagonal film strips */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.10]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-20 w-[200%] flex gap-2 animate-float-strip"
            style={{
              top: `${15 + i * 30}%`,
              left: "-50%",
              animationDuration: `${40 + i * 10}s`,
              animationDelay: `-${i * 8}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div
                key={j}
                className="h-full w-32 border border-amber/60 shrink-0 flex items-center justify-center"
              >
                <div className="w-full h-1.5 border-y border-amber/40" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <p
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-teal mb-8 opacity-0"
          style={{ animation: "fade-up 0.8s 0.1s forwards" }}
        >
          [ AVAILABLE FOR PROJECTS &nbsp;·&nbsp; 2025 ]
        </p>

        <h1
          className="font-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] text-foreground text-glow-amber opacity-0"
          style={{ animation: "fade-up 0.9s 0.25s forwards" }}
        >
          ALEX MORGAN
        </h1>

        <p
          className="font-editorial italic text-xl md:text-3xl text-foreground/80 mt-6 opacity-0"
          style={{ animation: "fade-up 0.9s 0.45s forwards" }}
        >
          Cinematic Editor. Visual Storyteller. Frame Architect.
        </p>

        <p
          className="text-muted-foreground text-base md:text-lg mt-6 max-w-xl mx-auto opacity-0"
          style={{ animation: "fade-up 0.9s 0.6s forwards" }}
        >
          Transforming raw footage into emotions that last forever.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 opacity-0"
          style={{ animation: "fade-up 0.9s 0.75s forwards" }}
        >
          <a
            href="#work"
            className="btn-shimmer animate-pulse-glow inline-flex items-center gap-3 bg-amber text-background font-mono text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-amber/90 transition-colors"
          >
            <Play size={16} fill="currentColor" />
            Watch My Reel
          </a>
          <a
            href="#work"
            className="btn-shimmer inline-flex items-center gap-3 border border-foreground/40 text-foreground font-mono text-xs tracking-[0.25em] uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-foreground/60">
            {[Video, Youtube, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-amber transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 text-foreground/60">
            <ArrowDown size={16} className="animate-bounce-slow text-amber" />
            <span className="font-mono text-[10px] tracking-[0.4em]">SCROLL</span>
          </div>

          <div className="font-mono text-xs tracking-widest text-foreground/70">
            <span className="text-amber">127</span> PROJECTS DELIVERED
          </div>
        </div>
      </div>
    </section>
  );
}
