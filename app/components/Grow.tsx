"use client";

import React from 'react';
import Image from 'next/image';

const Grow: React.FC = () => {
  return (
    <section className="processes text-center py-12 bg-white" id="processes">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <p className="text-yellow-600 text-sm font-bold mb-2 capitalize">How it Works</p>
          <h2 className="text-black text-4xl mb-8">Grow up your Money Saving</h2>
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-yellow-600"></div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {/* Panel #1 */}
          <div className="process-card p-2 rounded-lg text-center m-4 max-w-xs flex flex-col items-center">
            <div className="process-phase bg-yellow-200 text-yellow-600 w-20 h-20 flex items-center justify-center text-5xl mb-4 rounded-md">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Install the App</h3>
            <p className="text-gray-600">We use a customized application specifically designed</p>
          </div>
          {/* Icon between Panel #1 and #2 */}
          <div className="flex items-center justify-center w-40">
            <Image src="/assets/images/line-top.png" alt="Icon" width={400} height={40} />
          </div>
          {/* Panel #2 */}
          <div className="process-card p-2 rounded-lg text-center m-4 max-w-xs flex flex-col items-center">
            <div className="process-phase bg-yellow-600 text-white w-20 h-20 flex items-center justify-center text-5xl mb-4 rounded-md">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Setup your profile</h3>
            <p className="text-gray-600">We use a customized application specifically designed</p>
          </div>
          {/* Icon between Panel #2 and #3 */}
          <div className="flex items-center justify-center w-40">
            <Image src="/assets/images/line-bottom.png" alt="Icon" width={400} height={40} />
          </div>
          {/* Panel #3 */}
          <div className="process-card p-2 rounded-lg text-center m-4 max-w-xs flex flex-col items-center">
            <div className="process-phase bg-yellow-200 text-yellow-600 w-20 h-20 flex items-center justify-center text-5xl mb-4 rounded-md">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Enjoy the features!</h3>
            <p className="text-gray-600">We use a customized application specifically designed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;
