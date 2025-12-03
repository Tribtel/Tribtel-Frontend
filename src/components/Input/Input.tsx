import React from "react";
import styles from "./Input.module.css";

// Props for our Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label above the input
  error?: string; // Optional error message below the input
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      {/* Render label if provided */}
      {label && <label className={styles.label}>{label}</label>}

      {/* Input field itself */}
      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        {...props}
      />

      {/* Render error message if provided */}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
