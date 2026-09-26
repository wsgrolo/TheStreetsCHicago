import logo from "@/assets/windycity-logo.png";
import heroVideo from "@/assets/hero-bg.mp4";
import discordAvatar from "@/assets/social/discord.png";
import tebexAvatar from "@/assets/social/tebex.png";
import forumsAvatar from "@/assets/social/forums.png";
import factionAvatar from "@/assets/social/faction.png";
import cpdAvatar from "@/assets/social/cpd.png";
import bmcAvatar from "@/assets/social/bmc.png";
import judiciaryAvatar from "@/assets/social/judiciary.png";
import civilianAvatar from "@/assets/social/civilian.png";
import owner1Avatar from "@/assets/social/owner1.png";
import owner2Avatar from "@/assets/social/owner2.png";
import owner3Avatar from "@/assets/social/owner3.png";

/**
 * REPLACEMENT PANEL
 * Brand assets and external links live here so the next logo, trailer, and URLs
 * can be swapped without searching through page markup.
 */
export const siteConfig = {
  brand: {
    name: "The Streets Chicago",
    shortName: "THE STREETS",
    descriptor: "CHICAGO RP",
    logo,
    heroVideo,
  },
  links: {
    discord: "https://discord.com/invite/windycityrp",
    store: "https://windycityrp.tebex.io/",
    guidelines: "https://windycity.community.forum/threads/server-guidelines.1/",
  },
  // Leave blank until the replacement trailer URL is ready. No broken embed is rendered.
  trailerUrl: "",
  communityLinks: [
    { name: "Main City", url: "https://discord.com/invite/windycityrp", avatar: discordAvatar, kind: "discord", description: "Get in the room where it starts" },
    { name: "Tebex Store", url: "https://windycityrp.tebex.io/", avatar: tebexAvatar, kind: "store", description: "Back the city you play in" },
    { name: "Forums", url: "https://windycity.community.forum/threads/server-guidelines.1/", avatar: forumsAvatar, kind: "forums", description: "Read the code before you move" },
  ],
  factionLinks: [
    { name: "Faction Community", url: "https://discord.com/invite/R2FnTbDrry", avatar: factionAvatar, description: "Find your people" },
    { name: "Chicago Police Dept.", url: "https://discord.com/invite/eG6XNQqxYZ", avatar: cpdAvatar, description: "Law enforcement" },
    { name: "Blackstone Medical Center", url: "https://discord.com/invite/UUKQPy3ua3", avatar: bmcAvatar, description: "Medical services" },
    { name: "The Judiciary", url: "https://discord.com/invite/vedbKgMM8d", avatar: judiciaryAvatar, description: "Courts and justice" },
    { name: "Civilian Roleplay", url: "https://discord.com/invite/E3vRam4g4m", avatar: civilianAvatar, description: "Make a life outside the headlines" },
  ],
  owners: [
    {
      name: "Annoying",
      role: "Founder & Owner",
      initials: "AN",
      photo: owner1Avatar,
      bio: "The original architect of this city. Annoying built the first block, set the standard, and keeps the bar high when the easy choice would be enough.",
      color: "from-primary/30 to-primary/5",
      socials: { discord: "", instagram: "https://www.instagram.com/mariohtxx", twitch: "https://www.twitch.tv/annoying", kick: "https://kick.com/annoying" },
    },
    {
      name: "Zarty",
      role: "Founder & Owner",
      initials: "ZA",
      photo: owner2Avatar,
      bio: "The operational engine behind the city. Zarty keeps the systems moving, the staff sharp, and every street ready for the next story.",
      color: "from-primary/20 to-primary/5",
      socials: { discord: "https://discord.com/invite/RxfAHxYFwh", discordLabel: "", instagram: "https://www.instagram.com/blcxvi/", twitch: "https://www.twitch.tv/zartyy", kick: "https://kick.com/zarty" },
    },
    {
      name: "Capp",
      role: "Founder & Owner",
      initials: "CA",
      photo: owner3Avatar,
      bio: "The culture behind the city. Capp drives the faction life, the community energy, and the kind of stories that follow you home.",
      color: "from-accent/30 to-accent/5",
      socials: { discord: "https://discord.com/invite/zjxAsXH", discordLabel: "302", instagram: "https://www.instagram.com/capthagod", twitch: "", kick: "" },
    },
  ],
} as const;