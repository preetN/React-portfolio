import React from "react";

function Contact() {
  return (
    <>
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
    </>
  );
}

export default Contact;
