// src/pages/HotelDetailPage.tsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './HotelDetailsPage.module.css';
import HotelsHero from '../HotelsPage/HotelsHero';
import SearchBar from '../../components/Searchbar/Searchbar';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import RoomModal from '../../components/RoomModal/RoomModal';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import MainLayout from '../../layout/MainLayout';

//Imported images
import Hotel3 from '../../assets/images/Hotel/Hotel_3.svg';
import Hotel2 from '../../assets/images/Hotel/Hotel_2.svg';
import Room1 from '../../assets/images/Rooms/Rooms_1.svg';
import Room2 from '../../assets/images/Rooms/Rooms_9.svg';
import Room3 from '../../assets/images/Rooms/Rooms_3.svg';

interface Room {
  id: number;
  name: string;
  price: string;
  images: string[];
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

//Mock hotel data - replace with real data fetching in production //API integration
const hotelData: Record<number, Hotel> = {
  1: {
    id: 1,
    name: 'Ocean Breeze Hotel',
    location: 'Cape Town',
    rating: 4.7,
    description: 'A seaside escape with panoramic ocean views and luxury amenities.',
    image: Hotel3,
    rooms: [
      { id: 101, name: 'Sea View Suite', price: '250/night', images: [Room1, Room2, Room3] },
      { id: 102, name: 'Standard Room', price: '120/night', images: [Room2, Room3] },
      { id: 103, name: 'Penthouse', price: '400/night', images: [Room3, Room1] },
    ],
  },
  2: {
    id: 2,
    name: 'Garden Retreat',
    location: 'Durban',
    rating: 4.8,
    description: 'Relax in lush gardens with family-friendly amenities and spacious villas.',
    image: Hotel2,
    rooms: [
      { id: 201, name: 'Villa Deluxe', price: '300/night', images: [Room3, Room2, Room1] },
      { id: 202, name: 'Family Room', price: '180/night', images: [Room2, Room3] },
      { id: 203, name: 'Garden Suite', price: '220/night', images: [Room1, Room3] },
    ],
  },
};

export default function HotelDetailPage() {
  const { id } = useParams<{ id: string }>();
  const hotel = hotelData[Number(id)];
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  if (!hotel) return <p>Hotel not found</p>;

  return (
    <MainLayout hero={<HotelsHero />}>
      {/* Floating SearchBar */}
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
      <section className={styles.detail}>
        <div className={styles.breadCrumb}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hotels', href: '/Hotels' },
              { label: 'Details' },
            ]}
          />
        </div>

        <img src={hotel.image} alt={hotel.name} className={styles.hero} />
        <div className={styles.backBtnWrapper}>
          <Link to="/hotels" className={styles.backBtn}>
            <span className={styles.chevron} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path
                  d="M15 18L9 12l6-6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.caption}>Back to Hotels</span>
          </Link>
        </div>
        <div className={styles.info}>
          <h2>{hotel.name}</h2>
          <p>{hotel.location}</p>
          <p>
            {'\u2B50'} {hotel.rating}
          </p>
          <p>{hotel.description}</p>
        </div>

        <h3 className={styles.roomsHeading}>Rooms</h3>
        <div className={styles.roomsGrid}>
          {hotel.rooms.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <img src={room.images && room.images.length ? room.images[0] : ''} alt={room.name} />
              {/* Overlay button */}
              <div className={styles.viewMoreOverlay}>
                <Button
                  variant="secondary"
                  className={styles.viewMoreBtn}
                  onClick={() => setActiveRoom(room)}
                >
                  View More
                </Button>
              </div>

              <div className={styles.roomOverlay}>
                <div className={styles.roomInfo}>
                  <h4>{room.name}</h4>
                  <p>{room.price}</p>
                  <Button className={styles.bookBtn} variant="secondary">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Details Modal */}
      <RoomModal
        isOpen={!!activeRoom}
        onClose={() => setActiveRoom(null)}
        id={activeRoom?.id ?? 0}
        name={activeRoom?.name ?? ''}
        price={activeRoom?.price ?? ''}
        images={activeRoom ? activeRoom.images : []}
      />
    </MainLayout>
  );
}
