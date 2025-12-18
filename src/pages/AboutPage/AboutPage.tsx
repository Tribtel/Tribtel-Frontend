//Build trust and tell the brand story

// src/pages/AboutPage/AboutPage.tsx

import MainLayout from "../../layout/MainLayout";
import CardV from "../../components/Card-Vertical/Card-Vertical";
import Button from "../../components/Button/Button";
import styles from "./AboutPage.module.css";

import Team1 from "../../assets/icons/profile.svg";
import Team2 from "../../assets/icons/profile.svg";
import Team3 from "../../assets/icons/profile.svg";

export default function AboutPage() {
  return (
    <MainLayout hero={<h1 className={styles.heroTitle}>About Us</h1>}>
      <section className={styles.storySection}>
        <h2>Our Story</h2>
        <p>
          Founded in 2010, we’ve been helping travelers discover unforgettable experiences
          across the globe.
        </p>
      </section>

      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Sustainability</li>
          <li>Trust</li>
          <li>Innovation</li>
          <li>Customer First</li>
        </ul>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <CardV
            title="Jane Doe"
            description="Founder & CEO"
            imageUrl={Team1}
          >
            <Button variant="secondary">Connect</Button>
          </CardV>

          <CardV
            title="John Smith"
            description="Head of Operations"
            imageUrl={Team2}
          >
            <Button variant="secondary">Connect</Button>
          </CardV>

          <CardV
            title="Sarah Lee"
            description="Travel Consultant"
            imageUrl={Team3}
          >
            <Button variant="secondary">Connect</Button>
          </CardV>
        </div>
      </section>
    </MainLayout>
  );
}

