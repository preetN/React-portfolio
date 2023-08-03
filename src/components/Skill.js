import React from "react";
import Layout from "./Layout";

function Skill() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Skill;
