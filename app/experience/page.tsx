import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline mini-timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-main">
                  <h4>Research Assistant · Virginia Tech</h4>
                  <span className="timeline-date">2023&nbsp;&ndash;&nbsp;Present</span>
                </div>
              </div>
              <p className="timeline-summary">Conducting interdisciplinary AI research, publishing in top-tier venues, and mentoring junior researchers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-main">
                  <h4>Software Engineer · Helios AI</h4>
                  <span className="timeline-date">2022&nbsp;&ndash;&nbsp;2023</span>
                </div>
              </div>
              <p className="timeline-summary">Built and optimised production ML systems, improving inference latency by 40% and accuracy by 25%.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-main">
                  <h4>Backend Developer · Vtech Payment</h4>
                  <span className="timeline-date">2021&nbsp;&ndash;&nbsp;2022</span>
                </div>
              </div>
              <p className="timeline-summary">Architected and maintained a PCI-DSS compliant gateway handling over $1M daily transactions.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-main">
                  <h4>Software Developer · Dynamic Tech</h4>
                  <span className="timeline-date">2020&nbsp;&ndash;&nbsp;2021</span>
                </div>
              </div>
              <p className="timeline-summary">Developed responsive web and mobile apps, achieving 60% faster load times and 99.9% uptime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
