import type { Metadata } from 'next';
import Link from 'next/link';

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
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header className="site-header">
          <div className="header-container">
            <Link href="/" className="logo">CS</Link>
            <nav className="site-nav">
              <Link href="/experience">Experience</Link>
              <Link href="/education">Education</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/achievements">Achievements</Link>
            </nav>
          </div>
        </header>
        <main className="site-main">
          {children}
        </main>
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
      </body>
    </html>
  );
}
