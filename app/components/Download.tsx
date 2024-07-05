import Image from 'next/image';

const Download = () => {
  return (
    <section className="relative bg-section download py-12 text-white flex justify-center items-center" id="download">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-half h-full bg-cover bg-center z-[-1] opacity-50" style={{ backgroundImage: "url('/assets/images/background/bg-download.png')" }}></div>
      
      {/* Download Box */}
      <div className="bg-purple-800 rounded-3xl p-20 w-full max-w-[300px] z-10 text-center">
        {/* Heading */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Download App Now <br /> And Save Your Money</h2>
          <p className="text-lg mb-8">Serving an impressive list of long-term money with experience and expertise in <br />multiple industries.</p>
        </div>
  
        {/* Download Action Buttons */}
        <div className="flex justify-center gap-4">
          <a className="inline-flex items-center justify-center bg-white rounded-lg py-4 px-6 transition-transform hover:translate-y-[-5px] hover:scale-110" href="https://play.google.com/store">
            <Image src="/assets/images/ios-store-dark.png" alt="iOS App Store" width={128} height={40} className="w-32 h-auto transition-transform duration-300 transform hover:scale-105" />
          </a>
          <a className="inline-flex items-center justify-center bg-white rounded-lg py-4 px-6 transition-transform hover:translate-y-[-5px] hover:scale-110" href="https://www.apple.com/ios/app-store/">
            <Image src="/assets/images/g-play-dark.png" alt="Google Play Store" width={128} height={40} className="w-32 h-auto transition-transform duration-300 transform hover:scale-105" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
