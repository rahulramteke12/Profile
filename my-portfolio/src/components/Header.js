import React, { useState, useEffect } from 'react';
import './Header.css';
import profilePic from '../assets/profile.png';
import TextType from './TextType';

const Header = () => {
  const professions = [
    "Full Stack Developer",
    "Web Developer",
    "Open-Source Contributor",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const introText =
    "A motivated developer passionate about building scalable web applications and solving real-world problems with clean, efficient code.";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [professions.length]);

  return (
    <header id="home" className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Rahul Ramteke</h1>
          <div className="subtitle-container">
            <p className="header-subtitle" key={currentIndex}>
              {professions[currentIndex]}
            </p>
          </div>
          <TextType
            as="p"
            className="header-intro"
            text={introText}
            typingSpeed={25}
            loop={false}
            cursorCharacter="_"
          />
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
        <div className="header-image-container">
          <img src={profilePic} alt="Rahul Ramteke" className="header-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;