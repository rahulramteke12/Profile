import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const userProjects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a fully responsive portfolio showcasing skills and projects, built with reusable components and optimized for performance.",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      link: "https://github.com/rahulramteke12/my-portfolio"
    },
    {
      title: "SkillVidya – Offline Learning App",
      description: "An educational application that enables students in rural communities to study without internet access, focusing on accessibility and user-friendly design.",
      tech: ["Java", "Android SDK", "SQLite"],
      link: "https://github.com/rahulramteke12/skill-vidya"
    },
    {
      title: "ERP System for Haridwar University",
      description: "Collaborated with a team to design and develop a comprehensive ERP system with modules for managing academic and administrative processes.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      link: "https://github.com/rahulramteke12/university-erp"
    },
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="project-list">
        {userProjects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech-stack">
              {project.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;