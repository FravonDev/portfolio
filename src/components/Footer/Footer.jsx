import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Flávio Adriano</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/flavio_adrianoo/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/FravonDev"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/flavioadriano/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &copy; 2023 Flávio Adriano. base template from{" "}
          <a
            href="https://www.youtube.com/watch?v=3aCoZudPEKE&list=PLrKudo5h_b8DNVrsMdvR0G-ckA9o2m_13&index=7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cryptical Coder
          </a>
          . all rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
