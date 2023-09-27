import React from "react";

const ProjectItems = ({ item }) => {
  if (!item) return null;
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.url} target="_blank" className="project__button">
        Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
