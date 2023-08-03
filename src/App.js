import React from "react";
import "./style.scss";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/hero" element={<Hero />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Header />
        <Hero />
        <Banner />
        <Skill />
        <Project />
        <About />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
