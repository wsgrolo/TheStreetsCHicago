import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Menu, Users, X } from "lucide-react";
import { siteConfig } from "@/site-config";
import { Card, CardContent } from "@/components/ui/card";

const navLinks = [
  { label: "Trailer", href: "/#trailer" },
  { label: "Community", href: "/#community" },
  { label: "Factions", href: "/#factions" },
  { label: "Team", href: "/#team" },
];

const partners: { name: string; description: string; url?: string }[] = [];

export default function Partners() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="street-shell site-noise min-h-[100dvh] overflow-x-hidden text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/90 py-3 backdrop-blur-xl" aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between gap-6 px-5 md:px-8">
          <a href="/" className="group flex shrink-0 items-center gap-3" data-testid="link-brand-home">
            <img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
            <span className="display-type text-xl font-bold tracking-wide sm:text-2xl">{siteConfig.brand.shortName} <span className="text-primary">/ {siteConfig.brand.descriptor}</span></span>
          </a>
          <div className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.16em] md:flex">
            {navLinks.map((link) => <a key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-primary" data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:flex" data-testid="link-back-home"><ArrowLeft className="h-4 w-4" /> Back home</a>
            <button className="rounded-sm border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} data-testid="button-mobile-menu">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        <motion.div initial={false} animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden border-t border-white/10 md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-5 py-4">
             {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-sm px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary" data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</a>)}
            <a href="/" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground"><ArrowLeft className="h-4 w-4" /> Back home</a>
          </div>
        </motion.div>
      </nav>

      <main className="pt-28">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-50" />
          <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
               <p className="section-label mb-5">Partner directory</p>
              <div className="mark-rule mb-7 w-36" />
              <h1 className="display-type text-6xl font-bold uppercase leading-[0.82] md:text-9xl">The people<br />who move the<br /><span className="text-primary">city forward.</span></h1>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/20 py-20 pb-32 md:py-28">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            {partners.length === 0 ? (
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid items-center gap-12 border border-white/10 bg-background p-8 md:grid-cols-[0.7fr_1.3fr] md:p-14">
                <div className="relative mx-auto flex h-44 w-44 items-center justify-center border border-primary/30 bg-primary/[0.04] md:mx-0"><div className="absolute inset-4 border border-primary/15" /><img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="h-28 w-28 object-contain grayscale opacity-50" /></div>
                <div><p className="section-label mb-4">Partner roster / pending</p><h2 className="display-type text-5xl font-bold uppercase leading-none md:text-7xl">The first names<br /><span className="text-primary">are coming.</span></h2><a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0_hsl(var(--accent))] transition-transform hover:-translate-y-0.5" data-testid="link-partner-discord">Talk to the city <ArrowUpRight className="h-4 w-4" /></a></div>
              </motion.div>
            ) : (
               <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{partners.map((partner) => <motion.div key={partner.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}><Card className="h-full border-white/10 bg-background transition-colors hover:border-primary/60"><CardContent className="flex h-full flex-col gap-4 p-7"><p className="font-mono text-xs text-primary">PARTNER</p><h3 className="display-type text-3xl font-bold uppercase">{partner.name}</h3><p className="flex-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>{partner.url && <a href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary" data-testid={`link-partner-${partner.name}`}>Visit <ExternalLink className="h-3.5 w-3.5" /></a>}</CardContent></Card></motion.div>)}</div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-background py-8">
        <div className="container mx-auto flex flex-col justify-between gap-5 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
          <a href="/" className="flex items-center gap-3" data-testid="link-footer-brand"><img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="h-7 w-7 object-contain grayscale" /><span className="display-type text-xl font-bold text-foreground">{siteConfig.brand.shortName} <span className="text-primary">/ {siteConfig.brand.descriptor}</span></span></a>
          <span>© {new Date().getFullYear()} {siteConfig.brand.name}</span>
          <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary" data-testid="link-footer-discord">Join the city <Users className="h-4 w-4" /></a>
        </div>
      </footer>
    </div>
  );
}