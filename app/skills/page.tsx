import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skills-group">
            <h4>Programming Languages</h4>
            <p className="skill-line">Python · JavaScript · TypeScript · C# · C++ · Java · SQL</p>
          </div>
          <div className="skills-group">
            <h4>AI &amp; Data</h4>
            <p className="skill-line">TensorFlow · PyTorch · OpenCV · scikit-learn · Pandas · NumPy · Librosa</p>
          </div>
          <div className="skills-group">
            <h4>DevOps &amp; Tools</h4>
            <p className="skill-line">Docker · Git · CI/CD · Redis · React · Node.js · Django · Flask</p>
          </div>
          <div className="skills-group">
            <h4>Cloud &amp; Databases</h4>
            <p className="skill-line">AWS · PostgreSQL · MongoDB · MySQL · Firebase</p>
          </div>
          <div className="skills-group">
            <h4>Electronics &amp; IoT</h4>
            <p className="skill-line">Arduino · PLC · NodeMCU · Embedded Systems · IoT Protocols</p>
          </div>
        </div>
      </div>
    </section>
  );
}
