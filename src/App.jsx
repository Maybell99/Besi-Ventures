import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ECommercePage from "./pages/e-commercePage";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ECommercePage />} />
      </Routes>
    
  );
};

export default App;
