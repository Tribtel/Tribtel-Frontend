// src/pages/HotelDetailPage.tsx
import { useParams } from "react-router-dom";
import styles from "./HotelDetailsPage.module.css";
import HotelsHero from "../HotelsPage/HotelsHero";
import SearchBar from "../../components/Searchbar/Searchbar";
import MainLayout from "../../layout/MainLayout";

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
  description: string;
  image: string;
  rooms: Room[];
}

// Mock data (replace with API or context later)
const hotelData: Record<number, Hotel> = {
  1: {
    id: 1,
    name: "Ocean Breeze Hotel",
    location: "Cape Town",
    rating: 4.7,
    description: "A seaside escape with panoramic ocean views and luxury amenities.",
    image: "src/assets/images/Hotel/Hotel_3.svg",
    rooms: [
      { id: 101, name: "Sea View Suite", price: "250/night", image: "src/assets/images/Rooms/Rooms_1.svg" },
      { id: 102, name: "Standard Room", price: "120/night", image: "src/assets/images/Rooms/Rooms_2.svg" },
      { id: 103, name: "Penthouse", price: "400/night", image: "src/assets/images/Rooms/Rooms_3.svg" }
    ]
  },
  2: {
    id: 2,
    name: "Garden Retreat",
    location: "Durban",
    rating: 4.8,
    description: "Relax in lush gardens with family-friendly amenities and spacious villas.",
    image: "src/assets/images/Hotel/Hotel_2.svg",
    rooms: [
      { id: 201, name: "Villa Deluxe", price: "300/night", image: "src/assets/images/Rooms/Rooms_3.svg" },
      { id: 202, name: "Family Room", price: "180/night", image: "src/assets/images/Rooms/Rooms_2.svg" },
      { id: 203, name: "Garden Suite", price: "220/night", image: "src/assets/images/Rooms/Rooms_1.svg" }
    ]
  }
};

export default function HotelDetailPage() {
  const { id } = useParams<{ id: string }>();
  const hotel = hotelData[Number(id)];

  if (!hotel) return <p>Hotel not found</p>;

  return (
    <MainLayout hero={<HotelsHero />}>
      {/* Floating SearchBar */}
        <div className={styles.searchWrapper}>
         <SearchBar />
        </div>
    <section className={styles.detail}>
      <img src={hotel.image} alt={hotel.name} className={styles.hero} />
      <div className={styles.info}>
        <h2>{hotel.name}</h2>
        <p>{hotel.location}</p>
        <p>⭐ {hotel.rating}</p>
        <p>{hotel.description}</p>
      </div>

      <h3 className={styles.roomsHeading}>Rooms</h3>
      <div className={styles.roomsGrid}>
        {hotel.rooms.map((room) => (
          <div key={room.id} className={styles.roomCard}>
            <img src={room.image} alt={room.name} />
            <div className={styles.roomOverlay}>
              <h4>{room.name}</h4>
              <p>{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </MainLayout>
  );
}
