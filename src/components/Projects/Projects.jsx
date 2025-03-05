import React from "react";
import "./Projects.css";

// Import project images from assets
import project1 from "../../Assets/komikult-ffb4680c (1).png";
import project2 from "../../Assets/leaderboard-34689c55.png";
import project3 from "../../Assets/math-magicians-616662fe.png";
import project4 from "../../Assets/movie-metro-dc697e9e.png";
import project5 from "../../Assets/nyeusi-4fb337c4.png";

const Projects = () => {
  const projects = [
    { image: project1, title: "Leaderboard" },
    { image: project2, title: "E-commerce Store" },
    { image: project3, title: "Movie App" },
    { image: project4, title: "Festival Site" },
    { image: project5, title: "AI Blog" },
  ];

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