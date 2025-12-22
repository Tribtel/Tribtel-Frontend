//Lets give visitors some context on who we are and what we offer.

// src/sections/Brand/BrandSection.tsx
import styles from "./BrandSection.module.css";
import { WifiIcon, TvIcon, SparklesIcon, HomeIcon, PowerIcon, UserIcon } from "@heroicons/react/24/outline";

interface Item {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const showcaseFeatures: Item[] = [
  { title: "Included Meals", description: "Complimentary breakfast and dinner at select hotels.", icon: <SparklesIcon className={styles.icon} /> },
  { title: "Member Price Cuts", description: "Exclusive discounts for Tribetle members.", icon: <UserIcon className={styles.icon} /> },
  { title: "Activity & Itinerary Help", description: "Concierge team helps plan your adventures.", icon: <HomeIcon className={styles.icon} /> },
];

const amenitiesList: Item[] = [
  { title: "Wi‑Fi", description: "Free high‑speed internet in all rooms and public areas.", icon: <WifiIcon className={styles.icon} /> },
  { title: "Room Service", description: "24/7 room service for your convenience.", icon: <UserIcon className={styles.icon} /> },
  { title: "Swimming Pool", description: "Relax and refresh in our outdoor pools.", icon: <HomeIcon className={styles.icon} /> },
  { title: "Kitchen", description: "Fully equipped kitchens in select suites.", icon: <HomeIcon className={styles.icon} /> },
  { title: "Shower", description: "Modern bathrooms with walk‑in showers.", icon: <PowerIcon className={styles.icon} /> },
  { title: "Free Parking", description: "Secure complimentary parking for all guests.", icon: <SparklesIcon className={styles.icon} /> },
  { title: "Complimentary Tea & Coffee", description: "Enjoy free tea and coffee in your room.", icon: <SparklesIcon className={styles.icon} /> },
  { title: "Satellite TV", description: "Wide range of channels for your entertainment.", icon: <TvIcon className={styles.icon} /> },
];

interface BrandSectionProps {
  showcase?: boolean;
  amenities?: boolean;
}

export default function BrandSection({ showcase = false, amenities = false }: BrandSectionProps) {
  return (
    <section className={styles.brandSection}>
        
      <h2>Tribtel Hotels</h2>

      <p className={styles.intro}>
        Our exclusive hotel brand offers comfort, convenience, and curated experiences for every traveler.
      </p>

      {showcase && (
        <div className={`${styles.features} grid grid-3`}>
          {showcaseFeatures.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      )}

      {amenities && (
        <div className={`${styles.amenities} grid grid-4`}>
          {amenitiesList.map((a, i) => (
            <div key={i} className={styles.amenityCard}>
              {a.icon}
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
