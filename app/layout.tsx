import type { Metadata } from 'next';
// No additional imports needed for minimal layout

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
            <a href="#home" className="logo">CS</a>
            <nav className="site-nav">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#achievements">Achievements</a>
            </nav>
          </div>
        </header>
        <main className="site-main">
          {children}
        </main>
      </body>
    </html>
  );
}
