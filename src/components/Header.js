import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skill">Skills</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
