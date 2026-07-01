import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Haridwar University",
            duration: "Current",
            description: [
                "Contributing to the development of the university ERP system.",
                "Developing responsive interfaces and integrating backend services.",
                "Collaborating with team members using Git for efficient project management."
            ]
        },
        {
            role: "Frontend Developer Intern",
            company: "Khabai Tech, Hajipur, Bihar",
            duration: "2 Months",
            description: [
                "Completed an on-site internship working on real-life industry projects.",
                "Developed responsive user interfaces using modern frontend technologies.",
                "Enhanced website performance and improved user experience through optimized design."
            ]
        }
    ];

    return (
        <section id="experience" className="experience" data-aos="fade-up">
            <h2>Work Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div className="experience-item" key={index}>
                        <h3>{exp.role} <span className="company">@ {exp.company}</span></h3>
                        <p className="duration">{exp.duration}</p>
                        <ul>
                            {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;