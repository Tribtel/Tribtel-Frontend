// Breadcrumb component to help users understand navigation patterns
// and provide quick access back to parent pages.

// Import Link from react-router-dom for navigation
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

// Props interface: each breadcrumb item has a label and optional href
interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    // Use <nav> with aria-label for accessibility
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          // Determine if this is the last item in the breadcrumb trail
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.breadcrumbItem}>
              {/* If item has href and is not the last, render as a clickable link */}
              {item.href && !isLast ? (
                <Link to={item.href}>{item.label}</Link>
              ) : (
                // Otherwise render as plain text (current page)
                <span className={styles.current}>{item.label}</span>
              )}

              {/* Render separator unless this is the last item */}
              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
