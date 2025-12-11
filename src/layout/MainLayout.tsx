import { ReactNode, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import LocationSection from "../sections/LocationSection/LocationSection";
import Footer from "../sections/Footer/Footer";
import FAB from "../components/FAB/FAB";
import AuthModal from "../components/AuthModal/AuthModal";
import { AuthProvider } from "../auth/Auth"; // global auth state
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
  hero?: ReactNode; // Interchangeble hero section
}

const MainLayout = ({ children, hero }: MainLayoutProps) => {
  
  //local state for modal open/close
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthProvider>
      <div className={styles.mainLayout}>
        
        {/* Navbar gets a handler to open modal */}
        <Navbar onSignInClick={() => setIsAuthOpen(true)} />
        {/* Conditional Hero Section */}
        {hero ? hero :<HeroSection />}
        {/* Page specific content/section render here */}
        <main className={styles.content}>{children}</main>
        <LocationSection />
        <Footer />
        <FAB onClick={() => console.log("FAB clicked!")} />
        {/* Auth modal controlled here */}
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      </div>
    </AuthProvider>
  );
};

export default MainLayout;
