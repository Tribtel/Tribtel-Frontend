// src/sections/Showcase/Showcase.tsx
// A section to showcase popular rooms or features
//Intutive and builds credibility.

import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Showcase.module.css";

interface Room {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
}

const rooms: Room[] = [
  { id: 1, name: "Luxury Suite", image: "src/assets/images/Rooms_1.svg", rating: 4.8, price: "250/night" },
  { id: 2, name: "Ocean View Room", image: "src/assets/images/Rooms_2.svg", rating: 4.7, price: "180/night" },
  { id: 3, name: "Garden Villa", image: "src/assets/images/Rooms_3.svg", rating: 4.9, price: "300/night" },
];

export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <h2>Popular Rooms</h2>
      <div className={styles.grid}>
        {rooms.map((room) => (
          <Link key={room.id} to={`/rooms/${room.id}`} className={styles.card}>
            <img src={room.image} alt={room.name} />
            <div className={styles.overlay}>
              <h3>{room.name}</h3>
              <p>Rating: {room.rating}</p>
              <p>{room.price}</p>

              {/* Arrow Indicator */}
              <span className={styles.arrow}>
                {/* Right Arrow - initially visible */}
                <svg
                  className={`${styles.arrowIcon} ${styles.rightArrow}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>

                {/* Left Arrow - appears on hover */}
                <span className={styles.leftArrow}></span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.cta}>
        <Button variant="primary">Explore More Rooms</Button>
      </div>
    </section>
  );
}
