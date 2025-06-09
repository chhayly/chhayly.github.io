import React from 'react';

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4>Virginia Tech</h4>
                <span className="year">2023 - Present</span>
              </div>
              <p>Master of Science in Computer Science</p>
              <span className="education-focus">Focus: AI &amp; Machine Learning</span>
            </div>
          </div>
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4>East-West Center Fellowship</h4>
                <span className="year">2022</span>
              </div>
              <p>Graduate Fellowship Program</p>
              <span className="education-focus">Leadership &amp; Global Engagement</span>
            </div>
          </div>
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-university"></i>
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4>Institute of Technology of Cambodia</h4>
                <span className="year">2017 - 2021</span>
              </div>
              <p>Bachelor of Engineering in Computer Science</p>
              <span className="education-focus">Magna Cum Laude</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
