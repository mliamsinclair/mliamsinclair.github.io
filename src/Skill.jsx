import React from "react";
import "./Skill.css";

class Skill extends React.Component {
  render() {
    return (
      <div className="skill-card">
        <img src={this.props.imageUrl} alt={this.props.skillName} />
        <h2>{this.props.skillName}</h2>
      </div>
    );
  }
}

export default Skill;
