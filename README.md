# Tribetel Frontend (Prototype)

This is the frontend for the Tribetel web app, built with **React + TypeScript + Vite**.  
The goal of this project is to implement the designs from Figma as closely as possible, with a simple structure that the whole team can follow.

---

## Project Overview

![App Screenshot Placeholder](./assets/images/screenshot-placeholder.png)

Use this section to describe the purpose of the app, the target users, and the main features once you’re ready.

---

## 📂 Folder Structure

```text
src/
│
├── assets/                # Static files (images, logos, SVGs)
│   ├── images/
│   └── svg/
│
├── components/            # Reusable UI pieces (buttons, inputs, cards, navbar)
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── Navbar/
│
├── sections/              # Page slices (Hero, Services, Testimonials, etc.)
│   ├── HeroSection/
│   ├── ServicesSection/
│   ├── TestimonialsSection/
│   └── HotelLocations/
│
├── layout/                # Page wrappers / scaffolding
│   ├── Header/
│   ├── Footer/
│   └── MainLayout.tsx
│
├── pages/                 # Full pages/screens (routes)
│   ├── DesignSystemPage/
│   ├── LandingPage/
│   ├── SearchResultsPage/
│   ├── BookingPage/
│   ├── LoginPage/
│   ├── RegisterPage/
│   ├── MyBookingsPage/
│   └── NotFoundPage/
│
├── routes/                # Central place to define app routes
│   └── routes.ts
│
├── context/               # React Context providers
│   ├── AuthContext.tsx
│   ├── BookingContext.tsx
│   └── ThemeContext.tsx
│
├── hooks/                 # Custom React hooks
│   ├── useAuth.tsx
│   ├── useBooking.ts
│   ├── useDebounce.ts
│   ├── useForm.ts
│   ├── useHotels.ts
│   ├── useRooms.ts
│   └── useSearch.ts
│
├── services/              # API calls & business logic
│   ├── api.ts
│   ├── authService.ts
│   ├── bookingService.ts
│   ├── hotelService.ts
│   ├── roomService.ts
│   ├── searchService.ts
│   └── userService.ts
│
├── styles/                # Global CSS, variables, and resets
│   └── variables.css
│
├── utils/                 # Helper functions
│   ├── dateHelpers.ts
│   ├── formatters.ts
│   ├── priceCalculator.ts
│   └── validators.ts
│
├── constants/             # Config & constants
│   ├── apiEndpoints.ts
│   ├── config.ts
│   └── routes.ts
│
├── App.tsx                # Root app component
├── App.css                # Global app styles
├── index.css              # Base CSS reset
├── main.tsx               # Entry point (renders <App />)
└── vite-env.d.ts          # Vite TypeScript definitions
```

## Getting Started

Install dependencies:

```bash
npm install
Run the development server:

bash
npm run dev
Build for production:

bash
npm run build
```
