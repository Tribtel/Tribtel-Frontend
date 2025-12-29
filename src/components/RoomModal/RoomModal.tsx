//a dedicated component that composes Modal + room details.

// src/components/RoomModal/RoomModal.tsx
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import styles from './RoomModal.module.css';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  name: string;
  price: string;
  images: string[];
}

export default function RoomModal({ isOpen, onClose, name, price, images }: RoomModalProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <h3>{name}</h3>

        <div className={styles.carousel}>
          <button onClick={prev} className={styles.navBtn}>
            ‹
          </button>
          <img src={images[index]} alt={`${name} ${index}`} />
          <button onClick={next} className={styles.navBtn}>
            ›
          </button>
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.price}>{price}</p>
          <Button variant="primary">Book Now</Button>
        </div>
      </div>
    </Modal>
  );
}
