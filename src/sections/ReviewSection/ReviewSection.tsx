// src/sections/ReviewSection/ReviewSection.tsx
import styles from "./ReviewSection.module.css";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    comment: "The ocean view room was breathtaking. Service was excellent and staff were very attentive.",
    rating: 5,
    avatar: "src/assets/images/avatar1.svg"
  },
  {
    id: 2,
    name: "James K.",
    comment: "Loved the garden villa! Perfect for a family getaway. Kids had a wonderful time.",
    rating: 4,
    avatar: "src/assets/images/avatar2.svg"
  },
  {
    id: 3,
    name: "Priya R.",
    comment: "Luxury suite was worth every cent. Elegant design and very comfortable stay.",
    rating: 5,
    avatar: "src/assets/images/avatar3.svg"
  }
];

export default function ReviewSection() {
  return (
    <section className={styles.reviews}>
      <h2>What our guests say</h2>
      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <img src={review.avatar} alt={review.name} className={styles.avatar} />
            <div className={styles.overlay}>
              <h3>{review.name}</h3>
              <p className={styles.comment}>"{review.comment}"</p>
              <p className={styles.rating}>⭐ {review.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
