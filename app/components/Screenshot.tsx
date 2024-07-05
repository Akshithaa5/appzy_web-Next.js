import React from 'react';
import Image from 'next/image';

const Screenshots= () => {
  return (
    <section className="screenshots py-12 bg-gray-100" id="screenshots">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <p className="text-yellow-600 text-sm font-bold mb-2 capitalize">Screenshots</p>
          <h2 className="text-black text-4xl mb-8">Simple & Beautiful Interface</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-16 h-0.5 bg-orange-600"></div>
        </div>
        <div className="flex justify-center items-center flex-wrap relative">
          {/* Mockup Container */}
          <div className="mockup-container flex justify-around items-center w-full relative overflow-hidden">
            {/* Light Mockup */}
            <div className="mockup-item light-mockup-item relative w-1/5 p-1">
              <Image src="/assets/images/mockup-light.png" alt="Light Mockup" width={400} height={300} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
                <Image src="/assets/images/1.png" alt="screenshot" width={220} height={220} className="animate-move" />
              </div>
            </div>
            {/* Light Mockup */}
            <div className="mockup-item light-mockup-item relative w-1/5 p-1">
              <Image src="/assets/images/mockup-light.png" alt="Light Mockup" width={400} height={300} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
                <Image src="/assets/images/new3.png" alt="screenshot" width={220} height={220} className="animate-move" />
              </div>
            </div>
            {/* Dark Mockup */}
            <div className="mockup-item dark-mockup-item relative w-1/5 p-1">
              <Image src="/assets/images/mockup-dark.png" alt="Dark Mockup" width={400} height={300} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
                <Image src="/assets/images/new1.png" alt="screenshot" width={220} height={220} className="animate-move" />
              </div>
            </div>
            {/* Light Mockup */}
            <div className="mockup-item light-mockup-item relative w-1/5 p-1">
              <Image src="/assets/images/mockup-light.png" alt="Light Mockup" width={400} height={300} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
                <Image src="/assets/images/new .png" alt="screenshot" width={220} height={220} className="animate-move" />
              </div>
            </div>
            {/* Light Mockup */}
            <div className="mockup-item light-mockup-item relative w-1/5 p-1">
              <Image src="/assets/images/mockup-light.png" alt="Light Mockup" width={400} height={300} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
                <Image src="/assets/images/3-7.png" alt="screenshot" width={220} height={220} className="animate-move" />
              </div>
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
              &lt;
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
