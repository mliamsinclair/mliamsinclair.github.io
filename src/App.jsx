import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import ProjectCard from "./ProjectCard";
import Skill from "./Skill.jsx";
import "./App.css";
import "./Skill.css";

function App() {
  return (
    <div className="App">
      <Home id="home" title="Home" />
      <div className="content">
      <Navbar />
        <About id="about" title="About" />
        <div className="skills">
          <Skill
            skillName="PYTHON"
            imageUrl="src\assets\skill-icons\python.svg"
          />
          <Skill skillName="JAVA" imageUrl="src\assets\skill-icons\java.svg" />
          <Skill
            skillName="C++"
            imageUrl="src\assets\skill-icons\c-plusplus.svg"
          />
          <Skill
            skillName="JAVASCRIPT"
            imageUrl="src\assets\skill-icons\javascript.svg"
          />
          <Skill skillName="SQL" imageUrl="src\assets\skill-icons\sql.svg" />
          <Skill
            skillName="HTML"
            imageUrl="src\assets\skill-icons\file-type-html.svg"
          />
          <Skill
            skillName="REACT"
            imageUrl="src\assets\skill-icons\react.svg"
          />
          <Skill
            skillName="MYSQL"
            imageUrl="src\assets\skill-icons\mysql.svg"
          />
          <Skill
            skillName="MONGODB"
            imageUrl="src\assets\skill-icons\mongodb.svg"
          />
          <Skill
            skillName="SPRING"
            imageUrl="src\assets\skill-icons\spring-boot.svg"
          />
          <Skill skillName="AWS" imageUrl="src\assets\skill-icons\aws.svg" />
          <Skill
            skillName="REST API"
            imageUrl="src\assets\skill-icons\api.svg"
          />
          <Skill skillName="AI" imageUrl="src\assets\skill-icons\openai.svg" />
          <Skill skillName="GIT" imageUrl="src\assets\skill-icons\github.svg" />
        </div>
        <Projects id="projects" title="Projects" />
        <div className="project-cards">
          <ProjectCard
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
          <ProjectCard
            projectName="My Awesome Project"
            description="This is a brief description of my awesome project."
            imageUrl="https://example.com/project-image.jpg"
            projectLink="https://example.com/project-site"
          />
        </div>
        <Skills id="skills" title="Skills" />
        <Contact id="contact" title="Contact" />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Home({ id, title }) {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

  return (
    <div className="Home" id={id}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: { value: "#252525" },
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: { color: { value: "#fff" }, opacity: 1 },
            enable: false,
          },
          backgroundMode: { enable: false, zIndex: -1 },
          detectRetina: true,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: true, mode: "repulse" },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: { enable: false, force: 2, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              attract: { distance: 200, duration: 0.4, speed: 1 },
              bounce: { distance: 200 },
              bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
              connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
              grab: {
                distance: 400,
                links: { blink: false, consent: false, opacity: 1 },
              },
              light: {
                area: {
                  gradient: {
                    start: { value: "#ffffff" },
                    stop: { value: "#000000" },
                  },
                  radius: 1000,
                },
                shadow: { color: { value: "#000000" }, length: 2000 },
              },
              push: { quantity: 4 },
              remove: { quantity: 2 },
              repulse: { distance: 400, duration: 0.4, speed: 1 },
              slow: { factor: 3, radius: 200 },
              trail: { delay: 1, quantity: 1 },
            },
          },
          manualParticles: [],
          motion: { disable: false, reduce: { factor: 4, value: false } },
          particles: {
            bounce: {
              horizontal: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
              vertical: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
            },
            color: {
              value: "#ffffff",
              animation: { enable: false, speed: 1, sync: true },
            },
            life: {
              count: 0,
              delay: {
                random: { enable: false, minimumValue: 0 },
                value: 0,
                sync: false,
              },
              duration: {
                random: { enable: false, minimumValue: 0.0001 },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: { value: "#ffffff" },
              consent: false,
              distance: 150,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
              triangles: { enable: false, frequency: 1 },
              width: 1,
              warp: false,
            },
            move: {
              speed: 0.5,
              angle: { offset: 45, value: 90 },
              attract: { enable: false, rotate: { x: 600, y: 600 } },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
              noise: {
                delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              size: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: { value: "#000000" },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: { enable: true, area: 800, factor: 1000 },
              limit: 0,
              value: 160,
            },
            opacity: {
              random: { enable: true, minimumValue: 1 },
              value: 1,
              animation: {
                enable: true,
                minimumValue: 0,
                speed: 1,
                sync: false,
              },
            },
            reduceDuplicates: false,
            rotate: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              animation: { enable: false, speed: 0, sync: false },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: { value: "#000000" },
              enable: false,
              offset: { x: 0, y: 0 },
            },
            shape: {
              options: {
                polygon: { nb_sides: 5 },
                star: { nb_sides: 5 },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
                images: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              type: "circle",
            },
            size: {
              random: { enable: true, minimumValue: 1 },
              value: 3,
              animation: {
                destroy: "none",
                enable: false,
                minimumValue: 0.3,
                speed: 4,
                startValue: "max",
                sync: false,
              },
            },
            stroke: {
              width: 0,
              color: {
                value: "#000000",
                animation: { enable: false, speed: 1, sync: true },
              },
            },
            twinkle: {
              lines: { enable: false, frequency: 0.05, opacity: 1 },
              particles: { enable: false, frequency: 0.05, opacity: 1 },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: false,
          themes: [],
        }}
      />
      <h1>{"Hi,"}</h1>
      <h1>{"I'm Liam."}</h1>
      <p>
        My name is <span className="highlight">Liam</span> and I'm a{" "}
        <span className="highlight">software engineer</span> based in{" "}
        <span className="highlight">Greenville, South Carolina</span>.
      </p>
    </div>
  );
}

function About({ id, title }) {
  return (
    <div className="About" id={id}>
      <h1>{title}</h1>
      <p>
        I'm a software engineer with a background in{" "}
        <span className="highlight">data science</span> and{" "}
        <span className="highlight">machine learning</span>. I'm passionate
        about building <span className="highlight">beautiful</span>,{" "}
        <span className="highlight">intuitive</span>, and{" "}
        <span className="highlight">accessible</span> applications.
      </p>
    </div>
  );
}

function Projects({ id, title }) {
  return (
    <div className="Projects" id={id}>
      <h1>{title}</h1>
      <p>Here are some of the projects I've worked on.</p>
    </div>
  );
}

function Skills({ id, title }) {
  return (
    <div className="Skills" id={id}>
      <h1>{title}</h1>
      <p>Here are some of the skills I've developed.</p>
    </div>
  );
}

function Contact({ id, title }) {
  return (
    <div className="Contact" id={id}>
      <h1>{title}</h1>
      <p>Feel free to reach out to me at </p>
    </div>
  );
}

export default App;
