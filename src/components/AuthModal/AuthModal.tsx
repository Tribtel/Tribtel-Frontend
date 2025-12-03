//User sign-up and sign-in modal component
import React, { useState } from 'react';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSignUp?: boolean;
};

interface FormData {
  username?: string;
  email: string;
  password: string;
};

// AuthModal component definition
const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
 // State to toggle between sign-in and sign-up forms
 const [isSignUp, setIsSignUp] = useState(false);

 // State to hold form data
 const [formData, setFormData] = useState<FormData>({ username: '', email: '', password: '' });

 // State for feedback (success/error messages)
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

 // Function to handle input changes 
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

   // Function to handle form submission for sign-in and sign-up
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Determine endpoint based on sign-in or sign-up
    try {
      const endpoint = isSignUp
        ? "http://localhost:4000/api/users/signup"
        : "http://localhost:4000/api/users/signin";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

  //Function to check for errors and handle response from server - output message.
   if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || "Something went wrong");
        return;
      }

      await res.json();
      setSuccess(isSignUp ? "Account created successfully!" : "Signed in successfully!");
      // Optionally close modal after short delay
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      setError("Network error: " + err.message);
    }
  };

  // Function to handle Google OAuth authentication
  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:4000/api/auth/google";
  };

  if (!isOpen) return null;

  // JSX (HTML like structure) for the modal
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>User Authentication</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={!isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>

         {/* Feedback messages */}
        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">{success}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>

        <hr />

        <button onClick={handleGoogleAuth} className="google-btn">Sign in with Google</button>
      </div>
    </div>
  );
};

export default AuthModal;