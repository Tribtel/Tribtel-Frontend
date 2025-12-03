// This hero section serves as a simple dipay section.
//It contains the value prop, Hero image and CTA.
//It can be reusable on pages that need it.
import Button from "../../components/Button/Button";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background image */}
      <img src={heroImage} alt="Hotel Image" className={styles.heroImage} />

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Your perfect stay - one click away</h1>
        <p className={styles.subtitle}>
          Your perfect stay awaits with exceptional service and unforgettable
          moments.
        </p>
        <Button variant="primary">Explore</Button>
      </div>
    </section>
  );
};

export default HeroSection;
