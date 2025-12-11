// src/pages/LandingPage.tsx
import MainLayout from "../../layout/MainLayout";
import SearchBar from "../../components/Searchbar/Searchbar";
import Showcase from "../../sections/Showcase/Showcase";
import Membership from "../../sections/Membership/Membership";
import OffersSection from "../../sections/OffersSection/OffersSection";
import Reviews from "../../sections/ReviewSection/ReviewSection";
import styles from "./LandingPage.module.css";
import HeroSection from "../../sections/HeroSection/HeroSection";

export default function LandingPage() {
  return (
    <MainLayout hero={<HeroSection/>}>
        {/* Floating SearchBar */}
        <div className={styles.searchWrapper}>
          <SearchBar />
        </div>
        {/* Showcase Section */}
        <Showcase />
        {/* Additional sections can be added here */}
        <Membership />
        <OffersSection />
        <Reviews />
    </MainLayout>
  );
}
