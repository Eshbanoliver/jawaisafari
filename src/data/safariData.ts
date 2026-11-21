import { IMAGES } from './images';

export const BUSINESS_INFO = {
  name: "JAWAI SAFARI HUB",
  tagline: "The Wild Side of Rajasthan",
  subtitle: "Where The Wild Meets The Untamed.",
  description: "Discover the extraordinary wilderness of Jawai. Experience thrilling leopard safaris, dramatic landscapes, and unforgettable encounters with nature.",
  phone: "+91 76900 00774",
  phoneRaw: "+917690000774",
  whatsappNumber: "917690000774",
  email: "info@jawaisafarihub.com",
  location: "Jawai, Rajasthan, India",
  coordinates: "25.1176° N, 73.1349° E",
  googleMapsEmbedIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.535061643604!2d73.13486607537936!3d25.117595277762113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e57df18c8c19%3A0x4738a83b2e8d8e94!2sJAWAI%20SAFARI%20HUB!5e0!3m2!1sen!2sin!4v1795236010416!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`,
  operatingHours: "Morning Safaris: 05:30 AM – 09:30 AM | Evening Safaris: 04:00 PM – 07:30 PM",
};

export interface ExperienceItem {
  number: string;
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  highlights: string[];
  durationPlaceholder: string;
  bestTime: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    number: "01",
    id: "leopard-safari",
    title: "Leopard Safari",
    shortDescription: "Explore the rocky landscapes of Jawai and discover its famous leopard habitat.",
    detailedDescription: "Embark on an exhilarating quest across ancient granite kopjes where wild Indian leopards roam free without fences. Guided by expert local spotters who have tracked leopard families across generations, each drive offers unparalleled photographic angles in golden hour light.",
    image: IMAGES.experiences.leopardSafari,
    highlights: [
      "Track free-roaming leopards on ancient granite rocks",
      "Morning & evening golden-hour drives",
      "Expert local wildlife trackers & spotters",
      "High vantage point photography opportunities"
    ],
    durationPlaceholder: "3 to 4 Hours (Morning / Evening slot)",
    bestTime: "Early Dawn & Sunset Hours"
  },
  {
    number: "02",
    id: "jeep-safari",
    title: "Jawai Jeep Safari",
    shortDescription: "Experience the rugged terrain, scenic hills, and wilderness of Jawai through an adventurous jeep safari.",
    detailedDescription: "Traverse Jawai's rocky riverbeds, steep rock inclines, and wilderness tracks in specially customized open 4x4 safari vehicles. Feel the thrill of scaling monolithic granite boulders while enjoying 360-degree panoramic views of Rajasthan's raw frontier.",
    image: IMAGES.experiences.jeepSafari,
    highlights: [
      "Customized 4x4 open safari gypsies",
      "Thrilling granite rock crawling & riverbed crossings",
      "Panoramic vistas over the Aravalli hills",
      "Safe, exhilarating off-road adventure for all ages"
    ],
    durationPlaceholder: "Approx. 3.5 Hours per expedition",
    bestTime: "Year-Round (Best Oct – April)"
  },
  {
    number: "03",
    id: "wildlife-nature",
    title: "Wildlife & Nature Experience",
    shortDescription: "Discover Jawai's diverse landscapes, wildlife, and natural surroundings.",
    detailedDescription: "Beyond leopards, Jawai is an astonishing ecosystem. Journey to the shores of Jawai Dam to witness massive marsh crocodiles basking on sandbanks, view dozens of migratory bird species, and track striped hyenas, nilgai, and desert wildlife across acacia scrublands.",
    image: IMAGES.experiences.wildlifeNature,
    highlights: [
      "Jawai Dam crocodile sanctuary & wetland excursion",
      "Migratory birdwatching (flamingos, pelicans, cranes)",
      "Coexistence walk observing the peaceful Rabari shepherd culture",
      "Diverse fauna: nilgai, hyena, jackal, and desert fox"
    ],
    durationPlaceholder: "Half-day or full-day customizable trail",
    bestTime: "Dawn to Late Afternoon"
  }
];

export interface PackageItem {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  durationPlaceholder: string;
  idealFor: string;
  inclusions: string[];
  isPopular?: boolean;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "essential-safari",
    badge: "The Classic Expedition",
    name: "The Essential Safari",
    tagline: "The perfect introduction to Jawai's leopard territory.",
    description: "Designed for travelers seeking an authentic encounter with Jawai's iconic big cats. Includes a dedicated tracker-led drive through prime leopard granite formations with scenic landscape viewpoints.",
    image: IMAGES.packages.essential,
    durationPlaceholder: "Single Safari Drive (Approx. 3-4 Hours)",
    idealFor: "First-time visitors & weekend travelers",
    inclusions: [
      "Dedicated open 4x4 safari vehicle",
      "Experienced local driver & wildlife tracker",
      "Prime leopard granite hill tracking",
      "Tea & refreshments at sunset vantage point",
      "Forest permit assistance & safety protocols"
    ]
  },
  {
    id: "wild-explorer",
    badge: "Most Immersive",
    name: "The Wild Explorer",
    tagline: "Comprehensive leopard tracking & Jawai Dam wetland discovery.",
    description: "Our comprehensive multi-session exploration spanning dawn leopard tracking on rocky hills and late afternoon exploration of Jawai Dam's crocodile habitats and bird sanctuaries.",
    image: IMAGES.packages.explorer,
    durationPlaceholder: "Multi-Drive Expedition (Morning + Afternoon)",
    idealFor: "Wildlife enthusiasts & avid birdwatchers",
    isPopular: true,
    inclusions: [
      "Two distinct safari sessions (Dawn & Dusk)",
      "Leopard rock habitat tracking expedition",
      "Jawai Dam wetland & crocodile safari drive",
      "Rabari pastoralist culture & landscape interaction",
      "Binoculars & spotter assistance throughout"
    ]
  },
  {
    id: "ultimate-experience",
    badge: "Bespoke & Private",
    name: "The Ultimate Jawai Experience",
    tagline: "Exclusive private safari tailored for wildlife photographers & families.",
    description: "A tailored, private wilderness journey offering flexible drive timings, private tracker attention, specialized photography stops on secluded granite kopjes, and customized scenic halts.",
    image: IMAGES.packages.ultimate,
    durationPlaceholder: "Custom Multi-Day / Flexible Schedule",
    idealFor: "Wildlife photographers & private family groups",
    inclusions: [
      "Fully private 4x4 vehicle with customized schedule",
      "Senior expert tracker dedicated to your group",
      "Specialized photography halts for golden-hour lighting",
      "Bush refreshments & breakfast setup on granite cliff",
      "Customized safari itinerary based on your preferences"
    ]
  }
];

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: 'Compass' | 'ShieldCheck' | 'Eye' | 'MapPin' | 'Sparkles';
}

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: "local-experience",
    title: "Local Jawai Experience",
    description: "Guided by trackers born and raised in Jawai's granite belt, with generational understanding of leopard territories and daily movement patterns.",
    iconName: "Compass"
  },
  {
    id: "personalized-assistance",
    title: "Personalized Safari Assistance",
    description: "Direct, attentive coordination from your initial inquiry through your departure, catering to your specific schedule and group requirements.",
    iconName: "ShieldCheck"
  },
  {
    id: "wildlife-focused",
    title: "Wildlife-Focused Adventures",
    description: "Ethical, responsible tracking that respects animal space and behavioral patterns, prioritizing natural encounters over artificial crowd chasing.",
    iconName: "Eye"
  },
  {
    id: "customized-planning",
    title: "Customized Safari Planning",
    description: "Whether you are a solo wildlife photographer seeking specific light or a family wanting a comfortable morning drive, we tailor the rhythm to you.",
    iconName: "MapPin"
  },
  {
    id: "memorable-experiences",
    title: "Memorable Wilderness Experiences",
    description: "From steaming chai atop a billion-year-old granite rock at sunset to silence under star-studded Rajasthan skies, moments that stay with you forever.",
    iconName: "Sparkles"
  }
];

export interface DestinationFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statBadge: string;
}

export const DESTINATION_STORY: DestinationFeature[] = [
  {
    title: "Ancient Granite Kopjes",
    subtitle: "850-Million-Year-Old Natural Sanctuaries",
    description: "The rugged landscape of Jawai is dominated by extraordinary volcanic granite rock formations that date back hundreds of millions of years. Naturally sculpted caves and rounded boulders provide ideal shade, vantage perches, and natural dens for leopards.",
    image: IMAGES.destination.graniteBoulders,
    statBadge: "Prehistoric Monoliths"
  },
  {
    title: "The Rabari Harmony",
    subtitle: "An Ancient Pact Between Leopard & Man",
    description: "Nowhere else on Earth do wild leopards live in such close, peaceful proximity to humans. The indigenous Rabari shepherds have revered and coexisted alongside leopards for generations, creating a tranquil ecosystem free from territorial conflict.",
    image: IMAGES.destination.rabariHarmony,
    statBadge: "Living Coexistence"
  },
  {
    title: "Jawai Dam & Wetlands",
    subtitle: "Rajasthan's Premier Wetland Sanctuary",
    description: "Built across the Jawai River in 1957, Jawai Bandh is the largest reservoir in western Rajasthan. In winter, its calm waters host hundreds of colossal marsh mugger crocodiles sunning on banks and thousands of migratory flamingos, bar-headed geese, and demoiselle cranes.",
    image: IMAGES.destination.jawaiDam,
    statBadge: "Aquatic Sanctuary"
  }
];
