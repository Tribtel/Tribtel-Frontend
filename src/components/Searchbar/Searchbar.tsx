import React, { useState } from "react";
import LocationIcon from "../../assets/icons/location.svg";
import styles from "./Searchbar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Mock suggestions — replace with API call later
    const allDestinations = ["Cape Town", "Durban", "Johannesburg", "Pretoria"];
    setSuggestions(
      allDestinations.filter((d) =>
        d.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    if (!query || !checkIn || !checkOut) {
      alert("Please fill in all fields");
      return;
    }

    // For now, just log — later connect to backend
    console.log("Search parameters:", {
      destination: query,
      checkIn,
      checkOut,
    });
  };

  return (
    <div className={styles.searchBar}>
      {/* Destination */}
      <div className={styles.section}>
        <img src={LocationIcon} alt="Location" className={styles.icon} />
        <input
          type="text"
          placeholder="Where are you going?"
          value={query}
          onChange={handleInput}
        />
        {query && suggestions.length > 0 && (
          <ul className={styles.dropdown}>
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Date Picker */}
      <div className={styles.section}>
        <div className={styles.dateInputs}>
          <div className={styles.dateField}>
            <span className={styles.label}>From:</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <span className={styles.divider}>|</span>

          <div className={styles.dateField}>
            <span className={styles.label}>To:</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <button onClick={handleSearch}>Check Availability</button>
      </div>
    </div>
  );
}
