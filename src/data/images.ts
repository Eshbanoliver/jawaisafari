export interface SafariImage {
  id: string;
  title: string;
  category: 'leopard' | 'landscape' | 'safari' | 'wildlife';
  url: string;
  alt: string;
  caption: string;
  location?: string;
  badge?: string;
}

export const IMAGES = {
  // Hero: AI-Generated Indian Leopard on massive granite kopjes at golden hour
  heroBackground: "/images/ai-hero-leopard.jpg",
  
  // Editorial Introduction
  introLeopard: "/images/ai-hero-leopard.jpg",
  introGraniteHills: "/images/ai-jeep-safari.jpg",

  // Core Safari Experiences (AI-Generated bespoke visuals)
  experiences: {
    leopardSafari: "/images/ai-hero-leopard.jpg",
    jeepSafari: "/images/ai-jeep-safari.jpg",
    wildlifeNature: "/images/ai-jawai-dam.jpg",
  },

  // Safari Packages
  packages: {
    essential: "/images/ai-hero-leopard.jpg",
    explorer: "/images/ai-jeep-safari.jpg",
    ultimate: "/images/ai-jawai-dam.jpg",
  },

  // Jawai Destination Storytelling
  destination: {
    graniteBoulders: "/images/ai-jeep-safari.jpg",
    jawaiDam: "/images/ai-jawai-dam.jpg",
    rabariHarmony: "/images/ai-rabari-heritage.jpg",
    goldenHourHills: "/images/ai-hero-leopard.jpg",
  },

  // Curated AI-Generated Gallery & Expedition Shots
  gallery: [
    {
      id: "gal-1",
      title: "The Leopard of the Kopjes",
      category: "leopard",
      url: "/images/ai-hero-leopard.jpg",
      alt: "AI generated photorealistic Indian leopard on giant granite rock in Jawai at sunset",
      caption: "A magnificent wild Indian leopard lounging atop prehistoric granite boulders overlooking the Jawai horizon.",
      location: "Bera - Jawai Granite Kopjes",
      badge: "AI Generated · 8K"
    },
    {
      id: "gal-2",
      title: "Granite Rock Scaling 4x4 Gypsy",
      category: "safari",
      url: "/images/ai-jeep-safari.jpg",
      alt: "AI generated 4x4 open safari vehicle climbing steep granite boulder in Jawai at golden hour",
      caption: "Custom open 4x4 safari jeep navigating thrilling 60-degree granite rock formations with local trackers.",
      location: "Jawai Off-road Trails",
      badge: "AI Generated · 8K"
    },
    {
      id: "gal-3",
      title: "Jawai Dam Wetland Sanctuary",
      category: "landscape",
      url: "/images/ai-jawai-dam.jpg",
      alt: "AI generated Jawai Dam lake with turquoise water, granite hills, crocodiles and flamingos",
      caption: "The sparkling turquoise waters of Jawai Bandh, haven to basking marsh crocodiles and migratory flamingos.",
      location: "Jawai Bandh, Pali District",
      badge: "AI Generated · 8K"
    },
    {
      id: "gal-4",
      title: "Leopard Portrait in Granite Fissure",
      category: "leopard",
      url: "/images/ai-leopard-portrait.jpg",
      alt: "AI generated portrait of Indian leopard with piercing amber eyes in rock cave",
      caption: "Intimate close-up of a Jawai leopard resting inside naturally weathered volcanic granite caves.",
      location: "Perwa Cave Sanctuary",
      badge: "AI Generated · 8K"
    },
    {
      id: "gal-5",
      title: "Rabari Shepherd Pastoral Heritage",
      category: "wildlife",
      url: "/images/ai-rabari-heritage.jpg",
      alt: "AI generated traditional Rabari shepherd in red turban with granite hills",
      caption: "The peaceful centuries-old bond between the Rabari pastoralists and the free-roaming leopards.",
      location: "Sena Settlement, Jawai",
      badge: "AI Generated · 8K"
    },
    {
      id: "gal-6",
      title: "Golden Hour Kopjes Exploration",
      category: "landscape",
      url: "/images/ai-hero-leopard.jpg",
      alt: "Granite hills bathed in vibrant orange and amber sunset glow",
      caption: "Spectacular golden light illuminating billion-year-old rock formations across Rajasthan's wild frontier.",
      location: "Varawal Ridge",
      badge: "AI Generated · 8K"
    }
  ] as SafariImage[]
};
