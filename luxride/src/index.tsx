import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./pages/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Main</h1>} />
        <Route path="/c" element={<h1>Yo</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
