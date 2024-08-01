"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

const Header = () => {
  const handleFreeTrialClick = () => {
    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50" id="Home">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo ml-20">
          <Image src="/assets/images/Finanzy.png" alt="Logo" width={160} height={32} className="h-6" />
        </div>
        <div className="header-text"></div>
        <ul className="flex">
          <li className="mr-4">
            <a href="#Hero" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Home</a>
          </li>
          <li className="mr-4">
            <a href="#Features" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Features</a>
          </li>
          <li className="mr-4">
            <a href="#screenshots" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Screenshots</a>
          </li>
          <li className="mr-4">
            <a href="#video" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Video</a>
          </li>
          <li className="mr-4">
            <a href="#testimonial" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Testimonial</a>
          </li>
          <li className="mr-4">
            <a href="#Pricing" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Pricing</a>
          </li>
          <li className="mr-4">
            <a href="#blog" className="text-gray-700 hover:text-blue-500 px-4 py-2 rounded">Blog</a>
          </li>
          <li>
            <button
              className="bg-blue-700 text-white px-7 py-2 square-full hover:bg-green-600 transition duration-300"
              onClick={handleFreeTrialClick}
            >
              Free Trial
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
