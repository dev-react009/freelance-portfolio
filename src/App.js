import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/Nav/Nav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Particle from "./utils/Particles";
const App = () => {
  const location = useLocation();

  const renderHomePage = location.pathname === "/";
  return (
    <div className="App">
      <ToastContainer />
      <Nav /> 
      {/* PArticles js */}
      {/* <Particle id="particles" init={handelInit}/> */}
      {renderHomePage && <Particle />}

      {/* main page content */}

      <div className="App_Main_Page_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
