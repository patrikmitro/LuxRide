import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import AboutUs from "./pages/aboutus/AboutUs";
import Contact from "./pages/contact/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c" element={<h1>Yo</h1>} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);
