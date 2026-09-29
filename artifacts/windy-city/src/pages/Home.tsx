import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiDiscord, SiTwitch, SiKick } from "react-icons/si";
import { ArrowUpRight, ChevronDown, Crown, ExternalLink, Film, MapPin, Menu, Radio, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site-config";

const communityIcon = {
  discord: SiDiscord,
  store: ExternalLink,
  forums: Users,
} as const;

const socialIcon = {
  discord: SiDiscord,
  twitch: SiTwitch,
  kick: SiKick,
  external: ExternalLink,
} as const;

const navLinks = [
  { label: "Trailer", href: "#trailer" },
  { label: "Community", href: "#community" },
  { label: "Factions", href: "#factions" },
  { label: "Team", href: "#team" },
];

function ExternalAnchor({ href, children, className, onClick, ariaLabel }: { href: string; children: ReactNode; className?: string; onClick?: () => void; ariaLabel?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const heroY = useTransform(scrollY, [0, 520], [0, 130]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="street-shell site-noise min-h-[100dvh] overflow-x-hidden text-foreground">
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || menuOpen ? "border-b border-white/10 bg-background/90 py-3 backdrop-blur-xl" : "bg-transparent py-5"}`} aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between gap-6 px-5 md:px-8">
          <a href="/" className="group flex shrink-0 items-center gap-3" data-testid="link-brand-home">
            <img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
            <span className="display-type text-xl font-bold tracking-wide text-foreground sm:text-2xl">
              {siteConfig.brand.shortName} <span className="text-primary">/ {siteConfig.brand.descriptor}</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.16em] md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-primary" data-testid={`link-nav-${link.label.toLowerCase()}`}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button asChild className="hidden h-10 rounded-sm bg-primary px-5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0_hsl(var(--accent))] transition-transform hover:-translate-y-0.5 hover:bg-primary md:inline-flex">
              <ExternalAnchor href={siteConfig.links.discord} ariaLabel="Join The Streets Chicago Discord">Enter the city <ArrowUpRight className="ml-2 h-4 w-4" /></ExternalAnchor>
            </Button>
            <button className="rounded-sm border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} data-testid="button-mobile-menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <motion.div initial={false} animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden border-t border-white/10 md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-sm px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary" data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                {link.label}
              </a>
            ))}
            <ExternalAnchor href={siteConfig.links.discord} onClick={() => setMenuOpen(false)} className="mt-2 rounded-sm bg-primary px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground" ariaLabel="Join The Streets Chicago Discord">
              Enter the city
            </ExternalAnchor>
          </div>
        </motion.div>
      </nav>

      <main>
        <section className="relative flex min-h-[100dvh] items-end overflow-hidden pb-20 pt-32 md:items-center md:pb-0">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-65" poster={siteConfig.brand.logo}>
              <source src={siteConfig.brand.heroVideo} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[62%] bg-[linear-gradient(180deg,rgba(255,135,20,0.62)_0%,rgba(231,83,13,0.3)_42%,transparent_100%)] mix-blend-color" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(24_17%_7%/.98)_0%,hsl(24_17%_7%/.8)_38%,hsl(24_17%_7%/.25)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,hsl(24_17%_7%)_0%,transparent_30%,hsl(24_17%_7%/.45)_100%)]" />
            <div className="hero-grid absolute inset-0 opacity-60" />
          </div>
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container relative z-10 mx-auto px-5 md:px-8">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="section-label">Chicago / FiveM roleplay / est. now</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className="display-type max-w-4xl text-[4.4rem] font-bold uppercase leading-[0.82] text-foreground sm:text-[6.6rem] md:text-[9.2rem]">
                Make your<br /><span className="text-primary">name</span> here.
              </motion.h1>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.52 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="h-14 rounded-sm bg-primary px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[5px_5px_0_hsl(var(--accent))] hover:bg-primary/90">
                  <ExternalAnchor href={siteConfig.links.discord} ariaLabel="Join The Streets Chicago Discord">Join the Discord <SiDiscord className="ml-3 h-5 w-5" /></ExternalAnchor>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 rounded-sm border-white/20 bg-black/20 px-8 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary">
                  <a href="#trailer" data-testid="link-explore-city">See the trailer <ChevronDown className="ml-3 h-5 w-5" /></a>
                </Button>
              </motion.div>
            </div>
            <div className="mt-16 flex max-w-2xl items-center gap-8 border-t border-white/15 pt-5 text-[0.65rem] uppercase tracking-[0.17em] text-muted-foreground md:absolute md:bottom-10 md:right-8 md:mt-0 md:border-t-0 md:pt-0">
              <span className="flex items-center gap-2"><Radio className="h-3.5 w-3.5 text-primary" /> Live world</span>
              <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Chicago, IL</span>
              <span className="hidden sm:inline">Your story starts at street level</span>
            </div>
          </motion.div>
        </section>

        <motion.section id="trailer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.65 }} className="py-24 md:py-36">
          <div className="container mx-auto max-w-6xl px-5 md:px-8">
             <div className="mb-10"><div><p className="section-label mb-4">Trailer</p><h2 className="display-type text-5xl font-bold uppercase leading-none md:text-7xl">See the city<br /><span className="text-primary">after dark.</span></h2></div></div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative aspect-video overflow-hidden border border-white/15 bg-black/30">
              {siteConfig.trailerUrl ? <iframe src={siteConfig.trailerUrl} title="The Streets Chicago official trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" data-testid="video-trailer" /> : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,hsl(28_12%_16%),hsl(24_17%_7%))] p-6 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center border border-primary/50 text-primary"><Film className="h-7 w-7" /></div>
                  <p className="section-label mb-3">Trailer / in production</p>
                  <h3 className="display-type text-4xl font-bold uppercase">Coming soon.</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">The next chapter is being shot. Check back when the lights come on.</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="community" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.65 }} className="border-y border-white/10 bg-[hsl(28_12%_10%)] py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
             <div className="mb-14 max-w-2xl"><p className="section-label mb-4">Community</p><h2 className="display-type text-5xl font-bold uppercase leading-none md:text-7xl">Find your<br /><span className="text-primary">entry point.</span></h2></div>
            <div className="grid gap-4 md:grid-cols-3">
              {siteConfig.communityLinks.map((link, index) => {
                const Icon = communityIcon[link.kind];
                return <motion.div key={link.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ y: -5, scale: 1.01 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><ExternalAnchor href={link.url} className="lift group flex h-full items-center gap-5 border border-white/10 bg-background p-5 hover:border-primary/60 hover:bg-primary/[0.04]" ariaLabel={`Open ${link.name}`}>
                  <img src={link.avatar} alt={`${link.name} avatar`} className="h-14 w-14 rounded-full object-cover grayscale transition-all group-hover:grayscale-0" />
                  <div className="min-w-0 flex-1"><div className="mb-1 flex items-center gap-2"><h3 className="font-bold">{link.name}</h3><Icon className="h-3.5 w-3.5 text-primary" /></div><p className="text-sm text-muted-foreground">{link.description}</p></div><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </ExternalAnchor></motion.div>;
              })}
            </div>
          </div>
        </motion.section>

        <motion.section id="factions" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.65 }} className="py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
             <div className="mb-14"><div><p className="section-label mb-4">Factions</p><h2 className="display-type text-5xl font-bold uppercase leading-none md:text-7xl">Every block<br /><span className="text-primary">has a code.</span></h2></div></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {siteConfig.factionLinks.map((link) => <motion.div key={link.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, scale: 1.01 }} viewport={{ once: true }} transition={{ duration: 0.4 }}><ExternalAnchor href={link.url} className="lift group relative flex min-h-52 flex-col justify-end overflow-hidden border border-white/10 bg-background p-6 hover:border-primary/60" ariaLabel={`Open ${link.name} community`}><img src={link.avatar} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-35 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" /><div className="relative z-10"><h3 className="display-type text-3xl font-bold uppercase">{link.name}</h3><p className="mt-1 text-sm text-muted-foreground">{link.description}</p></div><ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-primary opacity-60 transition-opacity group-hover:opacity-100" /></ExternalAnchor></motion.div>)}
            </div>
          </div>
        </motion.section>

        <motion.section id="team" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.65 }} className="border-t border-white/10 bg-black/20 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-14"><p className="section-label mb-4">Team</p><h2 className="display-type text-5xl font-bold uppercase leading-none md:text-7xl">Built by<br /><span className="text-primary">people who care.</span></h2></div>
            <div className="grid gap-6 lg:grid-cols-3">
              {siteConfig.owners.map((owner, index) => <motion.div key={owner.name} id={`owner-${index}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, scale: 1.01 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group flex h-full flex-col border border-white/10 bg-background p-7"><div className="mb-7 flex items-center justify-between">{owner.photo ? <img src={owner.photo} alt={`${owner.name}, ${owner.role}`} className="h-20 w-20 rounded-full border border-primary/50 object-cover grayscale transition-all group-hover:grayscale-0" /> : <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-primary/[0.08] display-type text-2xl font-bold text-primary" aria-label={`${owner.name}, ${owner.role}`}>{owner.initials}</div>}<Crown className="h-5 w-5 text-primary" /></div><p className="section-label mb-2">{owner.role}</p><h3 className="display-type text-4xl font-bold uppercase">{owner.name}</h3><div className="mt-auto flex min-h-24 flex-wrap content-end gap-2 border-t border-white/10 pt-5">{owner.socials.map((social) => { const SocialIcon = socialIcon[social.type]; return <ExternalAnchor key={`${owner.name}-${social.href}`} href={social.href} className="inline-flex items-center gap-1.5 border border-white/10 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary" ariaLabel={`${owner.name} ${social.label}`}><SocialIcon className="h-3 w-3" />{social.label}</ExternalAnchor>; })}</div></motion.div>)}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-background py-8">
        <div className="container mx-auto flex flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
          <a href="/" className="flex items-center gap-3 opacity-75" data-testid="link-footer-brand"><img src={siteConfig.brand.logo} alt="The Streets Chicago logo" className="h-8 w-8 object-contain grayscale" /><span className="display-type text-xl font-bold tracking-wide">{siteConfig.brand.shortName} <span className="text-primary">/ {siteConfig.brand.descriptor}</span></span></a>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground"><span>© {new Date().getFullYear()} {siteConfig.brand.name}</span><span className="hidden text-primary/50 sm:inline">/</span><ExternalAnchor href={siteConfig.links.guidelines} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary" ariaLabel="Read server guidelines">Server guidelines <ExternalLink className="h-3 w-3" /></ExternalAnchor></div>
          <ExternalAnchor href={siteConfig.links.discord} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground" ariaLabel="Join The Streets Chicago Discord">Join the city <ArrowUpRight className="h-4 w-4" /></ExternalAnchor>
        </div>
      </footer>
    </div>
  );
}