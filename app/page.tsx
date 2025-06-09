import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-intro">
      <div className="container">
        <div className="about-profile">
          <div className="profile-image">
            <img src="/images/profile_picture.png" alt="Chhayly Sreng" />
          </div>
          <h1 className="profile-name">Chhayly Sreng</h1>
          <p className="profile-subtitle">AI Researcher &amp; Software Engineer</p>
        </div>
        <p className="home-message">
          Welcome to my portfolio. Use the navigation to explore my work and background.
        </p>
        <Link href="/about" className="home-cta">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}
