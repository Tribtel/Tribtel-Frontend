//This is the globla state for authentication
//It provides the authentication context to the entire application
//It manages user login state and provides functions to log in and log out

import React, { createContext, useContext, useEffect, useState } from "react";

// Define types for user and context
interface User {
  username: string;
  email: string;
  token: string; // Authentication token
}

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise <void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to wrap the application and provide auth state
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  //Load user from local storage or API on mount (not implemented here)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle user sign up - (API call to backend)
  const signUp = async (username: string, email: string, password: string) => {
    const res = await fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Sign up failed");

    const userData: User = { username: data.username, email: data.email, token: data.token };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to handle user sign in-(API call to backend)
  const signIn = async (email: string, password: string) => {
    const res = await fetch("http://localhost:4000/api/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Sign in failed");

    const userData: User = { username: data.username, email: data.email, token: data.token };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to handle user sign out
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
