import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h2>{this.props.projectName}</h2>
        <img src={this.props.imageUrl} alt={this.props.projectName} />
        <p>{this.props.description}</p>
        <a href={this.props.projectLink}>Visit Project</a>
      </div>
    );
  }
}

export default ProjectCard;
