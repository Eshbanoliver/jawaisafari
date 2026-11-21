export interface SafariImage {
  id: string;
  title: string;
  category: 'leopard' | 'landscape' | 'safari' | 'wildlife';
  url: string;
  alt: string;
  caption: string;
  location?: string;
}

export const IMAGES = {
  // Hero Background: Breathtaking Indian leopard on massive granite rock during golden hour
  heroBackground: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=85&w=2160&auto=format&fit=crop",
  
  // Alternative high-res leopard on granite
  heroLeopardAlt: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=85&w=2160&auto=format&fit=crop",

  // Editorial Introduction
  introLeopard: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=85&w=1600&auto=format&fit=crop",
  introGraniteHills: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=85&w=1600&auto=format&fit=crop",

  // Experiences
  experiences: {
    leopardSafari: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=85&w=1600&auto=format&fit=crop",
    jeepSafari: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=85&w=1600&auto=format&fit=crop",
    wildlifeNature: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=85&w=1600&auto=format&fit=crop",
  },

  // Packages
  packages: {
    essential: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=85&w=1600&auto=format&fit=crop",
    explorer: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1600&auto=format&fit=crop",
    ultimate: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=85&w=1600&auto=format&fit=crop",
  },

  // Jawai Destination Story
  destination: {
    graniteBoulders: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=1600&auto=format&fit=crop",
    jawaiDam: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1600&auto=format&fit=crop",
    rabariHarmony: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1600&auto=format&fit=crop",
    goldenHourHills: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=85&w=1600&auto=format&fit=crop",
  },

  // Full Gallery with categorized items for the interactive lightbox
  gallery: [
    {
      id: "gal-1",
      title: "Monarch of the Granite Kopjes",
      category: "leopard",
      url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=85&w=1600&auto=format&fit=crop",
      alt: "Indian leopard resting on smooth granite boulder in Jawai at sunset",
      caption: "An elusive Indian leopard overlooking its rocky territory from an ancient granite cliff.",
      location: "Bera - Jawai Granite Hills"
    },
    {
      id: "gal-2",
      title: "Granite Rock Scaling 4x4",
      category: "safari",
      url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=85&w=1600&auto=format&fit=crop",
      alt: "Open 4x4 safari vehicle traversing steep granite terrain in Jawai",
      caption: "Specialized open 4x4 safari vehicles navigate challenging 60-degree granite rock formations.",
      location: "Jawai Wilderness Trail"
    },
    {
      id: "gal-3",
      title: "Jawai Dam Wetland Waters",
      category: "landscape",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=85&w=1600&auto=format&fit=crop",
      alt: "Jawai Bandh reservoir surrounded by prehistoric granite hills",
      caption: "The majestic expanse of Jawai Bandh, sanctuary to marsh mugger crocodiles and migratory birds.",
      location: "Jawai Bandh, Pali District"
    },
    {
      id: "gal-4",
      title: "Twilight Leopard Vigil",
      category: "leopard",
      url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=85&w=1600&auto=format&fit=crop",
      alt: "Leopard perched gracefully on high rock ledge at dusk",
      caption: "The evening safari tracking brings breathtaking encounters right before twilight settles.",
      location: "Perwa Cave Hills"
    },
    {
      id: "gal-5",
      title: "Sunset Over Granite Monoliths",
      category: "landscape",
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=85&w=1600&auto=format&fit=crop",
      alt: "Billion-year-old granite rock formations illuminated in deep amber sunset",
      caption: "Golden hour washing over the prehistoric Aravalli granite range in Rajasthan.",
      location: "Varawal Ridge"
    },
    {
      id: "gal-6",
      title: "The Rabari Pastoral Heritage",
      category: "wildlife",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1600&auto=format&fit=crop",
      alt: "Traditional Rabari shepherd in iconic red turban coexisting in leopard country",
      caption: "The world-famous spiritual and peaceful coexistence between the Rabari tribe and wild leopards.",
      location: "Sena Settlement, Jawai"
    },
    {
      id: "gal-7",
      title: "Striped Hyena & Nocturnal Wildlife",
      category: "wildlife",
      url: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=85&w=1600&auto=format&fit=crop",
      alt: "Native wilderness wildlife traversing rocky Rajasthan scrubland",
      caption: "Aside from leopards, Jawai is home to striped hyenas, nilgai, desert fox, and jungle cats.",
      location: "Kothar River Bed"
    },
    {
      id: "gal-8",
      title: "Morning Jeep Safari Convoy",
      category: "safari",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=85&w=1600&auto=format&fit=crop",
      alt: "Customized safari jeep setting out at early dawn into the granite kopjes",
      caption: "Dawn safari departure to catch leopards soaking up the earliest morning sunlight on cold granite.",
      location: "Bera Valley"
    }
  ] as SafariImage[]
};
