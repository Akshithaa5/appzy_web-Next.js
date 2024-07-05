import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import Screenshots from './components/Screenshot';
import Hero from './components/Hero';
import TestimonialSection from './components/TestimonialSection';
import Pricing from './components/Pricing';
import Video from './components/Video';
import Blog from './components/Blog';
import Savings from './components/Savings';
import Contacts from './components/Contacts';
import Download from './components/Download';
import Grow from './components/Grow';
import Navbar from './components/Navbar';
interface LayoutProps {
  children: ReactNode; // ReactNode can be any React node: JSX, strings, arrays, etc.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website Title</title>

        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
        {/* Owl Carousel CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        
        {/* Tailwind CSS */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Hero />
        <Features />
        <Savings />
        <Grow />
        <Screenshots />
        <Video />
        <TestimonialSection />
        <Pricing />
        <Download />
        <Blog />
        
        <Contacts />
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}

export default Layout;
