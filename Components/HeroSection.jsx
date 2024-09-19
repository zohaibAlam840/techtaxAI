const HeroSection = () => {
  return (
    <div className="relative h-[85vh] px-10 bg-gray-100">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24">
        <h1 className="text-[60px] md:w-[70%] font-bold text-center text-blue-900">
          File Your Taxes with Ease, Just Once a Year.
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 max-w-lg mx-auto">
          Upload, review, and file your taxes in minutes with our AI-powered
          platform. Fast, easy, and secure.
        </p>
        <button className="mt-8 px-8 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all">
          Start Now
        </button>
      </div>

      {/* SVG wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,213.3C672,245,768,299,864,288C960,277,1056,203,1152,181.3C1248,160,1344,192,1392,213.3L1440,235L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
