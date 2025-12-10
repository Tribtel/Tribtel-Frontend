// src/pages/HotelsPage.tsx
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import styles from "./HotelsPage.module.css";

interface Room {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  rooms: Room[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Ocean Breeze Hotel",
    location: "Cape Town",
    rating: 4.7,
    image: "src/assets/images/hotel1.svg",
    rooms: [
      { id: 101, name: "Sea View Suite", price: "250/night", image: "src/assets/images/Rooms_1.svg" },
      { id: 102, name: "Standard Room", price: "120/night", image: "src/assets/images/Rooms_2.svg" },
      { id: 103, name: "Penthouse", price: "400/night", image: "src/assets/images/Rooms_3.svg" }
    ]
  },
  {
    id: 2,
    name: "Garden Retreat",
    location: "Durban",
    rating: 4.8,
    image: "src/assets/images/hotel2.svg",
    rooms: [
      { id: 201, name: "Villa Deluxe", price: "300/night", image: "src/assets/images/Rooms_3.svg" },
      { id: 202, name: "Family Room", price: "180/night", image: "src/assets/images/Rooms_2.svg" },
      { id: 203, name: "Garden Suite", price: "220/night", image: "src/assets/images/Rooms_1.svg" }
    ]
  }
];

export default function HotelsPage() {
  return (
    <MainLayout>
    <section className={styles.hotels}>
      <h2>Our Hotels</h2>
      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <div key={hotel.id} className={styles.hotelCard}>
            <Link to={`/hotels/${hotel.id}`}>
              <img src={hotel.image} alt={hotel.name} />
              <div className={styles.overlay}>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <p>⭐ {hotel.rating}</p>
              </div>
            </Link>

            {/* Featured rooms inline */}
            <div className={styles.roomsGrid}>
              {hotel.rooms.slice(0, 2).map((room) => (
                <Link key={room.id} to={`/rooms/${room.id}`} className={styles.roomCard}>
                  <img src={room.image} alt={room.name} />
                  <div className={styles.roomOverlay}>
                    <h4>{room.name}</h4>
                    <p>{room.price}</p>
                  </div>
                </Link>
              ))}
              <Link to={`/hotels/${hotel.id}`} className={styles.viewMore}>
                View all rooms →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </MainLayout>
  );
}
