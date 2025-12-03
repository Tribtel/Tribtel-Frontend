import styles from "./Navbar.module.css";
import Logo from "../../assets/HlockupB.svg"; // adjust path if needed
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo - links to landing page */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Brand Logo" />
        </Link>
      </div>

      {/* Links */}
      <ul className={styles.links}>
        <li>
          <a href="/hotels">Hotels</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
        <li>
          <a href="/vacations">Vacations</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/signin">Sign in</a>
        </li>
      </ul>

      {/* CTA */}
      <div className={styles.cta}>
        <a href="/join">Join</a>
      </div>
    </nav>
  );
}
