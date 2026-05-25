import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 127, suffix: "+", label: "Projects Delivered" },
  { value: 43, suffix: "", label: "Global Clients" },
  { value: 12, suffix: "M+", label: "Views Generated" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
            else setN(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl text-amber text-glow-amber">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-surface border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center ${
              i !== 0 ? "md:border-l md:border-amber/30" : ""
            } ${i % 2 !== 0 ? "border-l border-amber/30 md:border-l" : ""}`}
          >
            <Counter to={s.value} suffix={s.suffix} />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-3">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
