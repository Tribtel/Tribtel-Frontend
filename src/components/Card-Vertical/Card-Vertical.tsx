//This is a general information display card that carries short contextual information 
//and one cta to reveal more information.
//Parts of information can be excluded dependint on the usage and purpose.
//This card has 2 orientation types : Card-Vertiacl and Card-Horizontal.

import React from "react";
import styles from "./Card-Vertical.module.css";

interface CardVProps {
  title: string; // Main heading for the card
  description: string; // Supporting text
  imageUrl?: string; // Optional image at the top
  price?: string; // Price per night
  rating?: number; // Rating out of 5
  location?: string; // City or area
  children?: React.ReactNode; // For extra content like buttons
}

export default function CardV({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  children,
}: CardVProps) {
  return (
    <div className={styles.cardV}>
      {/* Image */}
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {location && <p className={styles.location}>{location}</p>}

        {/* Rating stars */}
        {rating !== undefined && (
          <div className={styles.rating}>
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
            <span className={styles.ratingValue}> {rating.toFixed(1)}/5</span>
          </div>
        )}
        <p className={styles.description}>{description}</p>

        {/* Price */}
        {price && <p className={styles.price}>{price} / night</p>}

        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </div>
  );
}
