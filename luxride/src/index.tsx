import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/c" element={<h1>Yo</h1>} />
    </Routes>
    <Footer />
  </Router>
);
