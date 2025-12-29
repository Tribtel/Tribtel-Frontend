//Gallery carousel modal component/container

// src/components/GalleryModal/GalleryModal.tsx
import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './GalleryModal.module.css';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function GalleryModal({ isOpen, onClose, images }: GalleryModalProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.carousel}>
        <button onClick={prev} className={styles.navBtn}>
          ‹
        </button>
        <img src={images[index]} alt={`Gallery ${index}`} />
        <button onClick={next} className={styles.navBtn}>
          ›
        </button>
      </div>
    </Modal>
  );
}
