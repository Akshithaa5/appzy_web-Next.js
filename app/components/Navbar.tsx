"use client";

import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Hero'); // Default active link
  const navRef = useRef<HTMLDivElement | null>(null); // Ref for the navbar container

  // Function to handle scroll and update active link
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200; // Adjusted scroll position for better accuracy

    // Check if elements are available before accessing offsetTop
    const sections = [
      { id: 'Hero', ref: document.getElementById('Hero') },
      { id: 'Features', ref: document.getElementById('Features') },
      { id: 'screenshots', ref: document.getElementById('screenshots') },
      { id: 'video', ref: document.getElementById('video') },
      { id: 'testimonial', ref: document.getElementById('testimonial') },
      { id: 'Pricing', ref: document.getElementById('Pricing') },
      { id: 'blog', ref: document.getElementById('blog') },
    ];

    // Find which section is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.ref && section.ref.offsetTop <= scrollPosition) {
        setActiveLink(section.id);
        break;
      }
    }
  };

  // Effect to listen to scroll events
  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollListener);

    // Clean up the scroll listener
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []); // Empty dependency array to run effect only once on mount

  // Function to handle clicking on a navigation link
  const handleClick = (id: string) => {
    setActiveLink(id); // Update active link state
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 200, // Adjusted scroll position for better accuracy
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white-600 text-white py-4 z-10">
      <div ref={navRef} className="container mx-auto flex justify-center relative">
        <NavLink href="#Hero" activeLink={activeLink} onClick={() => handleClick('Hero')}>
          Home
        </NavLink>
        <NavLink href="#Features" activeLink={activeLink} onClick={() => handleClick('Features')}>
          Features
        </NavLink>
        <NavLink href="#screenshots" activeLink={activeLink} onClick={() => handleClick('screenshots')}>
          Screenshots
        </NavLink>
        <NavLink href="#video" activeLink={activeLink} onClick={() => handleClick('video')}>
          Video
        </NavLink>
        <NavLink href="#testimonial" activeLink={activeLink} onClick={() => handleClick('testimonial')}>
          Testimonial
        </NavLink>
        <NavLink href="#Pricing" activeLink={activeLink} onClick={() => handleClick('Pricing')}>
          Pricing
        </NavLink>
        <NavLink href="#blog" activeLink={activeLink} onClick={() => handleClick('blog')}>
          Blog
        </NavLink>
        {/* Red line indicator */}
        <div
          className="absolute bottom-0 h-0.5 bg-red-500"
          style={{
            left: getIndicatorPosition(activeLink),
            width: '50px', // Adjust the width of the red line as needed
            transition: 'left 0.3s ease', // Smooth transition for left position
          }}
        ></div>
      </div>
    </nav>
  );
};
// NavLink component to handle individual links
interface NavLinkProps {
  href: string;
  activeLink: string;
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, activeLink, onClick, children }) => {
  const isActive = activeLink === href.substring(1); // Check if current link is active

  return (
    <a
      href={href}
      className={`px-4 py-2 mx-2 ${isActive ? 'text-red-500' : 'text-white'}`}
      onClick={onClick}
      style={{
        position: 'relative',
        borderBottom: 'none', 
      }}
    >
      {children}
    </a>
  );
};

export default Navbar;

// Function to calculate the left position of the red indicator line
const getIndicatorPosition = (activeLink: string): string => {
  const activeNavLink = document.querySelector(`a[href="#${activeLink}"]`);
  if (activeNavLink) {
    const navRect = activeNavLink.getBoundingClientRect();
    return `${navRect.left}px`; // Position the red line under the active link
  }
  return '0px'; // Default position if no active link found
};
