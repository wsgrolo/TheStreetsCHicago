import logo from "@/assets/thestreets-chicago-logo.webp";
import heroVideo from "@/assets/hero-bg.mp4";
import factionCommunityAvatar from "@/assets/social/factions/faction-community.png";
import realEstateAvatar from "@/assets/social/factions/real-estate.png";
import familyLegaciesAvatar from "@/assets/social/factions/family-legacies.png";
import schoolAvatar from "@/assets/social/factions/school.png";
import departmentOfJusticeAvatar from "@/assets/social/factions/department-of-justice.png";
import medicalServicesAvatar from "@/assets/social/factions/medical-services.png";
import civilianRoleplayAvatar from "@/assets/social/factions/civilian-roleplay.png";
import ayedentvAvatar from "@/assets/social/owners/ayedentv.png";
import yodadaAvatar from "@/assets/social/owners/yodada.webp";
import tebexAvatar from "@/assets/social/tebex.png";
import forumsAvatar from "@/assets/social/forums.png";
import grinchAvatar from "@/assets/social/owners/grinch.webp";
export const siteConfig = {
  brand: {
    name: "The Streets Chicago",
    shortName: "THE STREETS",
    descriptor: "CHICAGO RP",
    logo,
    heroVideo,
  },
  links: {
    discord: "https://discord.gg/thestreetsrp",
    store: "https://thestreetsrp.tebex.io/",
    guidelines: "https://thestreetschicago.com/",
  },
  trailerUrl: "https://www.youtube.com/embed/XwZGzwCXJbU?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1",
  communityLinks: [
    { name: "Main City", url: "https://discord.gg/thestreetsrp", avatar: logo, kind: "discord", description: "Get in the room where it starts" },
    { name: "Tebex Store", url: "https://thestreetsrp.tebex.io/", avatar: tebexAvatar, kind: "store", description: "Back the city you play in" },
    { name: "Website / Forums", url: "https://thestreetschicago.com/", avatar: forumsAvatar, kind: "forums", description: "Read the code before you move" },
  ],
  factionLinks: [
    { name: "The Streets : Factions", url: "https://discord.gg/7apPvyuF4u", avatar: factionCommunityAvatar, description: "Find your people" },
    { name: "The Streets Real Estate", url: "https://discord.gg/sF4eGVnfD7", avatar: realEstateAvatar, description: "Build your place in the city" },
    { name: "The Streets : Family Legacies", url: "https://discord.gg/kru8k22DHd", avatar: familyLegaciesAvatar, description: "Make a name that lasts" },
    { name: "TSRP: Hyde Park Academy High School", url: "https://discord.gg/Cr2ffMDF5G", avatar: schoolAvatar, description: "Learn, connect, and find your path" },
    { name: "The Streets Department Of Justice", url: "https://discord.gg/6qu4rJCdwQ", avatar: departmentOfJusticeAvatar, description: "Courts, law, and justice" },
    { name: "TSRP: NorthWest Medical Center", url: "https://discord.gg/fAA9nGgJAA", avatar: medicalServicesAvatar, description: "Care for the city" },
    { name: "The Streets: Civilian Roleplay", url: "https://discord.gg/DdbwcrHJ9q", avatar: civilianRoleplayAvatar, description: "Make a life outside the headlines" },
  ],
  owners: [
    {
      name: "AyedenTV",
      role: "Founder & Owner",
      initials: "AY",
      photo: ayedentvAvatar,
      color: "from-primary/30 to-primary/5",
      socials: [
        { label: "Twitch", href: "https://www.twitch.tv/ayedentv", type: "twitch" },
        { label: "Main Discord", href: "https://discord.gg/thestreetsrp", type: "discord" },
        { label: "Jungles RP", href: "https://discord.gg/junglesrp", type: "discord" },
        { label: "Discord", href: "https://discord.gg/wGZxEJUwdp", type: "discord" },
      ],
      links: [
        { label: "YouTube", href: "https://www.youtube.com/@AyedenTV", type: "external" },
        { label: "Twitter / X", href: "https://x.com/AyedenTV", type: "external" },
      ],
    },
    {
      name: "Yodada",
      role: "Founder & Owner",
      initials: "YO",
      photo: yodadaAvatar,
      color: "from-primary/20 to-primary/5",
      socials: [
        { label: "Socials", href: "https://yodadasocials.lovable.app/", type: "external" },
        { label: "Kick", href: "https://kick.com/yodadalive", type: "kick" },
      ],
      links: [
        { label: "YouTube", href: "https://www.youtube.com/@Yodada", type: "external" },
      ],
    },
    {
      name: "Grinch",
      role: "Founder & Owner",
      initials: "GR",
      photo: grinchAvatar,
      color: "from-accent/30 to-accent/5",
      socials: [
        { label: "Socials", href: "https://grinchsocials.lovable.app/", type: "external" },
        { label: "Kick", href: "https://kick.com/grinch", type: "kick" },
      ],
      links: [
        { label: "YouTube", href: "https://www.youtube.com/@Grinch", type: "external" },
      ],
    },
  ],
} as const;