// This hero section serves as a simple dipay section.
//It contains the value prop, Hero image and CTA.
//It can be reusable on pages that need it.
import Button from "../../components/Button/Button";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

interface HeroSectionProps {
  //add props here if needed in the future
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

const HeroSection: React.FC <HeroSectionProps>= ({ 
  imageUrl = heroImage, 
  title = "Your perfect stay - one click away", 
  subtitle = "Your perfect stay awaits with exceptional service and unforgettable moments.", 
  showCTA = true
}) => {
  return (
    <section className={styles.heroSection}>
      {/* Background image */}
      <img src={imageUrl} alt="Hotel Image" className={styles.heroImage} />

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        {showCTA && <Button variant="primary">Explore</Button>}
      </div>
    </section>
  );
};

export default HeroSection;
