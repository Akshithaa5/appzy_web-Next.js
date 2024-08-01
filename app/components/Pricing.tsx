"use client";

import React, { useState, useRef } from 'react';

const Pricing: React.FC = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState<boolean>(false);

  const handleToggleChange = () => {
    setIsAnnualBilling((prev) => !prev);
  };

  return (
    <section id="Pricing" className="pricing py-12 bg-gray-100 text-center">
      <div className="container mx-auto px-22 lg:px-16">
        <h2 className="text-yellow-600 text-sm font-bold mb-2 capitalize">Pricing</h2>
        <h1 className="text-4xl mb-10">Get In Reasonable Price</h1>
        <div className="toggle-container flex items-center justify-center mb-10">
          <span className={`toggle-text text-lg mx-2 ${isAnnualBilling ? 'text-orange-600' : ''}`}>
            Bill Monthly
          </span>
          <input
            type="checkbox"
            id="toggle"
            className="toggle-input hidden"
            checked={isAnnualBilling}
            onChange={handleToggleChange}
          />
          <label
            htmlFor="toggle"
            className={`toggle-label relative cursor-pointer transition-all duration-300 inline-block w-16 h-8 ${isAnnualBilling ? 'bg-yellow-500' : 'bg-blue-700'} rounded-full`}
          >
            <span
              className={`toggle-slider absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
                isAnnualBilling ? 'transform translate-x-full bg-white' : 'bg-gray-300'
              }`}
            ></span>
          </label>
          <span className={`toggle-text text-lg mx-2 ${!isAnnualBilling ? 'text-red-500' : ''}`}>
            Bill Annually
          </span>
        </div>
        <div className="pricing-plans flex justify-around flex-wrap">
          <div className="pricing-plan bg-white p-8 lg:p-5 m-3 border border-gray-300 rounded-lg shadow-md flex-1 max-w-xs lg:max-w-md">
            <div className="pricing-type flex justify-center items-baseline mb-5">
              <p className="price text-4xl mr-2">${isAnnualBilling ? '120' : '20'}</p>
              <p className="per text-lg text-gray-500">/per {isAnnualBilling ? 'year' : 'month'}</p>
            </div>
            <h3 className="text-2xl mb-2 text-left">Basic</h3>
            <p className="text-lg mb-6 text-left">For Beginners Who Want To Scale Business Globally</p>
            <ul className="pricing-list list-none mb-8">
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Expense Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Card Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-gray-500 mr-3"></i><span>Instant Statistics</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-gray-500 mr-3"></i><span>Bookmark Function</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-gray-500 mr-3"></i><span>Accounting System</span></li>
            </ul>
            <button className="btn-get-started bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 mx-auto block">Get Started</button>
          </div>
          <div className="pricing-plan bg-blue-700 text-white p-8 lg:p-5 m-3 border border-gray-300 rounded-lg shadow-md flex-1 max-w-xs lg:max-w-md">
            <div className="pricing-type flex justify-center items-baseline mb-5">
              <p className="price text-4xl mr-2">${isAnnualBilling ? '150' : '50'}</p>
              <p className="per text-lg text-white-500">/per {isAnnualBilling ? 'year' : 'month'}</p>
            </div>
            <h3 className="text-2xl mb-2 text-left">Standard</h3>
            <p className="text-lg mb-6 text-left">For Agencies Who Want To Scale Business Globally</p>
            <ul className="pricing-list list-none mb-8">
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Expense Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Card Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Instant Statistics</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Bookmark Function</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-gray-500 mr-3"></i><span>Accounting System</span></li>
            </ul>
            <button className="btn-get-started bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 mx-auto block">Get Started</button>
          </div>
          <div className="pricing-plan bg-white p-8 lg:p-5 m-3 border border-gray-300 rounded-lg shadow-md flex-1 max-w-xs lg:max-w-md">
            <div className="pricing-type flex justify-center items-baseline mb-5">
              <p className="price text-4xl mr-2">${isAnnualBilling ? '500' : '100'}</p>
              <p className="per text-lg text-gray-500">/per {isAnnualBilling ? 'year' : 'month'}</p>
            </div>
            <h3 className="text-2xl mb-2 text-left">Premium</h3>
            <p className="text-lg mb-6 text-left">For Professionals Who Want To Scale Business Globally</p>
            <ul className="pricing-list list-none mb-8">
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Expense Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Card Management</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Instant Statistics</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Bookmark Function</span></li>
              <li className="flex items-center mb-4 text-lg"><i className="fas fa-bookmark text-red-400 mr-3"></i><span>Accounting System</span></li>
            </ul>
            <button className="btn-get-started bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 mx-auto block">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
