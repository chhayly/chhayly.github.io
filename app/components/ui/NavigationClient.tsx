// app/components/NavigationClient.tsx
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function NavigationClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileNavToggleRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const mobileSidebarToggleRef = useRef<HTMLButtonElement>(null); // Ref for the new button

  // Toggle Mobile Top Navigation
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Toggle Main Sidebar on Mobile
  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  // Smooth Scroll Function
  const smoothScrollTo = useCallback((targetId: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // Remove #
    if (targetElement) {
      const offsetTop = window.innerWidth <= 1024 ? targetElement.offsetTop - 80 : targetElement.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const mobileNavMenu = document.getElementById('nav-menu');
    if (mobileNavMenu) {
      if (isMobileMenuOpen) mobileNavMenu.classList.add('active');
      else mobileNavMenu.classList.remove('active');
    }
    // For the mobile nav toggle button itself
    const mobileNavToggleButton = document.getElementById('mobile-nav-toggle');
    if (mobileNavToggleButton) {
        if (isMobileMenuOpen) mobileNavToggleButton.classList.add('active');
        else mobileNavToggleButton.classList.remove('active');
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mainSidebar = document.getElementById('sidebar');
    const mainOverlay = document.getElementById('sidebar-overlay'); // Assuming overlay exists
    if (mainSidebar) {
      if (isMobileSidebarOpen) mainSidebar.classList.add('active');
      else mainSidebar.classList.remove('active');
    }
    if (mainOverlay) {
      if (isMobileSidebarOpen) mainOverlay.classList.add('active');
      else mainOverlay.classList.remove('active');
    }
  }, [isMobileSidebarOpen]);

  // Event listeners for closing menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Mobile top nav
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node) &&
          mobileNavToggleRef.current && !mobileNavToggleRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      // Main sidebar on mobile
      const mainOverlay = document.getElementById('sidebar-overlay');
      if (mainOverlay && mainOverlay.classList.contains('active') && event.target === mainOverlay) {
         setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // Attach event listeners to elements once they are available in the DOM
  useEffect(() => {
    // Mobile Nav Toggle Button
    const mobileNavToggleButton = document.getElementById('mobile-nav-toggle');
    if (mobileNavToggleButton) {
      mobileNavToggleButton.addEventListener('click', toggleMobileMenu);
      // Store ref for outside click logic
      (mobileNavToggleRef as React.MutableRefObject<HTMLDivElement | null>).current = mobileNavToggleButton as HTMLDivElement;
    }

    // Store ref for mobileNav itself for outside click
    const mobileNavMenuElement = document.getElementById('nav-menu');
    if (mobileNavMenuElement) {
        (mobileNavRef as React.MutableRefObject<HTMLDivElement | null>).current = mobileNavMenuElement as HTMLDivElement;
    }

    // Links in Mobile Top Nav
    const mobileNavLinks = document.querySelectorAll('#nav-menu .nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        smoothScrollTo((e.currentTarget as HTMLAnchorElement).getAttribute('href')!, e as unknown as React.MouseEvent<HTMLAnchorElement>);
        setIsMobileMenuOpen(false); // Close menu on link click
      });
    });

    // Links in Main Sidebar
    const sidebarLinks = document.querySelectorAll('#sidebar .sidebar-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        smoothScrollTo((e.currentTarget as HTMLAnchorElement).getAttribute('href')!, e as unknown as React.MouseEvent<HTMLAnchorElement>);
        if (window.innerWidth <= 1024) { // Close sidebar if on mobile
             setIsMobileSidebarOpen(false);
        }
      });
    });

    // Mobile Sidebar Toggle Button (the new one)
    const mobileSidebarToggleButton = document.getElementById('mobile-sidebar-toggle-btn');
    if (mobileSidebarToggleButton) {
        mobileSidebarToggleButton.addEventListener('click', toggleMobileSidebar);
        (mobileSidebarToggleRef as React.MutableRefObject<HTMLButtonElement | null>).current = mobileSidebarToggleButton as HTMLButtonElement;
    }

    // Main sidebar ref (not strictly needed for toggle but good practice)
    const mainSidebarElement = document.getElementById('sidebar');
    if (mainSidebarElement) {
        (sidebarRef as React.MutableRefObject<HTMLElement | null>).current = mainSidebarElement as HTMLElement;
    }

    // Cleanup
    return () => {
      if (mobileNavToggleButton) mobileNavToggleButton.removeEventListener('click', toggleMobileMenu);
      mobileNavLinks.forEach(link => link.removeEventListener('click', (e) => {
        smoothScrollTo((e.currentTarget as HTMLAnchorElement).getAttribute('href')!, e as unknown as React.MouseEvent<HTMLAnchorElement>);
        setIsMobileMenuOpen(false);
      }));
      sidebarLinks.forEach(link => link.removeEventListener('click', (e) => {
        smoothScrollTo((e.currentTarget as HTMLAnchorElement).getAttribute('href')!, e as unknown as React.MouseEvent<HTMLAnchorElement>);
         if (window.innerWidth <= 1024) setIsMobileSidebarOpen(false);
      }));
      if (mobileSidebarToggleButton) mobileSidebarToggleButton.removeEventListener('click', toggleMobileSidebar);
    };
  }, [toggleMobileMenu, toggleMobileSidebar, smoothScrollTo]);

  return null; // This component does not render UI itself
}
