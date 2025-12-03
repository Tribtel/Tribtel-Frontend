import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CardV from "../../components/Card-Vertical/Card-Vertical";
import CardH from "../../components/Card-Horizontal/Card-Horizontal";
import HotelDisplay from "../../components/HotelDisplay-Card/HotelCard";
import Footer from "../../sections/Footer/Footer";
import LocationsSection from "../../sections/LocationSection/LocationSection";
import FAB from "../../components/FAB/FAB";
import styles from "./DesignSystemPage.module.css";

export default function DesignSystemPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar
          links={[
            { href: "#searchbar", label: "Search Bar" },
            { href: "#inputs", label: "Inputs" },
            { href: "#buttons", label: "Buttons" },
            { href: "#cards", label: "Cards" },
            { href: "#hotel-display", label: "Hotel Display" },
          ]}
        />

        <main className={styles.content}>
          <h1>Design System</h1>
          <p>This page showcases our reusable components.</p>

          <section id="searchbar">
            <h2>Search Bar</h2>
            <SearchBar />
          </section>

          <section id="inputs">
            <h2>Inputs</h2>
            <Input label="Email Address" placeholder="Enter your email" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              error="Password must be at least 8 characters"
            />
          </section>

          <section id="buttons">
            <h2>Buttons</h2>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </section>

          <section id="cards">
            <h2>Cards</h2>
            <CardV
              title="Luxury Hotel"
              rating={4.5}
              location="Cape Town, South Africa"
              description="Ocean views and world-class service."
              price="$250"
              imageUrl="https://picsum.photos/400/200"
            >
              <Button variant="primary">Book Now</Button>
            </CardV>

            <CardH
              title="Luxury Hotel"
              rating={4.5}
              location="Cape Town, South Africa"
              description="Ocean views and world-class service."
              price="$250"
              imageUrl="https://picsum.photos/400/200"
            >
              <Button variant="primary">Book Now</Button>
            </CardH>
          </section>

          <section id="hotel-display">
            <h2>Hotel Display</h2>
            <HotelDisplay
              title="Seaside Resort"
              description="Luxurious stay with panoramic ocean views."
              imageUrl="https://picsum.photos/400/300"
              price="$320"
              rating={4.7}
              location="Cape Town, South Africa"
            >
              <Button variant="primary">Visit</Button>
            </HotelDisplay>
          </section>
          <LocationsSection/>
          <Footer/>
          <FAB />
        </main>
      </div>
    </div>
  );
}
