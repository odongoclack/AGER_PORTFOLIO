import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Thompson",
    position: "FutureTech Solutions",
    text: "I was impressed by the engineer’s ability to tackle complex challenges in our industry. Their AI solutions revolutionized how we approach problem-solving.",
    image: "/images/images.jpeg", // ✅ Corrected path for Vercel
  },
  {
    name: "Michael Chen",
    position: "InnovateAI",
    text: "The AI solution provided streamlined our automation processes beyond expectations. Their expertise in scalable AI systems gave us a competitive edge.",
    image: "/images/images.jpeg",
  },
  {
    name: "Emily Johnson",
    position: "TechCorp Inc.",
    text: "Working with AGER was a game-changer. His deep understanding of ML algorithms helped us implement solutions that improved our data analysis.",
    image: "/images/images.jpeg",
  },
];

const Testimonials = () => {
  console.log(motion);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <motion.div
        key={index}
        className="testimonial-box"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <p className="testimonial-text">"{testimonials[index].text}"</p>
        <div className="testimonial-footer">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="testimonial-img"
          />
          <div>
            <strong>{testimonials[index].name}</strong>
            <br />
            <span>{testimonials[index].position}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;