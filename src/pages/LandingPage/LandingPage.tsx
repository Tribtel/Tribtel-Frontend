// src/pages/LandingPage.tsx
import MainLayout from "../../layout/MainLayout";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <MainLayout>
      {/* any other landing-page-only sections */}
      <div className={styles.landingPage}></div>
    </MainLayout>
  );
}
