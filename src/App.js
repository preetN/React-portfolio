import React from "react";
import "./style.scss";
import userImg from "./assests/img/user.jpeg";
import profileImg from "./assests/img/profile.jpeg";
function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
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

        <div className="section1" id="header">
          <div className="grid hero">
            <div className="left flex">
              <div className="flex">
                <div className="name">Hi, I am Antarpreet Kaur.</div>
                <div className="tag">Web Developer</div>
                <div className="sub-tag">
                  I love coding and learning new languages.
                </div>
                <button>
                  <a href="assests/Resume copy.pdf" download>
                    Download CV
                    <i className="fa-solid fa-file-arrow-down"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="right">
              <img src={userImg} alt="" />
            </div>
          </div>
        </div>

        <section className="banner">
          <div className="conatiner flex">
            <div className="flex info-list">
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="skill-section flex" id="skills">
          <h2>My Skills</h2>
          <div className="skillsdiv flex">
            <div className="skill-list">
              <div className="icon">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="skill">HTML</div>
            </div>
            <div className="skill-list">
              <div className="icon">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="skill">HTML</div>
            </div>
            <div className="skill-list">
              <div className="icon">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="skill">HTML</div>
            </div>
            <div className="skill-list">
              <div className="icon">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="skill">HTML</div>
            </div>
          </div>
        </div>
        <div className="project-section flex" id="projects">
          <h2>My Recent Work</h2>
          <div className="project-list flex">
            <div className="project flex">
              <div className="img-part">
                <img src={profileImg} alt="" />
              </div>
              <div className="button">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22-Jun-2023</p>
              </div>
            </div>
            <div className="project flex">
              <div className="img-part">
                <img src={profileImg} alt="" />
              </div>
              <div className="button">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22-Jun-2023</p>
              </div>
            </div>
            <div className="project flex">
              <div className="img-part">
                <img src={profileImg} alt="" />
              </div>
              <div className="button">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22-Jun-2023</p>
              </div>
            </div>
            <div className="project flex">
              <div className="img-part">
                <img src={profileImg} alt="" />
              </div>
              <div className="button">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22-Jun-2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section flex" id="about">
          <h2>About Me</h2>
          <div className="about flex">
            <div className="left">
              <img src={profileImg} alt="" />
            </div>
            <div className="right flex">
              <div className="name">
                <p>Antarpreet Kaur</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, quod officiis eius dolores, autem dolore ipsam optio
                  sit, ducimus tempora iste aut est minima voluptatibus? Quaerat
                  aperiam itaque molestiae iusto.
                </p>
              </div>
              <div className="interests">
                <p>Interests</p>
                <p>Reading, cooking, Gym</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section flex" id="contact">
          <h2>Get In Touch</h2>
          <div className="contact flex">
            <div className="socials flex">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            <h3>OR</h3>
            <div className="email-option">
              <button>
                pnarain82@gmail.com
                <a href="mailto:pnarain82@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default App;
