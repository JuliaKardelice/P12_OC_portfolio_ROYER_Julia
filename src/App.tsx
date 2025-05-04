import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";

import { Footer } from "./common/footer/Footer";
import { Header } from "./common/header/Header";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/home" element={<Home />}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
