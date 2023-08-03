import React from "react";
import userImg from "../assests/img/user.jpeg";
import Layout from "./Layout";
function Hero() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Hero;
