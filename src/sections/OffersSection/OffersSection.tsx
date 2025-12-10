// src/sections/Offers/Offers.tsx
import { Link } from "react-router-dom";
import styles from "./OffersSection.module.css";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Summer Escape",
    description: "Enjoy 20% off ocean view rooms this summer.",
    image: "src/assets/images/Features_2.svg",
    discount: "20% OFF"
  },
  {
    id: 2,
    title: "Luxury Weekend",
    description: "Book a luxury suite for 2 nights and get the 3rd free.",
    image: "src/assets/images/Features_6.svg",
    discount: "Stay 3, Pay 2"
  },
  {
    id: 3,
    title: "Family Package",
    description: "Kids stay free in our garden villas.",
    image: "src/assets/images/Features_3.svg",
    discount: "Kids Stay Free"
  }
];

export default function OffersSection() {
  return (
    <section className={styles.offers}>
      <h2>Special Offers</h2>
      <p>Discover our exclusive deals and packages</p>
      <div className={styles.grid}>
        {offers.map((offer) => (
          <Link key={offer.id} to={`/offers/${offer.id}`} className={styles.card}>
            <img src={offer.image} alt={offer.title} />
            <div className={styles.overlay}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <span className={styles.badge}>{offer.discount}</span>

              {/* Arrow Indicator */}
              <span className={styles.arrow}>
                {/* Right Arrow - initially visible */}
                <svg
                  className={`${styles.arrowIcon} ${styles.rightArrow}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {/* Left Arrow - appears on hover */}
                <span className={styles.leftArrow}></span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
