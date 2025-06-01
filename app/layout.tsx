import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link if you use it for Next.js internal navigation later
import AOSInitializer from './components/utils/AOSInitializer';
import NavigationClient from './components/ui/NavigationClient';
import ThemeHandler from './components/ui/ThemeHandler';

export const metadata: Metadata = {
  title: 'Chhayly Sreng - AI Researcher & Software Engineer',
  description: 'Personal portfolio of Chhayly Sreng - AI Researcher, Software Engineer, and Graduate Student at Virginia Tech',
  icons: {
    icon: '/images/favicon.ico', // Adjusted path for public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <AOSInitializer />
        <NavigationClient />
        <ThemeHandler />
        <div id="sidebar-overlay" className="sidebar-overlay"></div>
        <button id="mobile-sidebar-toggle-btn" className="mobile-sidebar-toggle" aria-label="Toggle sidebar">
          <i className="fas fa-bars"></i>
        </button>
        {/* Mobile Navigation */}
        <nav className="mobile-navbar" id="mobile-navbar">
            <div className="mobile-nav-container">
                <div className="nav-logo">
                    <a href="#home">CS</a>
                </div>
                <div className="nav-menu" id="nav-menu">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#publications" className="nav-link">Publications</a>
                    <a href="#achievements" className="nav-link">Achievements</a>
                </div>
                <div className="mobile-nav-toggle" id="mobile-nav-toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>

        <div className="layout">
            {/* Sidebar */}
            <aside className="sidebar" id="sidebar">
                <div className="sidebar-content">
                    {/* Profile Section */}
                    <div className="sidebar-profile">
                        <div className="profile-image">
                            <img src="/images/placeholders/profile-placeholder.svg" alt="Profile Picture" />
                        </div>
                        <h1>Chhayly Sreng</h1>
                        <p className="profile-subtitle">AI-Focused Software Engineer, Data Scientist, and Researcher</p>
                        <div className="profile-tagline">
                            <span className="tagline-text" id="tagline-text">5+ Years in Software & AI</span>
                            <span className="tagline-cursor">|</span>
                        </div>
                    </div>

                    {/* Contact Info - simplified for now */}
                    <div className="sidebar-contact">
                        <div className="contact-info">
                            <div className="contact-item">
                                {/* <i className="fas fa-envelope"></i> */}
                                <span>📧</span> <a href="mailto:chhayly@vt.edu">chhayly@vt.edu</a>
                            </div>
                            <div className="contact-item">
                                {/* <i className="fab fa-linkedin"></i> */}
                                <span>🔗</span> <a href="https://linkedin.com/in/chhayly-sreng" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div className="contact-item">
                                {/* <i className="fab fa-github"></i> */}
                                <span>💻</span> <a href="https://github.com/chhayly" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="contact-item resume-link">
                                {/* <i className="fas fa-file"></i> */}
                                <span>📄</span> <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a> {/* Path adjusted for public folder */}
                            </div>
                        </div>
                    </div>

                    {/* Section Navigation */}
                    <nav className="sidebar-nav">
                        <ul className="sidebar-menu">
                            <li><a href="#about" className="sidebar-link" data-section="about">
                                {/* <i className="fas fa-user"></i> */} <span>👤</span> About / Skills
                            </a></li>
                            <li><a href="#experience" className="sidebar-link" data-section="experience">
                                {/* <i className="fas fa-briefcase"></i> */} <span>💼</span> Experience
                            </a></li>
                            <li><a href="#education" className="sidebar-link" data-section="education">
                                {/* <i className="fas fa-graduation-cap"></i> */} <span>🎓</span> Education
                            </a></li>
                            <li><a href="#projects" className="sidebar-link" data-section="projects">
                                {/* <i className="fas fa-folder-open"></i> */} <span>📁</span> Projects
                            </a></li>
                            <li><a href="#publications" className="sidebar-link" data-section="publications">
                                {/* <i className="fas fa-file-alt"></i> */} <span>📜</span> Publications
                            </a></li>
                            <li><a href="#achievements" className="sidebar-link" data-section="achievements">
                                {/* <i className="fas fa-trophy"></i> */} <span>🏆</span> Achievements
                            </a></li>
                        </ul>
                    </nav>

                    {/* Sidebar Footer - simplified */}
                    <div className="sidebar-footer">
                        <p>&copy; 2025 Chhayly Sreng</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                {children}
            </main>
        </div>

        {/* Global Dark Mode Toggle - structure only, functionality later */}
        <button id="global-theme-toggle" className="global-theme-toggle" aria-label="Toggle dark mode">
            <i className="fas fa-moon"></i>
        </button>

        {/* Scripts - AOS will be handled differently in Next.js, placeholder for now */}
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        {/* <script src="/assets/js/script.js"></script> {/* This will be migrated to React components */}
      </body>
    </html>
  );
}
