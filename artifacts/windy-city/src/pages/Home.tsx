import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiDiscord, SiTiktok, SiYoutube, SiX } from "react-icons/si";
import { ExternalLink, Users, Shield, MapPin, Server, ChevronDown } from "lucide-react";
import logo from "@/assets/windycity-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroVideo from "@/assets/hero-bg.mp4";
import discordAvatar from "@/assets/social/discord.png";
import tebexAvatar from "@/assets/social/tebex.png";
import forumsAvatar from "@/assets/social/forums.png";
import tiktokAvatar from "@/assets/social/tiktok.jpg";
import youtubeAvatar from "@/assets/social/youtube.jpg";
import twitterAvatar from "@/assets/social/twitter.jpg";
import factionAvatar from "@/assets/social/faction.png";
import cpdAvatar from "@/assets/social/cpd.png";
import bmcAvatar from "@/assets/social/bmc.png";
import judiciaryAvatar from "@/assets/social/judiciary.png";
import civilianAvatar from "@/assets/social/civilian.png";

const socialLinks = [
  { name: "Main City", url: "https://discord.com/invite/windycityrp", icon: SiDiscord, avatar: discordAvatar, color: "hover:text-[#5865F2]", accent: "#5865F2", description: "Join our active community" },
  { name: "Tebex Store", url: "https://windycityrp.tebex.io/", icon: ExternalLink, avatar: tebexAvatar, color: "hover:text-primary", accent: "hsl(213 68% 52%)", description: "Support the server" },
  { name: "Forums", url: "https://windycity.community.forum/threads/server-guidelines.1/", icon: Users, avatar: forumsAvatar, color: "hover:text-primary", accent: "hsl(213 68% 52%)", description: "Read the rules" },
  { name: "TikTok", url: "https://www.tiktok.com/@windy.city23", icon: SiTiktok, avatar: tiktokAvatar, color: "hover:text-[#00f2fe]", accent: "#69C9D0", description: "Watch our clips" },
  { name: "YouTube", url: "https://www.youtube.com/@WindyCityChicagoRP", icon: SiYoutube, avatar: youtubeAvatar, color: "hover:text-[#FF0000]", accent: "#FF0000", description: "Server highlights" },
  { name: "Twitter/X", url: "https://x.com/WindyCityRP", icon: SiX, avatar: twitterAvatar, color: "hover:text-white", accent: "#e7e9ea", description: "Latest updates" }
];

const factionLinks = [
  { name: "Faction Community", url: "https://discord.com/invite/R2FnTbDrry", avatar: factionAvatar, description: "All factions hub" },
  { name: "Chicago Police Dept.", url: "https://discord.com/invite/eG6XNQqxYZ", avatar: cpdAvatar, description: "Law enforcement" },
  { name: "Blackstone Medical Center", url: "https://discord.com/invite/UUKQPy3ua3", avatar: bmcAvatar, description: "Medical services" },
  { name: "The Judiciary", url: "https://discord.com/invite/vedbKgMM8d", avatar: judiciaryAvatar, description: "Courts & justice" },
  { name: "Civilian Roleplay", url: "https://discord.com/invite/E3vRam4g4m", avatar: civilianAvatar, description: "Civilian life" },
];

