const HeroSection = () => {
  return (
    <div className="relative md:h-[85vh] h-[80vh] px-10 bg-gray-100">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl md:text-[60px] md:w-[70%] font-bold text-center text-darkBlue leading-[1]">
          File Your Taxes with Ease, Just Once a Year.
        </h1>
        <p className="mt-4 text-base text-center text-gray-600 max-w-lg mx-auto">
          Upload, review, and file your taxes in minutes with our AI-powered
          platform. Fast, easy, and secure.
        </p>
        <button className="mt-8 px-8 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all">
          Start Now
        </button>
      </div>

      {/* SVG wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400" // Increase the viewBox height
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,245.3C672,267,768,213,864,176C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,500L1392,500C1344,500,1248,500,1152,500C1056,500,960,500,864,500C768,500,672,500,576,500C480,500,384,500,288,500C192,500,96,500,48,500L0,500Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
