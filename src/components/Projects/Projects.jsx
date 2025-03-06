import React from "react";
import "./Projects.css";

const projects = [
  { image: "/assets/komikult-ffb4680c (1).png", title: "Leaderboard" },
  { image: "/assets/leaderboard-34689c55.png", title: "E-commerce Store" },
  { image: "assets/maths.png", title: "AI Blog" },
  { image: "/assets/movie-metro-dc697e9e.png", title: "Movie App" },
  { image: "/assets/nyeusi-4fb337c4.png", title: "Festival site" },
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