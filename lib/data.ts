// Website content, written to Brand Guidelines v1.0.
// Rule from the brief: no claims about certifications, countries served,
// volume or partners until the client confirms them. Lot specifications
// and availability are shared upon inquiry.
// Photos are Unsplash placeholders until the client supplies authentic images.

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop`;

export const images = {
  highlands: u("1568516475772-498b4379829c"),
  plantationHills: u("1762686852371-763b689910b2"),
  farmer: u("1613399421011-1e634fa4dacc"),
  farmerField: u("1605000797499-95a51c5269ae"),
  farmerHarvest: u("1597816760638-406d7271105c"),
  handCherries: u("1670758611084-e216510c5433"),
  picking: u("1764232891094-a4a3e8c517e3"),
  cherries: u("1586095516671-d085ff58cdd4"),
  greenBeans: u("1561986845-fbeb7f7913d8"),
  greenBeanSack: u("1553168734-5e1d8096e4a4"),
  dryingPatio: u("1605085721615-93a6919c1115"),
  dryingBeds: u("1649616551649-06bbf4d11354"),
  dryingCherries: u("1649616550039-5921f1a5f3c8"),
  dryingRake: u("1761318543563-f5c211a99195"),
  parchmentHands: u("1598106529308-5e9944b6ea75"),
  cupping: u("1558996260-4bac67dbd110"),
  cuppingPour: u("1558996111-47c0eab5f737"),
  sacks: u("1465176728568-7da7e336b1e9"),
  sacksStack: u("1530496216518-a53d24e99c31"),
  mountainsMist: u("1512631911403-3e3a06d12389"),
  mountainsSunrise: u("1605860632725-fa88d0ce7a07"),
  mountainsDusk: u("1611329532992-0b7ba27d85fb"),
  mountainsGreen: u("1512632134279-79f2576d6df4"),
  mountainsDark: u("1531283547128-6e7baecb9e6e"),
  leaves: u("1762004456291-016c26cc59c9"),
};

export const brand = {
  tagline: "From Nusantara to the World.",
  essence: "Rooted in Indonesia. Connected to the World.",
  intro:
    "We connect Indonesian coffee origins with global market opportunities through professional sourcing, reliable trade practices, and long-term partnerships.",
  positioning:
    "Jaya Coffee Nusantara is an Indonesia-rooted coffee trading company connecting the diversity of Indonesian coffee origins with global market opportunities through reliable sourcing, professional trade practices, and long-term partnerships.",
  belief:
    "We believe meaningful trade begins with understanding the origin, respecting the people behind the product, and building trust at every step.",
  inquiry:
    "Share your preferred origin, grade, volume, and destination market so our team can discuss suitable sourcing options.",
  lotNote: "Lot specifications and availability are shared upon inquiry.",
  principle: "Design earns attention. Reliable information earns trust.",
};

export const pillars = [
  {
    title: "Rooted in Nusantara",
    text: "Pride in Indonesia's coffee origins and natural diversity, told through accurate origin stories and traceable product information.",
  },
  {
    title: "Connected to the World",
    text: "A bridge between Indonesian supply and international demand, with clear English-language communication and buyer-ready information.",
  },
  {
    title: "Built on Trust",
    text: "Trade relationships grounded in integrity and reliability: verified claims, transparent specifications and consistent follow-through.",
  },
];

export const values = [
  { title: "Integrity", text: "Honest about specifications, price, documentation, origin and capability." },
  { title: "Reliability", text: "Consistency in quality, volume and delivery commitments comes first." },
  { title: "Origin pride", text: "We celebrate Indonesian coffee without making unverified provenance claims." },
  { title: "Global mindset", text: "Clear, professional communication across markets." },
  { title: "Long-term partnership", text: "Durable business relationships rather than one-off transactions." },
];

export const logoMeaning = [
  { element: "J monogram", text: "The core brand identifier: confident, stable and unmistakably tied to Jaya." },
  { element: "Coffee bean & leaf", text: "The product category, and a connection to nature and agricultural origins." },
  { element: "Globe-like curves", text: "International connectivity and the ambition to link Nusantara with world markets." },
  { element: "Espresso & ivory", text: "A balance of authority, warmth, restraint and longevity." },
];

export type Origin = {
  slug: string;
  name: string;
  island: string;
  region: string;
  altitude: string;
  image: string;
  description: string;
};

export const origins: Origin[] = [
  {
    slug: "gayo",
    name: "Gayo Highlands",
    island: "Sumatra",
    region: "Aceh",
    altitude: "1,200 – 1,600 masl",
    image: images.mountainsDark,
    description:
      "Highland smallholder farms around Lake Laut Tawar. Gayo Arabica is typically full-bodied, with low acidity and notes of chocolate and spice.",
  },
  {
    slug: "north-sumatra",
    name: "Mandailing & Lintong",
    island: "Sumatra",
    region: "North Sumatra",
    altitude: "1,100 – 1,500 masl",
    image: images.mountainsGreen,
    description:
      "Home of the wet-hulled (giling basah) method that gives many Sumatran coffees their syrupy body and earthy, herbal character.",
  },
  {
    slug: "java",
    name: "Java Preanger & Ijen",
    island: "Java",
    region: "West & East Java",
    altitude: "1,300 – 1,700 masl",
    image: images.mountainsSunrise,
    description:
      "One of the oldest coffee-growing regions in Indonesia. Washed Java coffees are generally clean and sweet, often with floral notes.",
  },
  {
    slug: "toraja",
    name: "Toraja Kalosi",
    island: "Sulawesi",
    region: "South Sulawesi",
    altitude: "1,400 – 1,900 masl",
    image: images.mountainsDusk,
    description:
      "High-altitude mountain farms in South Sulawesi, producing coffees typically described with dark fruit, cocoa and spice.",
  },
  {
    slug: "kintamani",
    name: "Kintamani",
    island: "Bali",
    region: "Bangli, Bali",
    altitude: "1,200 – 1,500 masl",
    image: images.plantationHills,
    description:
      "Coffee grown alongside citrus within the Subak Abian farming system. Washed Kintamani is usually bright, with citrus and brown-sugar notes.",
  },
  {
    slug: "flores",
    name: "Flores Bajawa",
    island: "Flores",
    region: "East Nusa Tenggara",
    altitude: "1,300 – 1,700 masl",
    image: images.mountainsMist,
    description:
      "Volcanic slopes around Bajawa. Flores coffees are commonly smooth and rounded, with nutty and chocolate notes.",
  },
  {
    slug: "papua",
    name: "Papua Wamena",
    island: "Papua",
    region: "Baliem Valley",
    altitude: "1,500 – 2,000 masl",
    image: images.leaves,
    description:
      "Remote highland gardens in the Baliem Valley, typically producing delicate coffees with floral and honey-like sweetness.",
  },
];

export type Product = {
  slug: string;
  name: string;
  origin: string;
  originSlug: string;
  species: "Arabica" | "Robusta";
  varieties: string;
  processes: string;
  altitude: string;
  harvest: string;
  notes: string[];
  image: string;
  summary: string;
};

// Typical origin profiles. Actual lots are specified at inquiry stage.
export const products: Product[] = [
  { slug: "gayo-arabica", name: "Gayo Arabica", origin: "Aceh, Sumatra", originSlug: "gayo", species: "Arabica", varieties: "Ateng, Tim Tim, Abyssinia", processes: "Full washed, wet hulled", altitude: "1,200 – 1,600 masl", harvest: "October – May", notes: ["Dark chocolate", "Spice", "Cedar"], image: images.greenBeanSack, summary: "A full-bodied, low-acidity Sumatran Arabica from the Gayo highlands of Aceh." },
  { slug: "mandailing-arabica", name: "Mandailing Arabica", origin: "North Sumatra", originSlug: "north-sumatra", species: "Arabica", varieties: "Sigarar Utang, Ateng", processes: "Wet hulled", altitude: "1,100 – 1,500 masl", harvest: "October – June", notes: ["Earthy", "Herbal", "Brown sugar"], image: images.greenBeans, summary: "The classic wet-hulled Sumatran profile: heavy body and deep, herbal sweetness." },
  { slug: "java-preanger", name: "Java Preanger", origin: "West Java", originSlug: "java", species: "Arabica", varieties: "Sigarar Utang, Typica, Lini S", processes: "Full washed, natural, honey", altitude: "1,300 – 1,600 masl", harvest: "May – September", notes: ["Floral", "Citrus", "Caramel"], image: images.picking, summary: "Clean and sweet Arabica from the historic Preanger highlands of West Java." },
  { slug: "toraja-kalosi", name: "Toraja Kalosi", origin: "South Sulawesi", originSlug: "toraja", species: "Arabica", varieties: "S795, Typica", processes: "Wet hulled, full washed", altitude: "1,400 – 1,900 masl", harvest: "May – October", notes: ["Dark fruit", "Cocoa", "Spice"], image: images.handCherries, summary: "A layered, high-altitude Sulawesi Arabica with dark fruit and cocoa." },
  { slug: "kintamani-bali", name: "Kintamani Bali", origin: "Bangli, Bali", originSlug: "kintamani", species: "Arabica", varieties: "Kopyol, S795", processes: "Full washed, natural", altitude: "1,200 – 1,500 masl", harvest: "May – September", notes: ["Citrus", "Brown sugar", "Clean finish"], image: images.cherries, summary: "Bright, citrus-toned Arabica grown under the Subak Abian system of Bali." },
  { slug: "flores-bajawa", name: "Flores Bajawa", origin: "East Nusa Tenggara", originSlug: "flores", species: "Arabica", varieties: "Typica, Catimor", processes: "Semi washed, full washed", altitude: "1,300 – 1,700 masl", harvest: "May – October", notes: ["Hazelnut", "Milk chocolate", "Vanilla"], image: images.dryingPatio, summary: "A smooth, rounded Arabica from the volcanic slopes of Bajawa." },
  { slug: "papua-wamena", name: "Papua Wamena", origin: "Baliem Valley, Papua", originSlug: "papua", species: "Arabica", varieties: "Typica", processes: "Full washed", altitude: "1,500 – 2,000 masl", harvest: "April – August", notes: ["Floral", "Honey", "Cocoa"], image: images.farmerHarvest, summary: "Delicate highland Arabica from the remote Baliem Valley." },
  { slug: "sumatra-robusta", name: "Sumatra Robusta", origin: "Lampung & South Sumatra", originSlug: "north-sumatra", species: "Robusta", varieties: "Local clones", processes: "Natural, semi washed", altitude: "400 – 800 masl", harvest: "April – August", notes: ["Bittersweet cocoa", "Roasted nut", "Bold body"], image: images.parchmentHands, summary: "Full-bodied Indonesian Robusta, widely used as a base for espresso and blends." },
];

export const tradeSteps = [
  { title: "Origin sourcing", text: "We work with growers and collectors across Indonesian coffee regions to identify lots that suit each buyer.", image: images.farmerField },
  { title: "Sample & evaluation", text: "Samples are prepared and evaluated, so origin, quality and specification can be discussed with evidence.", image: images.cupping },
  { title: "Specification & agreement", text: "Origin, grade, volume, price, Incoterms and shipment period are confirmed in writing before a lot is committed.", image: images.greenBeans },
  { title: "Shipment preparation", text: "Lots are prepared, packed and checked against the agreed specification ahead of loading.", image: images.sacksStack },
  { title: "Documentation", text: "Export documents are prepared according to the requirements of the destination market.", image: images.sacks },
];

export const exportServices = [
  { title: "Green coffee sourcing", text: "Arabica and Robusta from the main growing regions of Indonesia, matched to your origin, grade and volume requirements." },
  { title: "Sample coordination", text: "Offer and pre-shipment samples arranged so you can evaluate a lot before committing." },
  { title: "Specifications & documents", text: "Transparent lot specifications and export documentation prepared for your destination market." },
  { title: "Long-term supply", text: "Recurring supply programmes planned with buyers on the basis of confirmed availability." },
];

export const importServices = [
  { title: "International origins", text: "Support for Indonesian roasters and businesses seeking coffees from other producing countries." },
  { title: "Coffee equipment & supplies", text: "Sourcing assistance for equipment and supplies used across the coffee value chain." },
  { title: "Import coordination", text: "Guidance on documentation and the import process. Scope is agreed case by case." },
];

export const inquiryChecklist = [
  { label: "Origin", value: "Preferred region(s) or flavour profile" },
  { label: "Grade", value: "Grade, screen size and preparation" },
  { label: "Volume", value: "Quantity per shipment and frequency" },
  { label: "Terms", value: "Preferred Incoterms and destination port" },
  { label: "Packaging", value: "Bag type and any liner requirements" },
  { label: "Timing", value: "Target shipment period" },
];

export const faqs = [
  { q: "What information should I include in an inquiry?", a: "Share your preferred origin, grade, volume, and destination market so our team can discuss suitable sourcing options. Incoterms, packaging and shipment period are helpful too." },
  { q: "Can I request samples before ordering?", a: "Yes. Sample requests are handled as part of the inquiry process. Tell us the origins you are interested in and where the samples should be sent." },
  { q: "Do you share lot specifications?", a: "Yes. Lot specifications and availability are shared upon inquiry, based on current lots rather than generic descriptions." },
  { q: "Which documents accompany a shipment?", a: "Documentation is prepared according to the requirements of the destination market and the agreed contract. We confirm the full document list during contract discussions." },
];

// Placeholder contact details: replace with the client's verified channels.
export const company = {
  name: "Jaya Coffee Nusantara",
  legal: "PT Jaya Coffee Nusantara",
  email: "hello@jayacoffeenusantara.com",
  phone: "+62 21 0000 0000",
  whatsapp: "+62 812 0000 0000",
  address: ["Jl. Contoh Raya No. 1", "Jakarta 12345, Indonesia"],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coffee", label: "Our Coffee" },
  { href: "/origins", label: "Origins" },
  { href: "/services", label: "Export & Import" },
  { href: "/contact", label: "Contact" },
];
