import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.4em] text-teal mb-5">[ {eyebrow} ]</p>
      </Reveal>
      <Reveal>
        <h2 className="font-editorial text-5xl md:text-6xl leading-tight text-foreground">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal>
          <p className="text-muted-foreground mt-5 text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
