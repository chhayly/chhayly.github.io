import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-left">
            <div className="about-profile">
              <div className="profile-image">
                <img src="/images/profile_picture.png" alt="Chhayly Sreng" />
              </div>
              <h1 className="profile-name">Chhayly Sreng</h1>
              <p className="profile-subtitle">AI Researcher &amp; Software Engineer</p>
            </div>
            <div className="about-text">
              <p>
                I am a passionate software engineer and AI researcher with a strong background in computer science and engineering. My journey spans across various domains including artificial intelligence, machine learning, web development, and data science.
              </p>
              <p>
                Currently pursuing my Master's degree in Computer Science at Virginia Tech, I have been fortunate to work on cutting-edge research projects and contribute to innovative software solutions. My experience includes developing payment gateway systems, AI-powered applications, and educational platforms.
              </p>
              <p className="about-philosophy">
                <i className="fas fa-quote-left"></i>
                "Building intelligent systems for a smarter, more sustainable world."
                <i className="fas fa-quote-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
