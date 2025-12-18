//Build trust and tell the brand story

// src/pages/AboutPage/AboutPage.tsx
import MainLayout from "../../layout/MainLayout";
import styles from "./AboutPage.module.css";

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
          <div className={styles.teamMember}>
            <img src="/images/team1.jpg" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>
    </MainLayout>
  );
}
