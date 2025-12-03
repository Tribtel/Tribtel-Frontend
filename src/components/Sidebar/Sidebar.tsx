import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

interface Link {
  href: string;
  label: string;
}

interface SidebarProps {
  links: Link[];
}

export default function Sidebar({ links }: SidebarProps) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      let currentSection = "";

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentSection = link.href;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Sidebar Menu</h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? styles.active : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
