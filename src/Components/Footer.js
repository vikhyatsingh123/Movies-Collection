import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="imgcntr">
          <Link to="/">
            <p className="nav-logo">Movies Collection</p>
          </Link>
        </div>
        <div class="maincnt">
          <h2>Email</h2>
          <ul>
            <li>Vikhyat Singh</li>
            <li>
              <b>vikhyatsingh628@gmail.com</b>
            </li>
           </ul>
        </div>

        <div class="sprtcnt">
          <h2>Made with ❤️ by Vikhyat Singh</h2>
          <b>Copyright Reserved @MoviesCollection.com ©️</b>
        </div>

        <div class="icon_container">
          <div class="icon">
            <a href="https://github.com/vikhyatsingh123">
            <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="icon">
            <a href="https://www.instagram.com/vikhyat552/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.linkedin.com/in/vikhyat-singh-337777197/">
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div class="icon">
            <a target=bl href="https://www.hackerrank.com/profile/vikhyatsingh628">
              <i class="fa-brands fa-hackerrank"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
