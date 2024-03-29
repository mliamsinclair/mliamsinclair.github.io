import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <div className="project-info">
          <h3>{this.props.projectName}</h3>
          <p>{this.props.description}</p>
          <a href={this.props.projectLink} target="_blank">
            Visit Project
          </a>
          {this.props.documentationLink && (
            <a href={this.props.documentationLink} target="_blank">
              View Documentation
            </a>
          )}
        </div>
        <a href={this.props.projectLink} target="_blank">
          <div className="image-container">
            <img src={this.props.imageUrl} alt={this.props.projectName} />
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectCard;
