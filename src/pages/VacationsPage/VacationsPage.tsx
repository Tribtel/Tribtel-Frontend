//Inspire users with curated packages and destination ideas for their next vacation.

// src/pages/VacationsPage/VacationsPage.tsx
import MainLayout from "../../layout/MainLayout";
import Button from "../../components/Button/Button";
import CardH from "../../components/Card-Horizontal/Card-Horizontal";
import styles from "./VacationsPage.module.css";

import Vacation1 from "../../assets/images/Holiday/Holiday_10.svg"; 
import Vacation2 from "../../assets/images/Holiday/Holiday_12.svg"; 
import Vacation3 from "../../assets/images/Holiday/Holiday_6.svg";


export default function VacationsPage() {
  return (
    <MainLayout hero={<h1 className={styles.heroTitle}>Dream Vacations</h1>}>
      <section className={styles.packagesSection}>
        <h2>Popular Packages</h2>
        <div className={styles.packagesList}>
          {/* Example vacation package */}

          <CardH
            imageUrl={Vacation1}
            title="Beach Paradise"
            description="5 days of sun and sand"
            price="From 999"
            location= "Balito, Durban"
            >
              <Button variant="primary">View Details</Button>

          </CardH>

          <CardH
            imageUrl={Vacation2}
            title="Mountain Retreat"
            description="7 days of hiking and nature"
            price="From 1200"
            location= "Drakensberg, KwaZulu-Natal"
            >
              <Button variant="primary">View Details</Button>
          </CardH>

          <CardH
            imageUrl={Vacation3}
            title="City Explorer"
            description="5 days of urban adventures"
            price="From 800"
            location= "Johannesburg, Gauteng"
            >
              <Button variant="primary">View Details</Button>
          </CardH>
          {/* Add more packages */}
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>What Our Travelers Say</h2>
        <blockquote>
          “The beach package was unforgettable — everything was perfectly organized!”
        </blockquote>
      </section>
    </MainLayout>
  );
}
