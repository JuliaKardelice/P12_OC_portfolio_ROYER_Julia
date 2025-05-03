import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import "./index.scss";
import { Footer } from "./src/common/footer/Footer";
import { Header } from "./src/common/header/Header";
import { Contact } from "./src/pages/contact/Contact";

import { Page404 } from "./src/pages/page404/page404";
import ProjectsList from "./src/pages/gallery/ProjectsList";
import { Home } from "./src/pages/home/Home";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProjectsList />} />
          <Route path="/about" element={<Home/>} />

  
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path="/home" element={<Home />}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
