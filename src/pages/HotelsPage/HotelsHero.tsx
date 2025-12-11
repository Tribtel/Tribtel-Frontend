//Hero section custom for the hotels searcg and display pages.
import styles from "./HotelsHero.module.css";
import Image from "../../assets/images/Features/Features_4.svg";
export default function HotelsHero() {
  return (
    <section className={styles.hero}>  
      {/* Background image */}
      <img src={Image} alt="Hotel Image" className={styles.Image} />
      {/* Gradient overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Discover Your Perfect Stay</h1>
        <p className={styles.subtitle}>
          Luxury stays, breathtaking views, and unforgettable experiences await you.
          Just scroll or search and see.
        </p>
      </div>
    </section>
  );
}