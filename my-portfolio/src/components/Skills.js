import React from 'react';
import './Skills.css';
import CardSwap, { Card } from './CardSwap';

const Skills = () => {
  // --- ✏️ YOUR DATA HERE ---
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'CI/CD'],
    },
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    },
  ];
  // -------------------------
  const description = "I have a diverse skill set that spans across the full stack. On the frontend, I'm proficient with modern technologies like React, JavaScript, and CSS to build responsive and engaging user interfaces. For the backend, I have experience with Node.js, Express, and MongoDB to create robust and scalable server-side applications. I'm also comfortable with essential development tools like Git, GitHub, and Docker, and I'm always eager to learn and adapt to new technologies.";

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-description">
          <p>{description}</p>
        </div>
        <div className="skills-animation-wrapper">
          <CardSwap
            cardDistance={60}
            verticalDistance={10}
            skewAmount={10}
            width={400}
            height={300}
            pauseOnHover={true}
          >
            {skillsData.map((skillSet) => (
              <Card key={skillSet.category}>
                <div className="skill-card-content">
                  <h3>{skillSet.category}</h3>
                  <div className="skills-list">
                    {skillSet.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Skills;