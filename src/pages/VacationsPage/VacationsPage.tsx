//Inspire users with curated packages and destination ideas for their next vacation.

// src/pages/VacationsPage/VacationsPage.tsx
import MainLayout from '../../layout/MainLayout';
import Button from '../../components/Button/Button';
import CardH from '../../components/Card-Horizontal/Card-Horizontal';
import styles from './VacationsPage.module.css';

import Vacation1 from '../../assets/images/Holiday/Holiday_10.svg';
import Vacation2 from '../../assets/images/Holiday/Holiday_12.svg';
import Vacation3 from '../../assets/images/Holiday/Holiday_6.svg';

import HeroSection from '../../sections/HeroSection/HeroSection';
import vacationsHeroImage from '../../assets/images/Holiday/Holiday_6.svg';
import ReviewSection from '../../sections/ReviewSection/ReviewSection';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

export default function VacationsPage() {
  return (
    <MainLayout
      hero={
        <HeroSection
          imageUrl={vacationsHeroImage}
          title="Dream. Explore. Discover."
          subtitle="Vacations that came out of a movie scene."
          showCTA={false}
        />
      }
    >
      <section className={styles.packagesSection}>
        <div className={styles.breadCrumb}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Vacation Packages' }]} />
        </div>

        <h2>Popular Packages</h2>
        <div className={styles.packagesList}>
          {/* Example vacation package */}

          <CardH
            imageUrl={Vacation1}
            title="Beach Paradise"
            description="5 days of sun and sand"
            price="From 999"
            location="Balito, Durban"
          >
            <Button variant="primary">View Details</Button>
          </CardH>

          <CardH
            imageUrl={Vacation2}
            title="Mountain Retreat"
            description="7 days of hiking and nature"
            price="From 1200"
            location="Drakensberg, KwaZulu-Natal"
          >
            <Button variant="primary">View Details</Button>
          </CardH>

          <CardH
            imageUrl={Vacation3}
            title="City Explorer"
            description="5 days of urban adventures"
            price="From 800"
            location="Johannesburg, Gauteng"
          >
            <Button variant="primary">View Details</Button>
          </CardH>
          {/* Add more packages */}
        </div>
      </section>
      {/* Customer Reviews Section */}
      <ReviewSection />
    </MainLayout>
  );
}
