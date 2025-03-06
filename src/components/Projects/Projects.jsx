import React from "react";
import "./Projects.css";

const projects = [
  { image: "/assets/komikult-ffb4680c.png", title: "Leaderboard" },
  { image: "/assets/leaderboard.png", title: "E-commerce Store" },
  { image: "/assets/math-magicians.png", title: "Movie App" },
  { image: "/assets/movie-metro.png", title: "Festival Site" },
  { image: "/assets/nyeusi.png", title: "AI Blog" },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projects.</h2>
      <p>
        These projects demonstrate my expertise with practical examples of my work, 
        including descriptions and live demos.
      </p>

      <div className="project-gallery">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;