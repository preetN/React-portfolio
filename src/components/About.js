import React from "react";
import profileImg from "../assests/img/profile.jpeg";

function About() {
  return (
    <>
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
    </>
  );
}

export default About;
