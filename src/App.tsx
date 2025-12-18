/*Rendering for the full forntend*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage/HotelDetailsPage";
import DealsPage from "./pages/DealsPage/DealsPage";
import VacationsPage from "./pages/VacationsPage/VacationsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DesignSystemPage from "./pages/DesignSystemPage/DesignSystemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/vacations" element={<VacationsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
