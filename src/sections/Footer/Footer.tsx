// src/sections/Footer.tsx

import { Link } from "react-router-dom"; // use Router links
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.logo}>Tribtel</h3>
        <nav className={styles.links}>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          {/* design system link */}
          <Link to="/design-system" className={styles.sitemapLink}>
            Design System
          </Link>
          {/*sitemap link*/}
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Tribtel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
