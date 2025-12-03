// src/sections/LocationsSection.tsx
import React from "react";
import Button from "../../components/Button/Button"; // adjust path if needed
import styles from "./LocationSection.module.css";

export default function LocationsSection() {
  return (
    <section className={styles.locationsSection}>
      {/* Left golden block */}
      <div className={styles.infoBlock}>
        <h2 className={styles.heading}>Over 50 luxury stays</h2>
        <p className={styles.text}>
          Tribtel gives the best service to guests all over the country.
          Our members enjoy exclusive offers and the best rates.
        </p>
        <div className={styles.ctas}>
          <Button variant="primary">Contact Us</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      {/* Right map placeholder */}
      <div className={styles.mapBlock}>
        <div className={styles.mapPlaceholder}>
          <span>Map with hotel pins goes here</span>
        </div>
      </div>
    </section>
  );
}
