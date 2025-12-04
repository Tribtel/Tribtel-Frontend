//User sign-up and sign-in modal component
import React, { useState } from 'react';
import { useAuth } from "../../auth/Auth";   //import global auth state
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
const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultSignUp }) => {
  const { signIn, signUp } = useAuth();// Access login function from global auth state

 // State to toggle between sign-in and sign-up forms (Array ([isSignUp, setIsSignUp]))
 const [isSignUp, setIsSignUp] = useState(defaultSignUp || false);

 // State to hold form data (Array ([formData, setFormData]))
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
      if (isSignUp) {
        await signUp(formData.username!, formData.email, formData.password);
        setSuccess("Sign-up successful!");
      } else {
        await signIn(formData.email, formData.password);
        setSuccess("Sign-in successful!");
      }
      setTimeout(onClose, 1500); // Close modal after success
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    };

  }; // close handleSubmit

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
        <h2>Welcome Triber</h2>

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

        <button onClick={handleGoogleAuth} className="google-btn">
          <img src="src/assets/google-logo.svg" alt="Google logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;