import React from "react";
import styles from "./HotelCard.module.css";

interface HotelDisplayProps {
  title: string;
  description: string;
  imageUrl?: string;
  price?: string;
  rating?: number;
  location?: string;
  children?: React.ReactNode; // CTA button(s)
}

export default function HotelDisplay({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  children,
}: HotelDisplayProps) {
  return (
    <div className={styles.card}>
      {/* Image on the left */}
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}

      {/* Info section on the right */}
      <div className={styles.info}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>{title}</h2>

          {/* Location + Rating side by side */}
          <div className={styles.meta}>
            {location && <span className={styles.location}>{location}</span>}
            {rating !== undefined && (
              <>
                <span className={styles.divider}></span>
                <span className={styles.rating}>
                  {"★".repeat(Math.floor(rating))}
                  {"☆".repeat(5 - Math.floor(rating))}
                  <span className={styles.ratingValue}>
                    {" "}
                    {rating.toFixed(1)}/5
                  </span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        <div className={styles.hr}></div>

        {/* Price + CTA row */}
        <div className={styles.footerRow}>
          {price && (
            <p className={styles.price}>Starting at - {price} / night</p>
          )}
          <div className={styles.actions}>{children}</div>
        </div>
      </div>
    </div>
  );
}
