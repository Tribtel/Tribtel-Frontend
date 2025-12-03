import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import LocationSection from "../sections/LocationSection/LocationSection";
import Footer from "../sections/Footer/Footer";
import FAB from "../components/FAB/FAB";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <HeroSection />
      <LocationSection />
      <Footer />
      <FAB onClick={() => console.log("FAB clicked!")} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default MainLayout;
