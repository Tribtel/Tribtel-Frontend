import React from "react";
import styles from "./Button.module.css";

// Define the possible visual styles (variants) for our button.
// This makes it easy to add more styles later (e.g., "danger", "success").
type Variant = "primary" | "secondary";

// Extend the default <button> props so our Button can be used
// just like a normal HTML button, but with extra features (like variant).
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; // optional prop, defaults to "primary"
}

// Reusable Button component
export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    // Apply both the base "button" class and the variant-specific class.
    // Example: class="button primary"
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {/* Render whatever is passed between <Button> ... </Button> */}
      {children}
    </button>
  );
}
