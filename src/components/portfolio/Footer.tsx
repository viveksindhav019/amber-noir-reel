export function Footer() {
  return (
    <footer className="border-t border-amber/30">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 border border-amber text-amber font-display text-xl">AM</span>
            <div>
              <p className="font-editorial text-lg text-foreground">Alex Morgan</p>
              <p className="font-mono text-xs text-muted-foreground tracking-wider">Video Editor & Storyteller</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap md:justify-center gap-6">
          {["Work", "About", "Services", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-mono text-xs tracking-widest uppercase text-foreground/70 hover:text-amber transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="md:text-right text-sm text-foreground/70 space-y-1">
          <p>Currently based in Mumbai 🌙</p>
          <p className="text-muted-foreground">Open to remote projects worldwide</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs text-muted-foreground">
          <p>© 2025 Alex Morgan — All Frames Reserved</p>
          <p>Crafted with obsession & too much coffee ☕</p>
        </div>
      </div>
    </footer>
  );
}
