import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, send to an API or email service
    setSubmitted(true);
  };

  return (
    <div className="page contact-page">
      <div className="section">
        <p className="section-label">Let's Talk</p>
        <h1 className="section-title">Get In Touch</h1>
        <div className="divider"></div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind, want to collaborate, or just want to say hello? 
              I'd love to hear from you. Fill out the form or reach me directly.
            </p>

            <div className="contact-items">
              {[
                { label: 'GitHub', value: 'github.com/NarendraV529', href: 'https://github.com/NarendraV529' },
                { label: 'Email', value: 'narendra@example.com', href: 'mailto:narendra@example.com' },
                { label: 'Location', value: 'India', href: null },
              ].map((item, i) => (
                <div className="contact-item" key={i}>
                  <span className="contact-item-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="contact-item-value link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-item-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="availability-badge">
              <span className="badge-dot"></span>
              Available for new projects
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
