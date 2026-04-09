import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home/Home.jsx";
import About from "./Views/About/About.jsx";
import OurService from "./Views/OurService/OurService.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import NotFound from "./Views/NotFound/NotFound.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);