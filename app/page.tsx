import Slideshow, { Slide } from "../components/Slideshow";
import "./globals.css";

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div>
      <div className="stat">{value}</div>
      <div style={{ fontWeight: 600 }}>{label}</div>
      {hint && <div className="small">{hint}</div>}
    </div>
  );
}

const slides: Slide[] = [
  {
    title: "Incredible India ? Tourism Opportunity",
    subtitle: "A data-led, experience-first growth plan",
    hero: {
      title: "India: Timeless heritage, vibrant culture, booming demand",
      blurb: "Position India as the world's most diverse, value-rich, and sustainable travel destination."
    },
    footer: "Confidential ? For internal pitch and partners"
  },
  {
    title: "Market Snapshot",
    subtitle: "Scale, momentum, and recovery",
    leftColumn: (
      <div style={{ display: "grid", gap: 12 }}>
        <Stat label="International arrivals (2023)" value="~9.2M" hint="Rebound +>50% YoY" />
        <Stat label="Domestic trips (2023)" value=">1.8B" hint="World's largest domestic market" />
        <Stat label="Travel & Tourism GDP" value=">$200B" hint=">7% of GDP incl. indirect" />
      </div>
    ),
    rightColumn: (
      <div style={{ display: "grid", gap: 8 }}>
        <div><strong>Drivers:</strong> rising incomes, improved connectivity, digital adoption, eVisa expansion</div>
        <div><strong>Top source markets:</strong> USA, UK, Bangladesh, Canada, Australia, Germany, Russia, France</div>
        <div><strong>Peak seasons:</strong> Oct?Mar (North/West), Jun?Sep (Hills), Nov?Feb (South)</div>
      </div>
    )
  },
  {
    title: "India's Unique Value Proposition",
    bullets: [
      "Unmatched diversity across culture, nature, wellness, and adventure",
      "Year-round demand with regionally varied seasonality",
      "Value leadership: premium experiences at competitive cost",
      "Strong storylines: heritage, festivals, wildlife, cuisine, spirituality",
      "Sustainability upside via eco-stays, slow travel, and rail"
    ]
  },
  {
    title: "Priority Experience Pillars",
    leftColumn: (
      <div>
        <ul className="bullets">
          <li>Golden Triangle & Heritage Circuits (Delhi?Agra?Jaipur, Varanasi, Hampi, Khajuraho)</li>
          <li>Nature & Wildlife (Ranthambore, Jim Corbett, Kaziranga, Bandhavgarh)</li>
          <li>Himalayan Escapes (Ladakh, Himachal, Uttarakhand, Sikkim)</li>
          <li>Coastal & Island (Goa, Kerala backwaters, Andaman & Nicobar)</li>
          <li>Spiritual & Wellness (Rishikesh yoga, Ayurveda in Kerala, Varanasi ghats)</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <ul className="bullets">
          <li>Culinary Trails (Street food, regional thalis, tea & spice estates)</li>
          <li>Festivals & Culture (Diwali, Holi, Navratri, Durga Puja, Hornbill)</li>
          <li>Rail Journeys (Vistadome, luxury trains, Konkan line)</li>
          <li>Adventure (Trekking, rafting, desert safaris, scuba in Lakshadweep)</li>
          <li>Film & Creative Tourism (Bollywood tours, heritage studios)</li>
        </ul>
      </div>
    )
  },
  {
    title: "Target Segments & Personas",
    leftColumn: (
      <div>
        <strong>Inbound</strong>
        <ul className="bullets">
          <li>Culture Seekers (7?10 days): heritage circuits + festivals</li>
          <li>Luxury Leisure (5?8 days): palaces, boutique stays, wellness</li>
          <li>Adventure & Nature (8?12 days): Himalayas + parks</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <strong>Domestic</strong>
        <ul className="bullets">
          <li>Young Explorers: weekend city breaks, backpacking</li>
          <li>Families: theme parks, wildlife, beaches</li>
          <li>Retreats: yoga, Ayurveda, wellness getaways</li>
        </ul>
      </div>
    )
  },
  {
    title: "12-Month Go-To-Market",
    leftColumn: (
      <div>
        <strong>Supply</strong>
        <ul className="bullets">
          <li>Curate 50 flagship itineraries across 5 pillars</li>
          <li>Onboard 200+ boutique stays and eco-lodges</li>
          <li>Direct contracts with top DMCs and guides</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <strong>Demand</strong>
        <ul className="bullets">
          <li>Always-on content + SEO for key circuits</li>
          <li>Seasonal campaigns (festivals, wildlife, Himalayas)</li>
          <li>Partner with OTAs, airlines, and card networks</li>
        </ul>
      </div>
    )
  },
  {
    title: "Sample Itinerary ? Golden Triangle (6D/5N)",
    bullets: [
      "Day 1: Delhi ? Old Delhi heritage and food walk",
      "Day 2: Delhi ? New Delhi monuments and museums",
      "Day 3: Agra ? Taj Mahal sunrise, Agra Fort",
      "Day 4: Jaipur ? Amer Fort, stepwells, bazaars",
      "Day 5: Jaipur ? City Palace, Jantar Mantar, local crafts",
      "Day 6: Optional Ranthambore safari or return to Delhi"
    ]
  },
  {
    title: "Seasonality & Calendar Hooks",
    leftColumn: (
      <div>
        <ul className="bullets">
          <li>Oct?Mar: North/West circuits, deserts, wildlife prime</li>
          <li>Jun?Sep: Monsoon greenery, Western Ghats, hill stations</li>
          <li>Nov?Feb: South India beaches and backwaters peak</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <ul className="bullets">
          <li>Festival anchors: Diwali, Holi, Durga Puja, Navratri, Onam</li>
          <li>Events: Kumbh Mela, Jaipur Lit Fest, Rann Utsav, Hornbill</li>
          <li>Wildlife windows: Tiger sightings peak Mar?Jun</li>
        </ul>
      </div>
    )
  },
  {
    title: "Experience Quality & Safety",
    bullets: [
      "Trusted guides, verified partners, transparent pricing",
      "Tiered quality badges for stays and transport",
      "Safety playbooks: solo female travel, late-night transit, health",
      "Real-time support, trip dashboards, and travel insurance options"
    ]
  },
  {
    title: "Digital Growth Engine",
    leftColumn: (
      <div>
        <ul className="bullets">
          <li>Content clusters: circuits, cities, experiences, seasons</li>
          <li>SEO + schema: itinerary, FAQ, HowTo, Review markup</li>
          <li>UGC flywheel: reels, reviews, maps, creator collabs</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <ul className="bullets">
          <li>CRM: lifecycle journeys, WhatsApp automation, referrals</li>
          <li>Conversion: transparent pricing, financing, hold-now-pay-later</li>
          <li>Analytics: cohort ROAS, path-to-book, attribution modeling</li>
        </ul>
      </div>
    )
  },
  {
    title: "Budget & Unit Economics (Illustrative)",
    leftColumn: (
      <div>
        <ul className="bullets">
          <li>Avg booking value: $800 inbound / $250 domestic</li>
          <li>Gross margin: 18?25% by pillar and season</li>
          <li>Blended CAC target: $45 inbound / $8 domestic</li>
        </ul>
      </div>
    ),
    rightColumn: (
      <div>
        <ul className="bullets">
          <li>Year-1 mix: 60% domestic, 40% inbound by revenue</li>
          <li>Break-even: ~12?15k monthly bookings at target margins</li>
          <li>Capex-light through partner-led supply</li>
        </ul>
      </div>
    )
  },
  {
    title: "Sustainability & Impact",
    bullets: [
      "Eco-friendly transport and stays prioritized in listings",
      "Local community partnerships and artisan marketplaces",
      "Overtourism safeguards: caps, timed entries, off-peak nudges",
      "Carbon reporting and optional offsets"
    ]
  },
  {
    title: "Risks & Mitigations",
    bullets: [
      "Seasonality volatility ? diversified calendar + pricing",
      "Infrastructure gaps ? curated partners + buffer planning",
      "Perception issues ? quality assurance + content-led education",
      "Currency swings ? dynamic pricing and hedging"
    ]
  },
  {
    title: "Call to Action",
    hero: {
      title: "Partner with us to scale India's next chapter",
      blurb: "Co-create flagship itineraries, unlock premium experiences, and inspire a new wave of travelers."
    },
    footer: "Contact: partnerships@incredible-india.example ? +91-00000 00000"
  }
];

export default function Page() {
  return <Slideshow slides={slides} />;
}
