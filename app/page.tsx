export default function Home() {
  return (
    <main>
      <section className="home-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-profile">
              <div className="profile-image">
                <img src="/images/profile_picture.png" alt="Chhayly Sreng" />
              </div>
            </div>
            <div className="intro-text">
              <h1 className="profile-name">Chhayly Sreng</h1>
              <p className="profile-subtitle">AI Researcher &amp; Software Engineer</p>
              <p className="home-message">
                I am a passionate software engineer and AI researcher with a strong background in computer science and engineering. Currently pursuing my Master's degree at Virginia Tech, I've built payment gateway systems, AI-powered apps and more.
              </p>
              <p className="about-philosophy">
                <i className="fas fa-quote-left"></i>
                "Building intelligent systems for a smarter, more sustainable world."
                <i className="fas fa-quote-right"></i>
              </p>
              <div className="intro-links">
                <a
                  href="https://github.com/chhayly"
                  className="intro-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/chhayly-sreng"
                  className="intro-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:chhayly.sreng@gmail.com" className="intro-icon" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="/documents/resume.pdf" className="intro-btn" download>
                  Resume
                </a>
                <a href="/documents/cv.pdf" className="intro-btn" download>
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
