import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import { AnimatePresence } from "framer-motion";

function AnimationPage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimationPage;
