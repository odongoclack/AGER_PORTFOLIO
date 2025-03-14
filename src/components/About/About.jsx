import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const skills = [
  { img: "/images/mlops-loop-en.jpg", title: "MLOps and Model Deployment" },
  { img: "/images/kafka-98d8a08e.png", title: "Custom Machine Learning Solutions" },
  { img: "/images/kafka-98d8a08e.png", title: "End-to-End Data Pipeline Development" },
  { img: "/images/pineapple-21fd8460.png", title: "Data Strategy Consulting" },
  { img: "/images/github-3b4e1609.png", title: "Performance Optimization and Tuning" },
];

const technologies = [
  "/images/helm-b5a17739.png",
  "/images/airflow-537ffb5f.png",
  "/images/langchain-0b53b94b.png"
];

const About = () => {
    console.log(motion)
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Introduction Section */}
      <motion.div
        className="about-intro"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h4>INTRODUCTION</h4>
        <h2>Overview.</h2>
        <p>
          As an AI Engineer, I have a deep understanding of machine learning
          algorithms and frameworks paired with hands-on experience in building
          scalable AI solutions. My expertise spans software engineering, data
          analytics, and artificial intelligence.
        </p>
      </motion.div>

      {/* Skills Section */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={skill.img} alt={skill.title} />
            <p>{skill.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Technologies Section */}
      <motion.div
        className="technologies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h4>MY SKILLS</h4>
        <h2>Technologies.</h2>
        <div className="tech-icons">
          {technologies.map((tech, index) => (
            <motion.img
              key={index}
              src={tech}
              alt="Tech Icon"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 10, -10, 0], // Swing effect
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.3, // Staggered effect
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;