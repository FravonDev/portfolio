import React from "react";

const ProjectItems = ({ item }) => {
  if (!item) return null;
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <div className="project__button-div">
        {item.github_url && (
          <a href={item.github_url} target="_blank" className="project__button">
            Code <i className="uil uil-github-alt project__button-icon"></i>
          </a>
        )}
        {item.url && (
          <a href={item.url} target="_blank" className="project__button">
            Live project{" "}
            <i className="bx bx-link-external project__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
