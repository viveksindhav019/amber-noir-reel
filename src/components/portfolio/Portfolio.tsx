import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const filters = [
  "All", "Branded Content", "Music Video", "Short Film",
  "Documentary", "Social Media", "Commercial",
];

type Project = {
  title: string;
  client: string;
  category: string;
  duration: string;
  span: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Just Move Campaign",
    client: "Nike",
    category: "Commercial",
    duration: "2:35",
    span: "md:col-span-2 md:row-span-2 aspect-square",
    gradient: "from-amber/40 via-red-900/40 to-background",
  },
  {
    title: "'Raat Ko' Music Video",
    client: "Priya Malik",
    category: "Music Video",
    duration: "3:48",
    span: "aspect-[4/5]",
    gradient: "from-purple-900/40 via-pink-900/30 to-background",
  },
  {
    title: "The Last Fisherman",
    client: "Indie Doc",
    category: "Documentary",
    duration: "18:20",
    span: "aspect-[4/5]",
    gradient: "from-teal/40 via-blue-900/30 to-background",
  },
  {
    title: "Monsoon Social Series",
    client: "Zomato",
    category: "Social Media",
    duration: "0:30",
    span: "md:col-span-2 aspect-[16/9]",
    gradient: "from-orange-900/40 via-red-800/30 to-background",
  },
  {
    title: "Echoes — Short Film",
    client: "MIFF Selection",
    category: "Short Film",
    duration: "12:00",
    span: "aspect-[4/5]",
    gradient: "from-emerald-900/30 via-amber/20 to-background",
  },
  {
    title: "Festive Product Launch",
    client: "Nykaa",
    category: "Commercial",
    duration: "1:15",
    span: "aspect-[4/5]",
    gradient: "from-pink-900/40 via-amber/20 to-background",
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Stories I've <span className="italic text-amber">Told</span></>}
          subtitle="Click any project to watch the full edit."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all ${
                  active === f
                    ? "border-amber bg-amber text-background"
                    : "border-border text-foreground/70 hover:border-amber/60 hover:text-amber"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className={p.span}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <a
      href="#"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      className={`group relative block w-full h-full overflow-hidden bg-surface border border-border hover:border-amber/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(245,166,35,0.2)]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`} />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(245,166,35,0.35), transparent 60%)`,
        }}
      />

      {/* Film strip texture */}
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_8px,rgba(0,0,0,0.5)_8px,rgba(0,0,0,0.5)_16px)] opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_8px,rgba(0,0,0,0.5)_8px,rgba(0,0,0,0.5)_16px)] opacity-50" />

      {/* Badges */}
      <div className="absolute top-5 left-5 z-10">
        <span className="px-3 py-1 rounded-full bg-teal/20 backdrop-blur-md border border-teal/40 text-teal font-mono text-[10px] tracking-widest uppercase">
          {project.category}
        </span>
      </div>
      <div className="absolute top-5 right-5 z-10 font-mono text-xs text-foreground/90 bg-background/50 backdrop-blur-sm px-2 py-1">
        {project.duration}
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-background via-background/80 to-transparent">
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
          {project.client}
        </p>
        <h3 className="font-editorial text-2xl md:text-3xl text-foreground leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-4 z-20">
        <div className="w-16 h-16 rounded-full bg-amber text-background flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play size={24} fill="currentColor" />
        </div>
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber">View Project</span>
      </div>
    </a>
  );
}
