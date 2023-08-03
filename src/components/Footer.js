import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer flex">
        <div className="footer-container flex">
          <div className="links">
            <h2>Links</h2>
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-links">
            <h2>Social Links</h2>
            <ul>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Github</li>
              <li>Youtbe</li>
            </ul>
          </div>
        </div>

        <p>&COPY; Copywright: Made by Me</p>
      </footer>
    </>
  );
}

export default Footer;
