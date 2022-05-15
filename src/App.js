import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowlegdges from "./pages/Knowlegdges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competence" element={<Knowlegdges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
