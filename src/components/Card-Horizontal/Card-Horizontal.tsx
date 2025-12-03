// This is a general information display card that carries short contextual information
// and one CTA to reveal more information.
// Parts of information can be excluded depending on the usage and purpose.
// This card has 2 orientation types: Card-Vertical and Card-Horizontal.

import React from "react";
import styles from "./Card-Horizontal.module.css";

interface CardHProps {
  title: string;          // Main heading for the card
  description: string;    // Supporting text
  imageUrl?: string;      // Optional image on the left
  price?: string;         // Price per night
  rating?: number;        // Rating out of 5
  location?: string;      // City or area
  children?: React.ReactNode; // CTA button(s)
}

export default function CardH({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  children,
}: CardHProps) {
  return (
    <div className={styles.cardH}>
      {/* Image on the left */}
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}

      {/* Content on the right */}
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>{title}</h3>
          {location && <p className={styles.location}>{location}</p>}

          {rating !== undefined && (
            <div className={styles.rating}>
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
              <span className={styles.ratingValue}> {rating.toFixed(1)}/5</span>
            </div>
          )}

          <p className={styles.description}>{description}</p>

          {price && <p className={styles.price}>{price} / night</p>}
        </div>

        {/* CTA anchored bottom-right */}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </div>
  );
}
