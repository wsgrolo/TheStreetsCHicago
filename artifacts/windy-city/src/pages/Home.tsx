import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiDiscord, SiTwitch, SiKick } from "react-icons/si";
import { ArrowUpRight, ChevronDown, Crown, Film, Menu, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageAnchor, SectionHeading } from "@/components/ui/primitives";
import { siteConfig } from "@/site-config";

const communityIcon = {
  discord: SiDiscord,
  forums: Users,
} as const;

const socialIcon = {
  discord: SiDiscord,
  twitch: SiTwitch,
  kick: SiKick,
} as const;

const navLinks = [
  { label: "Trailer", href: "#trailer" },
  { label: "Community", href: "#community" },
  { label: "Factions", href: "#factions" },
  { label: "Team", href: "#team" },
];

type CommunityIconName = (typeof communityIcon)[keyof typeof communityIcon];
type SocialIconName = (typeof socialIcon)[keyof typeof socialIcon];

type CommunityKind = (typeof communityIcon)[keyof typeof communityIcon];
type SocialType = (typeof socialIcon)[keyof typeof socialIcon];


function isIconKind<T extends Record<string, React.ElementType>>(map: T, key: string): key is Extract<keyof T, string> {
  return key in map;
}

const tickerItems = [
  "Serious roleplay",
  "Chicago neighborhoods",
  "Custom factions",
  "Active staff",
  "Real economy",
  "Your story",
];


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const heroY = useTransform(scrollY, [0, 520], [0, 130]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="street-shell site-noise min-h-[100dvh] overflow-x-hidden text-foreground">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "border-b border-white/10 bg-background/90 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between gap-6 px-5 md:px-8">
          <a href="/" className="group flex shrink-0 items-center gap-3" data-testid="link-brand-home">
            <img
              src={siteConfig.brand.logo}
              alt="The Streets Chicago logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="display-type text-xl font-bold tracking-wide text-foreground sm:text-2xl">
              {siteConfig.brand.shortName}{" "}
              <span className="text-primary">/ {siteConfig.brand.descriptor}</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.16em] md:flex">
            {navLinks.map((link) => (
              <PageAnchor
                key={link.label}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </PageAnchor>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button className="hidden h-10 rounded-sm bg-primary px-5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0_hsl(var(--accent))] transition-transform hover:-translate-y-0.5 hover:bg-primary md:inline-flex">
              <PageAnchor href={siteConfig.links.discord} ariaLabel="Join The Streets Chicago Discord">
                Enter the city <ArrowUpRight className="ml-2 h-4 w-4" />
              </PageAnchor>
            </Button>
            <button
              className="rounded-sm border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              data-testid="button-mobile-menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="overflow-hidden border-t border-white/10 md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <PageAnchor
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </PageAnchor>
            ))}
            <PageAnchor
              href={siteConfig.links.discord}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-sm bg-primary px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground"
              ariaLabel="Join The Streets Chicago Discord"
            >
              Enter the city
            </PageAnchor>
          </div>
        </motion.div>
      </nav>

      <main>
        <section className="relative flex min-h-[100dvh] items-end overflow-hidden pb-20 pt-32 md:items-center md:pb-0">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover opacity-65"
            >
              <source src={siteConfig.brand.heroVideo} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[62%] bg-[linear-gradient(180deg,rgba(255,135,20,0.62)_0%,rgba(231,83,13,0.3)_42%,transparent_100%)] mix-blend-color" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(24_17%_7%/.98)_0%,hsl(24_17%_7%/.8)_38%,hsl(24_17%_7%/.25)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,hsl(24_17%_7%)_0%,transparent_30%,hsl(24_17%_7%/.45)_100%)]" />
            <div className="hero-grid absolute inset-0 opacity-60" />
          </div>
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container relative z-10 mx-auto px-5 md:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-primary" />
                <span className="section-label">Chicago / FiveM roleplay</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="display-type max-w-4xl text-[4.4rem] font-bold uppercase leading-[0.82] text-foreground sm:text-[6.6rem] md:text-[9.2rem]"
              >
                Make your
                <br />
                <span className="text-primary drop-shadow-[0_0_40px_hsl(var(--primary)/0.45)]">
                  name
                </span>{" "}
                here.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32 }}
                className="mt-7 max-w-xl border-l-2 border-accent pl-5 text-base leading-relaxed text-foreground/80 md:text-lg"
              >
                Serious, story-driven FiveM roleplay rooted in Chicago&apos;s neighborhoods. Pick a
                side, build a reputation, and leave a legacy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.52 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Button size="lg" className="h-14 rounded-sm bg-primary px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[5px_5px_0_hsl(var(--accent))] hover:bg-primary/90">
                  <PageAnchor href={siteConfig.links.discord} ariaLabel="Join The Streets Chicago Discord">
                    Join the Discord <SiDiscord className="ml-3 h-5 w-5" />
                  </PageAnchor>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-sm border-white/20 bg-black/20 px-8 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <PageAnchor href="#trailer" data-testid="link-explore-city">
                    See the trailer <ChevronDown className="ml-3 h-5 w-5" />
                  </PageAnchor>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <div
          className="relative overflow-hidden border-y border-primary/40 bg-primary py-3 text-primary-foreground"
          aria-hidden="true"
        >
          <div className="ticker flex w-max gap-10 whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="display-type flex items-center gap-10 text-2xl font-bold uppercase tracking-wide"
              >
                {item}{" "}
                <span className="h-2 w-2 rotate-45 bg-accent" />
              </span>
            ))}
          </div>
        </div>

        <motion.section
          id="trailer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="py-24 md:py-36"
        >
          <div className="container mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading
              index="01"
              label="Official trailer"
              title="See the"
              accent="city."
              blurb="A first look at the blocks, the badges, and the people who run them."
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video overflow-hidden border border-white/15 bg-black/30"
            >
              {siteConfig.trailerUrl ? (
                <iframe
                  src={siteConfig.trailerUrl}
                  title="The Streets Chicago official trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  data-testid="video-trailer"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,hsl(28_12%_16%),hsl(24_17%_7%))] p-6 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center border border-primary/50 text-primary">
                    <Film className="h-7 w-7" />
                  </div>
                  <p className="section-label mb-3">Trailer / in production</p>
                  <h3 className="display-type text-4xl font-bold uppercase">Coming soon.</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    The next chapter is being shot. Check back when the lights come on.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="community"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="border-y border-white/10 bg-[hsl(28_12%_10%)] py-24 md:py-32"
        >
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              index="02"
              label="Community hubs"
              title="Plug"
              accent="in."
              blurb="Everything starts in the main Discord. Support the city and read the rules before you hit the streets."
            />
            <div className="grid gap-4 md:grid-cols-3">                {siteConfig.communityLinks.map(
                (link: { readonly name: string; readonly url: string; readonly avatar: string; readonly kind: "discord" | "store" | "forums"; readonly description: string }, index) => {
                const Icon = isIconKind(communityIcon, link.kind) ? (communityIcon[link.kind] as CommunityIconName) : Users;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PageAnchor
                      href={link.url}
                      className="group transition-colors duration-300 group flex h-full items-center gap-5 border border-white/10 bg-background p-5 hover:border-primary/60 hover:bg-primary/[0.04]"
                      ariaLabel={`Open ${link.name}`}
                    >
                      <img
                        src={link.avatar}
                        alt={`${link.name} avatar`}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 rounded-full object-cover grayscale transition-all group-hover:grayscale-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-bold">{link.name}</h3>
                          <Icon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </PageAnchor>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="factions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="py-24 md:py-32"
        >
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              index="03"
              label="Faction servers"
              title="Pick your"
              accent="side."
              blurb="Law, medicine, family, school, real estate — every corner of the city has its own crew."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.factionLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <PageAnchor
                    href={link.url}
                    className="group transition-colors duration-300 group relative flex min-h-52 flex-col justify-end overflow-hidden border border-white/10 bg-background p-6 hover:border-primary/60"
                    ariaLabel={`Open ${link.name} community`}
                  >
                    <img
                      src={link.avatar}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-35 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="relative z-10">
                      <h3 className="display-type text-3xl font-bold uppercase">{link.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-primary opacity-60 transition-opacity group-hover:opacity-100" />
                  </PageAnchor>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="team"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="border-t border-white/10 bg-black/20 py-24 md:py-32"
        >
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading index="04" label="Leadership" title="Run by" accent="the founders." />
            <div className="grid gap-6 lg:grid-cols-3">
              {siteConfig.owners.map((owner, index) => (
                <motion.div
                  key={owner.name}
                  id={`owner-${index}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex h-full flex-col border border-white/10 bg-background p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    {owner.photo ? (
                      <img
                        src={owner.photo}
                        alt={`${owner.name}, ${owner.role}`}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-20 rounded-full border border-primary/50 object-cover grayscale transition-all group-hover:grayscale-0"
                      />
                    ) : (
                      <div
                        className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-primary/[0.08] display-type text-2xl font-bold text-primary"
                        aria-label={`${owner.name}, ${owner.role}`}
                      >
                        {owner.initials}
                      </div>
                    )}
                    <Crown className="h-5 w-5 text-primary" />
                  </div>
                  <p className="section-label mb-2">{owner.role}</p>
                  <h3 className="display-type text-4xl font-bold uppercase">{owner.name}</h3>
                  <div className="mt-auto flex min-h-24 flex-wrap content-end gap-2 border-t border-white/10 pt-5">
                    {owner.socials.map(
                      (social: { readonly label: string; readonly href: string; readonly type: "twitch" | "external" | "discord" | "kick" }) => {
                      const SocialIcon = isIconKind(socialIcon, social.type) ? (socialIcon[social.type] as SocialIconName) : X;
                      return (
                        <PageAnchor
                          key={`${owner.name}-${social.href}`}
                          href={social.href}
                          className="inline-flex items-center gap-1.5 border border-white/10 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                          ariaLabel={`${owner.name} ${social.label}`}
                        >
                          <SocialIcon className="h-3 w-3" />
                          {social.label}
                        </PageAnchor>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-background py-8">
        <div className="container mx-auto flex flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
          <a
            href="/"
            className="flex items-center gap-3 opacity-75"
            data-testid="link-footer-brand"
          >
            <img
              src={siteConfig.brand.logo}
              alt="The Streets Chicago logo"
              className="h-8 w-8 object-contain grayscale"
            />
            <span className="display-type text-xl font-bold tracking-wide">
              {siteConfig.brand.shortName}{" "}
              <span className="text-primary">/ {siteConfig.brand.descriptor}</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} {siteConfig.brand.name}</span>
            <span className="hidden text-primary/50 sm:inline">/</span>
            <PageAnchor
              href={siteConfig.links.guidelines}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              ariaLabel="Read server guidelines"
            >
              Server guidelines <ArrowUpRight className="h-3 w-3" />
            </PageAnchor>
            <span className="hidden text-primary/50 sm:inline">/</span>
            <PageAnchor
              href="/partners"
              className="transition-colors hover:text-primary"
              data-testid="link-footer-partners"
            >
              Partners
            </PageAnchor>
          </div>
          <PageAnchor
            href={siteConfig.links.discord}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
            ariaLabel="Join The Streets Chicago Discord"
          >
            Join the city <ArrowUpRight className="h-4 w-4" />
          </PageAnchor>
        </div>
      </footer>
    </div>
  );
}
