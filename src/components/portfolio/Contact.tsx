import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Film, Youtube, Instagram, Linkedin, Video } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Animated mesh */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.78 0.16 65) 0%, transparent 40%), linear-gradient(225deg, oklch(0.74 0.11 190) 0%, transparent 40%)",
          backgroundSize: "200% 200%",
          animation: "mesh 20s ease-in-out infinite alternate",
        }}
      />
      <Film className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-amber opacity-[0.04]" strokeWidth={0.5} />
      <style>{`@keyframes mesh { 0%{background-position:0% 0%,100% 100%} 100%{background-position:100% 100%,0% 0%} }`}</style>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.4em] text-teal mb-6">[ GET IN TOUCH ]</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-foreground text-glow-amber">
              GOT A STORY<br/>TO TELL?
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-foreground/70 text-lg mt-8 max-w-md leading-relaxed">
              Whether you have a brief ready or just a rough idea in your head — I want to hear it. Let's figure out together how to make it cinematic.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 space-y-4">
              {[
                { Icon: Mail, t: "alex@alexmorganedits.com" },
                { Icon: Phone, t: "+91 98765 43210" },
                { Icon: MapPin, t: "Mumbai, Maharashtra, India" },
                { Icon: Clock, t: "Response within 24 hours" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-4 text-foreground/85">
                  <Icon size={18} className="text-amber" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber/15 border border-amber/50 text-amber font-mono text-xs tracking-widest uppercase animate-pulse-glow">
              <CheckCircle2 size={14} /> Currently Accepting New Projects
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex items-center gap-6 text-foreground/60">
              {[
                { Icon: Video, l: "Vimeo" },
                { Icon: Youtube, l: "YouTube" },
                { Icon: Instagram, l: "Instagram" },
                { Icon: Linkedin, l: "LinkedIn" },
              ].map(({ Icon, l }) => (
                <a key={l} href="#" className="flex items-center gap-2 hover:text-amber transition-colors text-sm">
                  <Icon size={16} /> <span className="font-mono text-xs">{l}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Form */}
        <Reveal>
          <form onSubmit={submit} className="bg-surface/60 backdrop-blur-sm border border-border p-8 md:p-10 space-y-6">
            {[
              { label: "Your Name *", placeholder: "What should I call you?", type: "text", required: true },
              { label: "Email Address *", placeholder: "Where do I send the magic?", type: "email", required: true },
            ].map((f) => (
              <Field key={f.label} {...f} />
            ))}

            <SelectField
              label="Project Type"
              options={["Brand Video", "Music Video", "Documentary", "Short Film", "Social Media", "Wedding", "Other"]}
            />
            <SelectField
              label="Budget Range"
              options={["Under ₹25K", "₹25K – ₹75K", "₹75K – ₹2L", "₹2L+", "Let's Discuss"]}
            />

            <div>
              <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Tell Me About Your Project *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your vision, timeline, references — anything helps."
                className="w-full bg-background/60 border border-border focus:border-amber focus:shadow-[0_0_0_3px_rgba(245,166,35,0.15)] focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all resize-none"
              />
            </div>

            <Field label="How Did You Find Me?" placeholder="Google, referral, Instagram...?" type="text" />

            <button
              type="submit"
              disabled={loading || sent}
              className="btn-shimmer w-full bg-amber text-background font-mono text-sm tracking-[0.25em] uppercase py-4 hover:bg-amber/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : sent ? (
                <><CheckCircle2 size={16} /> Sent — I'll Be In Touch</>
              ) : (
                <>🎬 Send It — Let's Create</>
              )}
            </button>

            <p className="text-center text-muted-foreground text-xs">
              🔒 Your details are safe. No spam. Ever. I respond personally to every message.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type, required }: { label: string; placeholder: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background/60 border border-border focus:border-amber focus:shadow-[0_0_0_3px_rgba(245,166,35,0.15)] focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</label>
      <select className="w-full bg-background/60 border border-border focus:border-amber focus:outline-none px-4 py-3 text-foreground transition-all">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
