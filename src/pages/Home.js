import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-circle c1"></div>
          <div className="hero-circle c2"></div>
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Narendra<br /><span>Varma</span></h1>
          <p className="hero-role">React Developer &amp; UI Enthusiast</p>
          <p className="hero-desc">
            I craft clean, performant web experiences with a passion for beautiful interfaces and thoughtful code.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-ghost">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="section">
          <div className="stats-grid">
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Completed' },
              { value: '10+', label: 'Happy Clients' },
              { value: '100%', label: 'Dedication' },
            ].map((s, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <div className="section">
          <p className="section-label">What I Do</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider"></div>
          <div className="skills-grid">
            {['React.js', 'JavaScript', 'HTML & CSS', 'Node.js', 'Git & GitHub', 'REST APIs'].map((skill, i) => (
              <div className="skill-chip" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </div>
            ))}
          </div>
          <Link to="/about" className="btn" style={{ marginTop: '48px' }}>Learn More About Me</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
