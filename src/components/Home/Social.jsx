import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/FravonDev"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/flavioadriano/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/flavio_adrianoo/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
