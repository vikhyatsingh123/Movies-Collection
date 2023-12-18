import React from "react";

import { Link } from "react-router-dom";
import "../styles/About.css";
import "../styles/styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="about_back">
        <div className="about_div">
          <h1>Movies</h1>
          <h2>Collection</h2>
          <p>
            <strong>Welcome to Movies Collection</strong>, where passion meets
            the magic of cinema! Our mission is to provide a seamless, immersive
            experience for movie enthusiasts. Explore our carefully organized
            library and discover recommendations tailored to your taste..
          </p>
          <Link to="/">
            <button>Explore&nbsp;&nbsp;&#8594;</button>
          </Link>
        </div>
        <div className="about_side">
          <img src={require("../images/about_side.png")} alt="" />
        </div>
      </div>

      <div className="container mt-3 linkdiv text-center">
        <h1>This Project Is Developed by Vikhyat Singh</h1>
        <a className="links" href="https://github.com/vikyatsingh07" target="blank">
          <FaGithub /> Github
        </a>
        &#160;|&#160;
        <a className="links" href="https://www.linkedin.com/in/vikhyat-singh-b163ba1">
          <FaLinkedin /> Linkedin
        </a>
      </div>
      <div>‎ </div>
    </>
  );
};

export default About;
