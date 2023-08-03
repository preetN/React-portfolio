import React from "react";

function Header() {
  return (
    <>
      <header className="flex primary-header">
        <div className="logo flex">
          <div>
            <h1>Preet</h1>
          </div>
          <div>
            <h1 className="line">Web Developer</h1>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-item">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="flex navigation">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
