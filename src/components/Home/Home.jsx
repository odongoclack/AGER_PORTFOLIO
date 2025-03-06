import React from 'react';
import { motion } from 'framer-motion';
import "./Home.css";

// Directly reference the image from the public folder
const profileImage = "/images/ager-5b2b6eb0.jpg";

function Home() {
    console.log(motion);
    return (
        <div className="home-container">
            <div className="overlay"></div>
            
            {/* Text Section */}
            <motion.div
                className="text-section"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <h1>HI, I'M </h1>
                <h2 className="name">AGER AUSTINE</h2>
                <p>Creating smarter solutions for a better tomorrow.</p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
                className="image-section"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <img src={profileImage} alt="Ager" className="profile-img" />
            </motion.div>
        </div>
    );
}

export default Home;