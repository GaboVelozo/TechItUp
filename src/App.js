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
      <div className="scrollAnimation">

        <div className="scroll" style={{ "--time": '40s' }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>JavaScript</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>HTML</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": '30s' }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": '25s' }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": '35s' }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>HTML</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>C#</span>
            <span>Photoshop</span>
            <span>C#</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </div>
        <div className="scroll imgBox" style={{ "--time": '25s' }}>
          <div>
            <img src={require('./images/html.png')} alt="" />
            <img src={require('./images/css.png')} alt="" />
            <img src={require('./images/js.png')} alt="" />
            <img src={require('./images/React.png')} alt="" />
            <img src={require('./images/angular.png')} alt="" />
            <img src={require('./images/Csharp.png')} alt="" />
            <img src={require('./images/photoshop.png')} alt="" />
            {/* <img src={require('./images/mui.png')} alt="" /> */}
            {/* <img src={require('./images/tailwind.png')} alt="" /> */}
            {/* <img src={require('./images/premierePro.png')} alt="" /> */}
          </div>
          <div>
            <img src={require('./images/html.png')} alt="" />
            <img src={require('./images/css.png')} alt="" />
            <img src={require('./images/js.png')} alt="" />
            <img src={require('./images/React.png')} alt="" />
            <img src={require('./images/angular.png')} alt="" />
            <img src={require('./images/Csharp.png')} alt="" />
            <img src={require('./images/photoshop.png')} alt="" />
            {/* <img src={require('./images/mui.png')} alt="" /> */}
            {/* <img src={require('./images/tailwind.png')} alt="" /> */}
            {/* <img src={require('./images/premierePro.png')} alt="" /> */}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 TechItUp. All rights reserved.</p>
      </footer>
    </div>

  );
};


export default App;



