import React from 'react';
import './About.css';
import SpotlightCard from './SpotlightCard';

const About = () => {
  // --- ✏️ YOUR DATA HERE ---
  const bioParagraphs = [
    "As a passionate Full Stack Developer with a 7.6 CGPA, I am pursuing a Bachelor's degree in Computer Science and Engineering at the University of Roorkee. My journey in web development has been driven by a strong desire to create impactful digital experiences.",
    "I specialize in building responsive, scalable web applications and am dedicated to solving real-world problems by writing clean, efficient, and maintainable code.",
    "My project experience includes a personal portfolio, the offline-first SkillVidya app, and a university ERP system. I am a continuous learner, an adept team player, and am eager to contribute to impactful projects, especially in the open-source community."
  ];
  // -------------------------
  const stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '5+', label: 'Completed Projects' },
    { value: '100+', label: 'GitHub Commits' },
    { value: '2', label: 'Companies Worked' },
  ];

  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-bio">
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-stats">
          {stats.map((stat) => (
            <SpotlightCard key={stat.label} spotlightColor="rgba(0, 191, 255, 0.2)">
              <div className="stat-box">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
