"use client";
import React from 'react';
import Image from 'next/image';

const Saving: React.FC = () => {
  return (
    <section className="saving-money-section bg-gray-100 py-12 rounded-md shadow-inner">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
        <div className="saving-money-image mb-8 lg:mb-0 lg:mr-9">
          <Image
            src="/assets/images/iPhone-displaying-Mint-monthly-b.png"
            alt="iPhone displaying the Mint monthly budget app"
            className="w-full max-w-2xl h-auto rounded-md"
            width={500}
            height={600}
          />
        </div>
        <div className="saving-money-description bg-white p-5 rounded-md lg:ml-20 shadow-md">
          <h2 className="text-yellow-600 text-sm font-bold mb-2 capitalize">Saving Money</h2>
          <h1 className="text-black text-4xl mb-8">Best Financing App To Save Your Money</h1>
          <p className="text-base mb-0 text-gray-700 max-w-lg">
            Best financing app ever in the world. Easy to use and very user-friendly for mobile banking. 
            You can control your card easily and send money to someone with just one click.
          </p>
          <button className="bg-yellow-600 text-white py-4 px-14 mt-5 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700 hover:transform hover:scale-105">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Saving;
