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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
