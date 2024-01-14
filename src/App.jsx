import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import ProjectCard from "./ProjectCard";
import Skill from "./Skill.jsx";
import pythonIcon from "./assets/skill-icons/python.svg";
import javaIcon from "./assets/skill-icons/java.svg";
import cPlusPlusIcon from "./assets/skill-icons/c-plusplus.svg";
import javascriptIcon from "./assets/skill-icons/javascript.svg";
import sqlIcon from "./assets/skill-icons/sql.svg";
import htmlIcon from "./assets/skill-icons/file-type-html.svg";
import reactIcon from "./assets/skill-icons/react.svg";
import mysqlIcon from "./assets/skill-icons/mysql.svg";
import mongodbIcon from "./assets/skill-icons/mongodb.svg";
import springIcon from "./assets/skill-icons/spring-boot.svg";
import awsIcon from "./assets/skill-icons/aws.svg";
import restApiIcon from "./assets/skill-icons/api.svg";
import aiIcon from "./assets/skill-icons/openai.svg";
import gitIcon from "./assets/skill-icons/github.svg";
import "./App.css";
import "./Skill.css";
import ContactForm from "./ContactForm";
import "./Footer.css";
import "./ContactForm.css";

function App() {
  return (
    <div className="App">
      <Home id="home" title="Home" />
      <div className="content">
        <Navbar />
        <h1 className="title">Liam Sinclair</h1>
        <div className="about-skills-container">
          <About id="about" title="About" />
          <div className="skills">
            <div className="skills-col">
              <Skill skillName="PYTHON" imageUrl={pythonIcon} />
              <Skill skillName="JAVA" imageUrl={javaIcon} />
              <Skill skillName="C++" imageUrl={cPlusPlusIcon} />
            </div>
            <div className="skills-col">
              <Skill skillName="JAVASCRIPT" imageUrl={javascriptIcon} />
              <Skill skillName="SQL" imageUrl={sqlIcon} />
              <Skill skillName="HTML" imageUrl={htmlIcon} />
              <Skill skillName="REACT" imageUrl={reactIcon} />
            </div>
            <div className="skills-col">
              <Skill skillName="MYSQL" imageUrl={mysqlIcon} />
              <Skill skillName="MONGODB" imageUrl={mongodbIcon} />
              <Skill skillName="SPRING" imageUrl={springIcon} />
              <Skill skillName="AWS" imageUrl={awsIcon} />
            </div>
            <div className="skills-col">
              <Skill skillName="REST API" imageUrl={restApiIcon} />
              <Skill skillName="AI" imageUrl={aiIcon} />
              <Skill skillName="GIT" imageUrl={gitIcon} />
            </div>
          </div>
        </div>
        <Projects id="projects" title="Projects" />
        <Skills id="skills" title="Skills" />
        <Contact id="contact" title="Contact" />
        <Footer id="footer" title="Footer" />
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
      <h1>{"Hi, I'm Liam"}</h1>
      <p>
        I'm a <span className="highlight">software engineer</span> based in{" "}
        <span className="highlight">Greenville, South Carolina</span>.
      </p>
      <a href="#about">
        <button>Learn more</button>
      </a>
    </div>
  );
}

function About({ id, title }) {
  return (
    <div className="About" id={id}>
      <p>
        I'm a versatile software engineer with a passion for learning and
        genuine love for development. I'm currently a senior at
        <span className="highlight"> USC Upstate</span> pursuing a
        <span className="highlight"> B.S.</span> with a dual major in
        <span className="highlight"> Computer Science</span> and
        <span className="highlight"> Cybersecurity</span>. The perfect blend of
        creativity, logical thinking, and perpetual discovery is what fuels my
        passion and excitement for innovative software development. I strongly
        enjoy working with teams, and I'm always searching for new opportunities
        to expand my knowledge and skillset. I'm currently seeking an
        <span className="highlight"> internship</span> for Spring 2024 or
        <span className="highlight"> full-time employment</span> for following
        my graduation in April 2024.
      </p>
    </div>
  );
}

function Projects({ id, title }) {
  return (
    <div className="Projects" id={id}>
      <h1>{title}</h1>
      <p>Here are some of the projects I've worked on.</p>
      <ProjectCard
        projectName="PumpPals"
        imageUrl="https://picsum.photos/200/300"
        description="Fitness social media application that allows users to share their workouts and progress with friends. Built with React, Spring Boot, and MongoDB."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Skybin"
        imageUrl="https://picsum.photos/200/300"
        description="A cloud storage application that allows users to upload and download files, as well as manage their own personal directory. Built with React, Spring Boot, and MySQL."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Object Detection Robot"
        imageUrl="https://picsum.photos/200/300"
        description="A robotic arm that can detect and pick up colored balls as well as move freely via controller input. Built with Arduino IDE, C++, and Python."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Distributed and Network Programming"
        imageUrl="https://picsum.photos/200/300"
        description="A directory of various projects that demonstrate my knowledge of distributed and network programming. Built with Java and Swing."
        projectLink="https://google.com"
      />
      <ProjectCard
        projectName="Portfolio Page"
        imageUrl="https://picsum.photos/200/300"
        description="This website! Built with React and CSS."
        projectLink="https://google.com"
      />
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
      <ContactForm />
    </div>
  );
}

function Footer({ id, title }) {
  return (
    <div className="Footer" id={id}>
      <a href="#home">Home</a>
      <p>Liam Sinclair</p>
    </div>
  );
}

export default App;
