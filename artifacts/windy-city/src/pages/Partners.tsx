import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ArrowLeft, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/windycity-logo.png";

const partners: { name: string; description: string; url?: string }[] = [];

export default function Partners() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Features", href: "/#features" },
    { label: "Community", href: "/#community" },
    { label: "Factions", href: "/#factions" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/5 py-3">
        <div className="container mx-auto px-6 flex items-center gap-0">
          <a href="/" className="flex items-center gap-3 group pr-8 border-r border-white/10">
            <img src={logo} alt="Windy City RP Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              WINDY CITY <span className="text-primary">RP</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium flex-1 justify-center px-8 border-r border-white/10">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className={`transition-colors ${l.href === "/partners" ? "text-white font-semibold" : "text-muted-foreground hover:text-white"}`}>{l.label}</a>
            ))}
          </div>

          <div className="pl-8 ml-auto flex items-center gap-3">
            <a
              href="/"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
              data-testid="link-back-home"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="md:hidden overflow-hidden border-t border-white/5"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium px-4 py-3 rounded-lg transition-colors ${l.href === "/partners" ? "text-white bg-white/5" : "text-muted-foreground hover:text-white hover:bg-white/5"}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://discord.com/invite/windycityrp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm font-bold bg-primary text-primary-foreground px-4 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Our <span className="text-primary">Partners</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              The communities and organisations that help make Windy City Roleplay what it is.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners grid — populated once partners are added */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {partners.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-32 gap-6"
            >
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={logo} alt="Windy City" className="h-14 w-14 object-contain grayscale opacity-40" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-white/60">Partners Coming Soon</h2>
                <p className="text-muted-foreground max-w-md">
                  We are building our network of partner communities. Check back soon or reach out via Discord to enquire about a partnership.
                </p>
              </div>
              <a
                href="https://discord.com/invite/windycityrp"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-partner-discord"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                Contact Us on Discord
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col gap-3">
                      <h3 className="font-bold text-lg">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{partner.description}</p>
                      {partner.url && (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium mt-auto"
                        >
                          Visit <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background py-8">
        <div className="container mx-auto px-6 flex items-center justify-center gap-3 opacity-40">
          <img src={logo} alt="Logo" className="h-6 w-auto grayscale" />
          <span className="text-sm font-bold tracking-tight">WINDY CITY RP</span>
        </div>
      </footer>
    </div>
  );
}
