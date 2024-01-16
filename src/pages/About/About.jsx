import React from "react";
import aboutIcon from "./about-icon.svg";
import "./About.css";

function About({ id, title }) {
  return (
    <div className="About" id={id}>
      <div className="page-icon-title">
        <img src={aboutIcon} alt="About Icon" className="page-icon" />
        <h1>{title}</h1>
      </div>
      <div className="about-section">
        <div className="background-block"></div>
        <p>
          I'm a versatile software engineer with a passion for learning and
          genuine love for development. I'm currently a senior at
          <span className="highlight"> USC Upstate</span> pursuing a
          <span className="highlight"> B.S.</span> with a dual major in
          <span className="highlight"> Computer Science</span> and
          <span className="highlight"> Cybersecurity</span>. The perfect blend
          of creativity, logical thinking, and perpetual discovery is what fuels
          my passion and excitement for innovative software development. I
          strongly enjoy working with teams, and I'm always searching for new
          opportunities to expand my knowledge and skillset. I'm currently
          seeking an
          <span className="highlight"> internship</span> for Spring 2024 or
          <span className="highlight"> full-time employment</span> for following
          my graduation in April 2024.
        </p>
        <div className="background-block"></div>
      </div>
    </div>
  );
}

export { About };