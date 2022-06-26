import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import ConfirmationPage from "./ConfirmationPage/ConfirmationPage";
import PageNotFound from "./404/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
