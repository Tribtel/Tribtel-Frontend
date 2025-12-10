/*Rendering for the full forntend*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage/HotelDetailsPage";
import DesignSystemPage from "./pages/DesignSystemPage/DesignSystemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
