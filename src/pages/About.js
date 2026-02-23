import React from 'react';
import './About.css';

function About() {
  const experiences = [
    { year: '2024 – Present', role: 'React Developer', company: 'Freelance / Personal Projects', desc: 'Building responsive web apps using React, hooks, and modern JavaScript practices.' },
    { year: '2023 – 2024', role: 'Frontend Intern', company: 'Tech Startup', desc: 'Worked on component libraries, REST API integration, and UI/UX improvements.' },
    { year: '2021 – 2023', role: 'Computer Science Degree', company: 'University', desc: 'Studied software engineering fundamentals, data structures, and web development.' },
  ];

  return (
    <div className="page about-page">
      <div className="section">
        <p className="section-label">Who I Am</p>
        <h1 className="section-title">About Me</h1>
        <div className="divider"></div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Narendra</strong>, a passionate React developer who loves creating clean, user-friendly web applications. I believe great software is not just about making things work — it's about making them feel effortless to use.
            </p>
            <p>
              My journey into web development started with curiosity and has grown into a deep love for crafting digital experiences. I enjoy the challenge of turning complex problems into elegant, simple solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
            </p>

            <div className="about-details">
              {[
                { label: 'Name', value: 'Narendra Varma' },
                { label: 'Location', value: 'India' },
                { label: 'Focus', value: 'React Development' },
                { label: 'Available', value: 'Open to Opportunities' },
              ].map((d, i) => (
                <div className="detail-row" key={i}>
                  <span className="detail-label">{d.label}</span>
                  <span className="detail-value">{d.value}</span>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/NarendraV529"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ marginTop: '32px' }}
            >
              GitHub Profile
            </a>
          </div>

          <div className="about-visual">
            <div className="avatar-box">
              <div className="avatar-initials">NV</div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-section">
          <p className="section-label">My Journey</p>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Experience & Education</h2>
          <div className="divider"></div>

          <div className="timeline">
            {experiences.map((e, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{e.year}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{e.role}</h3>
                  <p className="timeline-company">{e.company}</p>
                  <p className="timeline-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
