import React from 'react';
import './Certifications.css';
// --- 🖼️ Add your certificate images here ---
// Importing the actual certificate images from the assets folder.
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';
import cert3 from '../assets/certificate3.png';
import cert4 from '../assets/certificate4.png'; // Using profile image as a placeholder for the 4th certificate
// -----------------------------------------

const Certifications = () => {
  // --- ✏️ YOUR DATA HERE ---
  // I've updated the details to match your certificate images.
  const certifications = [
    {
      title: 'JavaScript Training Completion',
      issuer: 'Spoken Tutorial, IIT Bombay',
      date: 'Issued Nov 2025',
      link: '#', // This will be replaced by the image path
      image: cert1,
    },
    {
      title: 'Frontend Development Internship',
      issuer: 'Khabai Tech',
      date: 'Completed Jul 2025',
      link: '#',
      image: cert2,
    },
    {
      title: 'C Training Completion',
      issuer: 'Spoken Tutorial, IIT Bombay',
      date: 'Issued Apr 2024',
      link: '#',
      image: cert3,
    },
    {
      title: 'Java Training Completion', // New certificate
      issuer: 'Spoken Tutorial, IIT Bombay',
      date: 'Issued Mar 2024',
      link: '#',
      image: cert4,
    },
  ];
  // -------------------------

  return (
    <section id="certifications" className="certifications" data-aos="fade-up">
      <h2>My Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <a href={cert.image} target="_blank" rel="noopener noreferrer" className="certification-image-link">
              <img src={cert.image} alt={cert.title} className="certification-image" />
            </a>
            <div className="certification-details">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer} &bull; {cert.date}</p>
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className="certification-link">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;