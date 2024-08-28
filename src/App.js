// LandingPage.js (if using React)

import React from 'react';
import './App.css';

const App = () => {
  // Function to handle scrolling to the services section
  const handleScrollToServices = (e) => {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Elevate Your Digital Experience with TechItUp</h1>
          <p>Innovative Software Development Solutions to Make It Happen</p>
          <a href="#services" className="cta-button" onClick={handleScrollToServices}>Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Core Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Modern Websites & Web Apps</p>
          </div>
          <div className="service-item">
            <h3>Mobile Development</h3>
            <p>Cross-Platform Mobile Solutions</p>
          </div>
          <div className="service-item">
            <h3>Consulting</h3>
            <p>Expert Tech Audits & Performance Optimization</p>
          </div>
          <div className="service-item">
            <h3>Maintenance & Support</h3>
            <p>Ongoing Support for Your Business</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 TechItUp. All rights reserved.</p>
      </footer>
    </div>

  );
};


export default App;



