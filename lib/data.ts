export const siteConfig = {
  name: "Cosmos",
  title: "Cosmos — Explore the Infinite Universe",
  description:
    "Discover galaxies, stars and cosmic phenomena through immersive interactive experiences. A real-time WebGL journey through space.",
  url: "https://space-view-demo.vercel.app",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Statistics", href: "#statistics" },
  { label: "Timeline", href: "#timeline" },
  { label: "Planets", href: "#planets" },
  { label: "Resources", href: "#resources" },
];

export const resources = [
  {
    title: "NASA Eyes",
    url: "https://eyes.nasa.gov",
    description:
      "Real-time 3D map of the solar system with every active mission and spacecraft in it.",
  },
  {
    title: "Stellarium Web",
    url: "https://stellarium-web.org",
    description:
      "A planetarium in the browser: the night sky from wherever you are, right now.",
  },
  {
    title: "100,000 Stars",
    url: "https://stars.chromeexperiments.com",
    description:
      "A Chrome experiment that lets you fly through our stellar neighborhood.",
  },
  {
    title: "ESASky",
    url: "https://sky.esa.int",
    description:
      "Interactive sky atlas built on real observations from dozens of space telescopes.",
  },
  {
    title: "Astronomy Picture of the Day",
    url: "https://apod.nasa.gov/apod/",
    description:
      "NASA has posted one space photo with a short explanation every day since 1995.",
  },
  {
    title: "Solar System Scope",
    url: "https://www.solarsystemscope.com",
    description:
      "A 3D model of the solar system you can spin, scale and fast-forward.",
  },
];

export const aboutItems = [
  {
    title: "Galaxies",
    description:
      "Gravitationally bound islands of stars, gas and dark matter. From majestic spirals to ancient ellipticals, each one holds billions of solar systems.",
  },
  {
    title: "Black Holes",
    description:
      "Regions where gravity warps spacetime beyond escape. Supermassive giants anchor entire galaxies, bending light itself around their event horizons.",
  },
  {
    title: "Nebulas",
    description:
      "Vast clouds of dust and ionized gases. Stellar nurseries where gravity slowly sculpts collapsing matter into newborn stars.",
  },
  {
    title: "Exoplanets",
    description:
      "Worlds orbiting distant suns. Over 5,000 confirmed so far: scorched gas giants, frozen super-Earths, and a few that might just harbor life.",
  },
];

export const stats = [
  { value: 100, decimals: 0, suffix: "B+", label: "Galaxies", detail: "in the observable universe" },
  { value: 13.8, decimals: 1, suffix: "B", label: "Years", detail: "since the Big Bang" },
  { value: 2, decimals: 0, suffix: "T+", label: "Stars", detail: "estimated across all galaxies" },
  { value: 95, decimals: 0, suffix: "%", label: "Dark Matter & Energy", detail: "of the universe remains unseen" },
];

export const timelineEvents = [
  {
    era: "13.8 billion years ago",
    title: "Big Bang",
    description:
      "Space, time and energy erupt from a single point. Within minutes, the first hydrogen and helium nuclei form in a rapidly cooling universe.",
  },
  {
    era: "13.6 billion years ago",
    title: "Formation of the Milky Way",
    description:
      "Primordial gas clouds collapse and merge, seeding the halo and disk of our home galaxy around a growing supermassive black hole.",
  },
  {
    era: "4.6 billion years ago",
    title: "Solar System",
    description:
      "A shockwave compresses a molecular cloud. The Sun ignites, and leftover dust accretes into planets, moons, comets and asteroids.",
  },
  {
    era: "4.5 billion years ago",
    title: "Earth",
    description:
      "A molten proto-planet cools beneath a young sky. Oceans condense, continents drift, and chemistry edges toward biology.",
  },
  {
    era: "Now",
    title: "Today",
    description:
      "A species on a small rocky world builds telescopes and spacecraft, and begins mapping the universe that made it.",
  },
];

export interface PlanetInfo {
  name: string;
  type: string;
  description: string;
  tags: string[];
  colors: { a: string; b: string; c: string; atmosphere: string };
  hasRing: boolean;
}

export const planets: PlanetInfo[] = [
  {
    name: "Aurelia",
    type: "Gas Giant",
    description:
      "A storm-wrapped giant with amethyst cloud bands and a ring of shattered ice, circling its star once every 84 years.",
    tags: ["1.9 M⊕", "Ringed", "9 moons"],
    colors: { a: "#2e1065", b: "#a78bfa", c: "#f0abfc", atmosphere: "#a78bfa" },
    hasRing: true,
  },
  {
    name: "Cryon",
    type: "Ice World",
    description:
      "An ocean sealed beneath kilometers of fractured ice. Geysers at its south pole hint at liquid water, and possibly more.",
    tags: ["0.8 M⊕", "Subsurface ocean", "-180°C"],
    colors: { a: "#0c4a6e", b: "#38bdf8", c: "#e0f2fe", atmosphere: "#7dd3fc" },
    hasRing: false,
  },
  {
    name: "Ember",
    type: "Lava World",
    description:
      "Tidally locked against its red dwarf, its dayside is a sea of molten rock that glows bright enough to be seen light-years away.",
    tags: ["1.2 M⊕", "Tidally locked", "1,400°C"],
    colors: { a: "#450a0a", b: "#f97316", c: "#fde047", atmosphere: "#fb923c" },
    hasRing: false,
  },
];
