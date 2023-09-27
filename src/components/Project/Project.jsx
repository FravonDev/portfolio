import React from "react";
import "./project.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className="project section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
