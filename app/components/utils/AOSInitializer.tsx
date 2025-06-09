// app/components/AOSInitializer.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
// We already have the CSS linked in layout.tsx: <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
// If not, you would import it here: import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything itself
}
