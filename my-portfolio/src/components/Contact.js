import React from 'react';
import './Contact.css';
import { RadialNav } from './RadialNav';
// Using react-icons for brand icons as they are more suitable and available.
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // --- ✏️ YOUR DATA HERE ---
  const contactInfo = {
    email: "rahulramtekehu@gmail.com", 
    linkedin: "https://www.linkedin.com/in/rahul-ramteke-1a186329b/", 
    github: "https://github.com/rahulramteke12" 
  };

  const navItems = [
    { id: 1, icon: FaEnvelope, label: 'Email', angle: 120, href: `mailto:${contactInfo.email}` },
    { id: 2, icon: FaLinkedin, label: 'LinkedIn', angle: 0, href: contactInfo.linkedin },
    { id: 3, icon: FaGithub, label: 'GitHub', angle: 240, href: contactInfo.github },
  ];

  const handleLinkOpen = (id) => {
    const item = navItems.find(navItem => navItem.id === id);
    if (item?.href) {
      // Open mail links in the same tab, others in a new tab
      window.open(item.href, item.href.startsWith('mailto') ? '_self' : '_blank');
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <p>I'm currently open to new opportunities. Feel free to reach out!</p>
      <div className="radial-nav-wrapper">
        <RadialNav items={navItems} onActiveChange={handleLinkOpen} />
      </div>
    </section>
  );
};

export default Contact;