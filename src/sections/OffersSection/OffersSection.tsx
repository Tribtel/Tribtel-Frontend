// src/sections/OffersSection.tsx
import CardV from "../../components/Card-Vertical/Card-Vertical"; // adjust path if needed
import styles from "./OffersSection.module.css";

export default function OffersSection() {
  const offers = [
    {
      title: "Weekend Getaway",
      description: "Escape the city with our exclusive weekend packages.",
      imageUrl: "/assets/offers/weekend.jpg",
    },
    {
      title: "Family Special",
      description: "Enjoy spacious rooms and family-friendly amenities.",
      imageUrl: "/assets/offers/family.jpg",
    },
    {
      title: "Luxury Retreat",
      description: "Indulge in premium suites with spa access.",
      imageUrl: "/assets/offers/luxury.jpg",
    },
  ];

  return (
    <section className={styles.offersSection}>
      <h2 className={styles.heading}>Special Offers</h2>
      <div className={styles.cardsWrapper}>
        {offers.map((offer, i) => (
          <CardV
            key={i}
            title={offer.title}
            description={offer.description}
            imageUrl={offer.imageUrl}
          >
            <button className={styles.cta}>Learn More</button>
          </CardV>
        ))}
      </div>
    </section>
  );
}
