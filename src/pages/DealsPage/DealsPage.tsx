//This pages is designed to showcase current promotions, discounts, and special offers available to users.

// src/pages/DealsPage/DealsPage.tsx
import MainLayout from "../../layout/MainLayout";
import styles from "./DealsPage.module.css";
import Button from "../../components/Button/Button";
import CardV from "../../components/Card-Vertical/Card-Vertical";
import Holiday1 from "../../assets/images/Holiday/Holiday_1.svg";
import Holiday2 from "../../assets/images/Holiday/Holiday_2.svg";
import Holiday3 from "../../assets/images/Holiday/Holiday_3.svg";

import HeroSection from "../../sections/HeroSection/HeroSection";
import dealsHeroImage from "../../assets/images/Holiday/Holiday_5.svg";
import ReviewSection from "../../sections/ReviewSection/ReviewSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function DealsPage() {
    return (
        <MainLayout hero={
          <HeroSection
            imageUrl={dealsHeroImage}
            title="Book Easy, Travel More"
            subtitle="Save big on your next adventure with our latest promotions, with our exclusive deals and discounts."
            showCTA={false}
          /> 
        }>
            <section className={styles.dealsSection}>
                
                <div className={styles.breadCrumb}>
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Deals" }]} />
                </div>
                {/* Add your deals content in here */}
                <h2>Featured Deals</h2>
                {/*Deal card grid*/}
                <div className={styles.dealsGrid}>

                    <CardV
                        imageUrl={Holiday1}
                        title="Summer Special: 30% Off All Bookings"
                        description="Book your summer vacation now and save big on hotels and flights!"
                        >
                        <Button variant="primary">Book Now</Button>
                    </CardV>

                    <CardV
                        imageUrl={Holiday2}
                        title="Weekend Getaway: 20% Off Selected Destinations"
                        description="Escape for the weekend with exclusive discounts on top destinations."
                        >
                        <Button variant="primary">Explore Deals</Button>
                    </CardV>

                    <CardV
                        imageUrl={Holiday3}
                        title="Early Bird Offer: Save 25% on Advance Bookings"
                        description="Plan ahead and enjoy significant savings on your next trip."
                        >
                        <Button variant="primary">Plan Your Trip</Button>
                    </CardV>

                    {/* Add more deal cards as needed */}

                </div>
            </section>
           
            {/* Newsletter Signup Section */}
            <section className={styles.newsletterSection}>
                <h2>Never Miss a Deal</h2>
                <p>Subscribe to our newsletter and never miss out on exclusive offers!</p>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Enter your email" className={styles.emailInput} />
                    <Button type="submit" variant="secondary">Subscribe</Button>
                </form>
            </section>
            <ReviewSection />
        </MainLayout>
    );
}