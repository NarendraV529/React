import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'React',
    desc: 'A fully responsive admin dashboard with real-time analytics, product management, and order tracking built with React and Chart.js.',
    tags: ['React', 'Chart.js', 'REST API', 'CSS Grid'],
    link: '#',
    year: '2024',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'React',
    desc: 'Drag-and-drop task manager with Kanban boards, user authentication, and real-time updates using Firebase.',
    tags: ['React', 'Firebase', 'DnD', 'Hooks'],
    link: '#',
    year: '2024',
  },
  {
    id: 3,
    title: 'Weather App',
    category: 'JavaScript',
    desc: 'Clean weather application that fetches live data from OpenWeatherMap API with beautiful animated weather icons.',
    tags: ['JavaScript', 'API', 'CSS Animation', 'Geolocation'],
    link: '#',
    year: '2023',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'React',
    desc: 'This very profile site — built with React Router, smooth animations, and a minimal dark aesthetic.',
    tags: ['React', 'React Router', 'CSS'],
    link: 'https://github.com/NarendraV529/React',
    year: '2024',
  },
  {
    id: 5,
    title: 'Blog Platform',
    category: 'Full Stack',
    desc: 'Markdown-powered blog with a Node.js backend, user accounts, and a clean reading experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    year: '2023',
  },
  {
    id: 6,
    title: 'Quiz App',
    category: 'JavaScript',
    desc: 'Interactive quiz application with multiple categories, timers, and score tracking.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    link: '#',
    year: '2023',
  },
];

const categories = ['All', 'React', 'JavaScript', 'Full Stack'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="page projects-page">
      <div className="section">
        <p className="section-label">My Work</p>
        <h1 className="section-title">Projects</h1>
        <div className="divider"></div>

        {/* Filter */}
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={p.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-header">
                <span className="project-year">{p.year}</span>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link-icon">↗</a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
