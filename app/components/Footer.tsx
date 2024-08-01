"use client";

import React, { useRef } from 'react';

const Footer = () => {
  return (
    <section className="bg-purple-700 text-white py-12" id="about-app">
  <div className="container mx-auto max-w-7xl px-4 flex flex-wrap gap-6 justify-between">
    
    <div className="about-section flex-1 min-w-[250px]">
      <h2 className="text-2xl mb-2">About App</h2>
      <p className="text-sm mb-4">
        This Should Be Used To Tell A Story And Include Any <br />
        Testimonials You Might Have About Your Product Or Service For Your Clients
      </p>
      <div className="follow-us">
        <h3 className="text-lg mb-2">Follow Us</h3>
        <div className="footer-social flex gap-4">
          <a href="https://www.facebook.com/" className="text-white text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/?lang=en" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/" className="text-white text-2xl"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <div className="quick-links flex-1 min-w-[250px]">
      <h3 className="text-lg mb-4">Quick Links</h3>
      <ul className="flex flex-col gap-2">
        <li><a href="Home" className="text-white hover:underline">Home</a></li>
        <li><a href="Features" className="text-white hover:underline">Features</a></li>
        <li><a href="How To Work" className="text-white hover:underline">How To Work</a></li>
        <li><a href="Screenshots" className="text-white hover:underline">Screenshots</a></li>
        <li><a href="Pricing" className="text-white hover:underline">Pricing</a></li>
        <li><a href="Blog" className="text-white hover:underline">Blog</a></li>
      </ul>
    </div>

    <div className="Help flex-1 min-w-[250px]">
      <h3 className="text-lg mb-4">Help</h3>
      <ul className="flex flex-col gap-2">
        <li><a href="About Us" className="text-white hover:underline">About Us</a></li>
        <li><a href="Partners" className="text-white hover:underline">Partners</a></li>
        <li><a href="Career" className="text-white hover:underline">Career</a></li>
        <li><a href="Reviews" className="text-white hover:underline">Reviews</a></li>
        <li><a href="Terms & Conditions" className="text-white hover:underline">Terms & Conditions</a></li>
        <li><a href="Help" className="text-white hover:underline">Help</a></li>
      </ul>
    </div>

    <div className="newsletter flex-1 min-w-[250px]">
      <h3 className="text-lg mb-4">Newsletter</h3>
      <h6 className="text-sm mb-4">Subscribe With Email And Loads Of News Will Be Sent To You</h6>
      <form action="#" className="flex items-center gap-4">
        <input type="email" placeholder="Enter Your E-Mail" required className="flex-1 py-2 px-4 rounded-lg border-none text-black" />
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15.504" height="26.305" viewBox="0 0 15.504 26.305">
            <path id="Icon" d="M581.84,3436.451l2.365-2.351,13.139,13.152L584.191,3460.4l-2.352-2.351,10.8-10.8Z" transform="translate(-581.84 -3434.1)" fill="#fff"></path>
          </svg>
        </button>
      </form>
    </div>

  </div>
  <div className="footer mt-20">
    <p className="text-center text-sm">© 2024 – Website Designed By Akshitha.</p>
    </div>
</section>
  );
};

export default Footer;