const features = [
  { icon: Shield, title: "Serious Roleplay", description: "Immersive, high-quality roleplay with dedicated players and strict moderation." },
  { icon: MapPin, title: "Chicago Setting", description: "Experience a meticulously crafted world inspired by the gritty streets of Chicago." },
  { icon: Users, title: "Active Community", description: "Join hundreds of active players, supportive staff, and endless storylines." },
  { icon: Server, title: "Premium Performance", description: "Optimized FiveM framework ensuring smooth gameplay and reliable uptime." }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center gap-0">
          <a href="#" className="flex items-center gap-3 group pr-8 border-r border-white/10">
            <img src={logo} alt="Windy City RP Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">WINDY CITY <span className="text-primary">RP</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium flex-1 justify-center px-8 border-r border-white/10">
            <a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Features</a>
            <a href="#community" className="text-muted-foreground hover:text-white transition-colors">Community</a>
            <a href="#factions" className="text-muted-foreground hover:text-white transition-colors">Factions</a>
            <a href="/partners" className="text-muted-foreground hover:text-white transition-colors">Partners</a>
          </div>

          <div className="pl-8 ml-auto">
            <Button asChild className="rounded-full px-6 font-bold shadow-[0_0_15px_rgba(74,130,214,0.35)] hover:shadow-[0_0_25px_rgba(74,130,214,0.65)] transition-all border-none bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://discord.com/invite/windycityrp" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <motion.div 
          style={{ opacity, y }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo} 
            alt="Windy City Logo" 
            className="w-48 md:w-64 mb-8 drop-shadow-2xl" 
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
          >
            Welcome to the <br /> <span className="text-primary drop-shadow-[0_0_20px_rgba(74,130,214,0.55)] bg-none bg-primary text-transparent bg-clip-text">Windy City</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            A premium FiveM roleplay experience set in the heart of Chicago. Serious RP, dedicated community, and endless possibilities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild className="rounded-full px-8 text-base font-bold h-14 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://discord.com/invite/windycityrp" target="_blank" rel="noopener noreferrer">
                <SiDiscord className="mr-2 h-5 w-5" /> Join Discord
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-base font-bold h-14 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <a href="https://windycityrp.tebex.io/" target="_blank" rel="noopener noreferrer">
                Visit Store
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">The City That <span className="text-primary">Never Sleeps</span></h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Windy City Roleplay is a top-tier FiveM server pushing the boundaries of what's possible in GTA V. We focus on high-quality, serious roleplay in a custom-built Chicago environment. Whether you want to enforce the law, run the streets, or build a legitimate empire, your story starts here.
            </p>
          </motion.div>

          <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="bg-white/[0.02] border-white/5 hover:border-primary/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section id="trailer" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              See It In <span className="text-primary">Action</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch the official server trailer and see what Windy City Roleplay is all about.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(74,130,214,0.12)]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/vZh03_1kCsM?rel=0&modestbranding=1"
              title="Windy City Roleplay — Official Server Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="video-trailer"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Community / Links Section */}
      <section id="community" className="py-24 relative bg-black/50">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Connect With <span className="text-primary">Us</span></h2>
            <p className="text-muted-foreground">Join our massive community across all platforms.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group block outline-none"
              >
                <Card className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500" />
                  <CardContent className="p-6 flex items-center gap-5 relative z-10">
                    <div className="relative flex-shrink-0">
                      <img
                        src={link.avatar}
                        alt={link.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/25 transition-all"
                      />
                      <div
                        className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center bg-card border border-white/10"
                      >
                        <link.icon className="h-3 w-3" style={{ color: link.accent }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/20 ml-auto group-hover:text-white/50 transition-colors" />
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Faction Communities Section */}
      <section id="factions" className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              Faction <span className="text-primary">Communities</span>
            </h2>
            <p className="text-muted-foreground">Join a faction and find your role in the city.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factionLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group block outline-none"
                data-testid={`link-faction-${idx}`}
              >
                <Card className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-[#5865F2]/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/0 group-hover:from-[#5865F2]/5 to-transparent transition-colors duration-500" />
                  <CardContent className="p-6 flex items-center gap-5 relative z-10">
                    <div className="relative flex-shrink-0">
                      <img
                        src={link.avatar}
                        alt={link.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#5865F2]/40 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center bg-card border border-white/10">
                        <SiDiscord className="h-3 w-3 text-[#5865F2]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-[#5865F2] transition-colors">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/20 ml-auto group-hover:text-white/50 transition-colors" />
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-50">
            <img src={logo} alt="Logo" className="h-8 w-auto grayscale" />
            <span className="font-bold tracking-tight">WINDY CITY RP</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-muted-foreground text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Windy City Roleplay. All rights reserved.</span>
            <a
              href="https://windycity.community.forum/threads/server-guidelines.1/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-guidelines"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 hover:text-white transition-all text-xs font-medium"
            >
              <Users className="h-3 w-3" />
              Server Guidelines
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors p-2"
                aria-label={link.name}
              >
                <link.icon className={`h-5 w-5 ${link.color}`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}