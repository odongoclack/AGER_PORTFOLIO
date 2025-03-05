import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    title: "Data Engineering",
    company: "Cover Hunt",
    duration: "Aug 2023 - Feb 2024",
  },
  {
    title: "Machine Learning and Operations",
    company: "Some Company",
    duration: "Mar 2023 - May 2023",
  },
  {
    title: "MLOps Engineer",
    company: "Kelbel",
    duration: "Sep 2022 - Oct 2022",
  },
];

const Experience = () => {
    console.log(motion)
  return (
    <section className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <span>{exp.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <motion.a
        href="/path-to-your-resume.pdf"
        download
        className="resume-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        My Resume ⬇
      </motion.a>
    </section>
  );
};

export default Experience;