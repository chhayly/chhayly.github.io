// app/page.tsx
import React from 'react';
import contentData from './data/content.json'; // Import the data
import ProjectList from './components/features/projects/ProjectList'; // Import the new client component

// Define interfaces based on content.json structure
// Project interface has been moved to app/types.ts and is used by ProjectList.tsx

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  summary: string;
  pdf: string | null;
  doi: string | null;
  image?: string; // Assuming publications might also have images like in index.html
}

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon?: string; // Optional
  image?: string; // Assuming achievements might also have images
}

const HomePage = () => {
  const { projects, publications, achievements } = contentData;

  // formatImagePath function can be removed if ProjectList handles its own image paths
  const formatImagePath = (path: string) => {
    if (path && path.startsWith('assets/')) {
      return `/${path}`;
    }
    // If the path already starts with '/', assume it's correct
    if (path && path.startsWith('/')) {
        return path;
    }
    // Fallback for other cases, though ideally paths should be consistent
    return path;
  };

  return (
    <>
      {/* About Section (includes skills and experience preview) */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          <div className="about-content">
            <div className="about-left" data-aos="fade-right">
              <div className="about-profile">
                <div className="profile-image">
                  <img src="/images/profile_picture.png" alt="Chhayly Sreng" />
                </div>
                <h1 className="profile-name">Chhayly Sreng</h1>
                <p className="profile-subtitle">AI Researcher &amp; Software Engineer</p>
              </div>
              <div className="about-text">
                <p>
                  I am a passionate software engineer and AI researcher with a strong background in computer science and engineering.
                  My journey spans across various domains including artificial intelligence, machine learning, web development, and data science.
                </p>
                <p>
                  Currently pursuing my Master's degree in Computer Science at Virginia Tech, I have been fortunate to work on
                  cutting-edge research projects and contribute to innovative software solutions. My experience includes developing
                  payment gateway systems, AI-powered applications, and educational platforms.
                </p>
                <p className="about-philosophy">
                  <i className="fas fa-quote-left"></i>
                  "Building intelligent systems for a smarter, more sustainable world."
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>
            </div>
            {/* Professional Experience on the right (mini-timeline) */}
            <div id="experience" className="experience-right" data-aos="fade-left">
              <h3 className="subsection-title">Professional Experience</h3>
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
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Skills</h2>
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

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Education</h2>
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
                <span className="education-focus">Focus: AI & Machine Learning</span>
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
                <span className="education-focus">Leadership & Global Engagement</span>
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

      {/* Projects Section - Now uses ProjectList component */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <ProjectList projects={projects} /> {/* Pass projects data as prop */}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="publications">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Research Publications</h2>
          <div className="publications-list">
            {publications.map((publication: Publication, index: number) => (
              <div key={index} className="publication-item" data-aos="fade-up">
                <div className="publication-image-container">
                  <img src={publication.image && publication.image.trim() !== '' ? formatImagePath(publication.image) : "/images/placeholders/item-placeholder.svg"} alt={publication.title} className="publication-image" />
                </div>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors.join(', ')}</p>
                  <p className="publication-venue">{publication.venue}</p>
                  <p className="publication-summary">{publication.summary}</p>
                  <div className="publication-links">
                    {publication.pdf && publication.pdf !== "#" && (
                      <a href={publication.pdf} className="publication-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-pdf"></i> PDF
                      </a>
                    )}
                    {publication.doi && publication.doi !== "#" && (
                      <a href={publication.doi} className="publication-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-link"></i> DOI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Achievements & Recognition</h2>
          <div className="achievements-list">
            {achievements.map((achievement: Achievement, index: number) => (
              <div key={index} className="achievement-card" data-aos="fade-up">
                <div className="achievement-image-container">
                  <img src={achievement.image && achievement.image.trim() !== '' ? formatImagePath(achievement.image) : "/images/placeholders/item-placeholder.svg"} alt={achievement.title} className="achievement-image" />
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p className="achievement-organization">{achievement.organization}</p>
                  <p className="achievement-year">{achievement.year}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Copied from index.html, to be part of the main page content for now */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Chhayly Sreng. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/chhayly-sreng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/chhayly" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:chhayly.sreng@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default HomePage;
