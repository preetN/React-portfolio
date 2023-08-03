import React from "react";
import profileImg from "../assests/img/profile.jpeg";

function Project() {
  return (
    <>
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
    </>
  );
}

export default Project;
