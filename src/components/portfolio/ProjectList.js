import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
  };

  render() {
    let { projets } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay"></ul>

        <div className="projects">
          {projets.map((item) => {
            return <Project key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
