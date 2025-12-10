import styles from "./Navbar.module.css";
import Logo from "../../assets/HlockupB.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/Auth";

interface NavbarProps {
  onSignInClick: () => void;
};

export default function Navbar({ onSignInClick }: NavbarProps) {

  // Access global auth state
  const { user, signOut } = useAuth();

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
        
        {user ? (
          <>
            <li><Link to="/profile">{user.username}</Link></li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); signOut(); }}>
                Sign out
              </a>
            </li>
          </>
        ) : (
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onSignInClick(); }}>
              Sign in
            </a>
          </li>
        )}
      </ul>

      {/* CTA */}
      {!user && (
        <div className={styles.cta}>
          <a href="#" onClick={(e) => { e.preventDefault(); onSignInClick(); }}>
            Join
          </a>
        </div>
      )}
    </nav>
  );
}
