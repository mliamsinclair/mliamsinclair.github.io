import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <div className="project-info">
          <h3>{this.props.projectName}</h3>
          <p>{this.props.description}</p>
          <a href={this.props.projectLink} target="_blank">Visit Project</a>
        </div>
        <div>
          <img src={this.props.imageUrl} alt={this.props.projectName} />
        </div>
      </div>
    );
  }
}

export default ProjectCard;
