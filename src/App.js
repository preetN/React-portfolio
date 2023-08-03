import React from "react";
import "./style.scss";
import profileImg from "./assests/img/profile.jpeg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
        <Header />
        <Hero />
        <Banner />
        <Skill />
        <Project />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
