// src/pages/HotelsPage.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import HotelsHero from './HotelsHero';
import SearchBar from '../../components/Searchbar/Searchbar';
import Button from '../../components/Button/Button';
import GalleryModal from '../../components/GalleryModal/GalleryModal';
import styles from './HotelsPage.module.css';
import BrandSection from '../../sections/Brand/BrandSection';
import ReviewSection from '../../sections/ReviewSection/ReviewSection';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FAQ from '../../sections/FAQ/FAQ';

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
    name: 'Ocean Breeze Hotel',
    location: 'Cape Town',
    rating: 4.7,
    image: 'src/assets/images/Hotel/Hotel_3.svg',
    rooms: [
      {
        id: 101,
        name: 'Sea View Suite',
        price: '250/night',
        image: 'src/assets/images/Rooms/Rooms_1.svg',
      },
      {
        id: 102,
        name: 'Standard Room',
        price: '120/night',
        image: 'src/assets/images/Rooms/Rooms_2.svg',
      },
      {
        id: 103,
        name: 'Penthouse',
        price: '400/night',
        image: 'src/assets/images/Rooms/Rooms_3.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'Garden Retreat',
    location: 'Durban',
    rating: 4.8,
    image: 'src/assets/images/Hotel/Hotel_2.svg',
    rooms: [
      {
        id: 201,
        name: 'Villa Deluxe',
        price: '300/night',
        image: 'src/assets/images/Rooms/Rooms_3.svg',
      },
      {
        id: 202,
        name: 'Family Room',
        price: '180/night',
        image: 'src/assets/images/Rooms/Rooms_2.svg',
      },
      {
        id: 203,
        name: 'Garden Suite',
        price: '220/night',
        image: 'src/assets/images/Rooms/Rooms_1.svg',
      },
    ],
  },
];

export default function HotelsPage() {
  const [openGallery, setOpenGallery] = useState(false);
  const [activeHotelId, setActiveHotelId] = useState<number | null>(null);

  const hotelImages: Record<number, string[]> = {
    1: [
      'src/assets/images/Hotel/Hotel_1.svg',
      'src/assets/images/Rooms/Rooms_2.svg',
      'src/assets/images/Rooms/Rooms_3.svg',
    ],
    2: [
      'src/assets/images/Hotel/Hotel_2.svg',
      'src/assets/images/Rooms/Rooms_1.svg',
      'src/assets/images/Rooms/Rooms_3.svg',
    ],
  };

  return (
    <MainLayout hero={<HotelsHero />}>
      {/* Floating SearchBar */}
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>

      <div className={styles.breadCrumb}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Hotels' }]} />
      </div>

      {/* Tribtel Hotels Brand Section */}
      <BrandSection amenities />

      <section className={styles.hotels}>
        <h2>Stay in our lovely places</h2>
        <div className={styles.grid}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className={styles.hotelCard}>
              <div className={styles.heroSection}>
                <img src={hotel.image} alt={hotel.name} />

                {/* Overlay sits on top of the image */}
                <div className={styles.overlay}>
                  <div className={styles.overlayLeft}>
                    <h3>{hotel.name}</h3>
                    <p>{hotel.location}</p>
                    <p>⭐ {hotel.rating}</p>
                  </div>

                  <div className={styles.overlayRight}>
                    <p className={styles.description}>
                      {hotel.name === 'Ocean Breeze Hotel'
                        ? 'Where waves whisper and sunsets paint the sky. Come have a dreamy stay with us in the heart of the Mother City.'
                        : "A sanctuary where blossoms meet gentle breezes. Warm hospitality awaits you in Durban's green embrace."}
                    </p>
                    <div className={styles.ctaGroup}>
                      <Button
                        variant="secondary"
                        className={styles.goldSecondary}
                        onClick={() => {
                          setActiveHotelId(hotel.id);
                          setOpenGallery(true);
                        }}
                      >
                        View Gallery
                      </Button>

                      <Link to={`/hotels/${hotel.id}`} className={styles.ctaBtn}>
                        <Button variant="primary">See Rooms</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular rooms grid */}
              <div className={styles.roomsGrid}>
                {hotel.rooms.slice(0, 3).map((room) => (
                  <Link key={room.id} to={`/rooms/${room.id}`} className={styles.roomCard}>
                    <img src={room.image} alt={room.name} />
                    <div className={styles.roomOverlay}>
                      <h4>{room.name}</h4>
                      <p>{room.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Single modal at root */}
      <GalleryModal
        isOpen={openGallery}
        onClose={() => setOpenGallery(false)}
        images={hotelImages[activeHotelId ?? 1]} // later: swap per hotel using activeHotelId
      />

      <ReviewSection />
      <FAQ />
    </MainLayout>
  );
}
