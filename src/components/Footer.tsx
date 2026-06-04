export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="line-gold opacity-20 absolute top-0 inset-x-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-light tracking-widest"
              style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
            >
              DUBAI MALL
            </p>
            <p className="text-xs text-muted-foreground/40 mt-1">
              Emaar Properties — Downtown Dubai, UAE
            </p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center text-xs text-muted-foreground/40">
            {["Leasing", "Sponsorship", "Events", "Media Kit", "Contact"].map(
              (l) => (
                <span key={l}>{l}</span>
              ),
            )}
          </div>
          <p className="text-xs text-muted-foreground/30">
            © 2026 Emaar Properties
          </p>
        </div>
      </div>
    </footer>
  );
}
