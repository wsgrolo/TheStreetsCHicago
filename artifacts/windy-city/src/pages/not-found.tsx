import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function NotFound() {
  return (
    <div className="street-shell site-noise relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-5 text-foreground">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 max-w-xl text-center">
        <img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="mx-auto mb-8 h-16 w-16 object-contain" />
        <p className="section-label mb-4">Error 404 / wrong block</p>
        <h1 className="display-type text-6xl font-bold uppercase leading-[0.9] md:text-8xl">
          This street<br /><span className="text-primary">doesn't exist.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-sm text-muted-foreground">The page you're looking for moved, got shut down, or was never on the map.</p>
        <a href="/" className="mt-9 inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0_hsl(var(--accent))] transition-transform hover:-translate-y-0.5" data-testid="link-404-home">
          <ArrowLeft className="h-4 w-4" /> Back to the city
        </a>
      </div>
    </div>
  );
}
