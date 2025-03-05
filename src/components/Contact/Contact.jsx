import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
    console.log(motion)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }} // 2-second delay
    >
      <div className="contact-form">
        <h2 className="contact-title">Contact.</h2>
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="What's your email?"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="What's your message?"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <p><strong>TEL:</strong> +254 743 737 349</p>
        <p><strong>EMAIL:</strong> agerausten@gmail.com</p>
      </div>
    </motion.div>
  );
};

export default Contact;