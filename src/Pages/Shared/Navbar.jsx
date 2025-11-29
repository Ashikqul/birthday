import React, { useState } from "react";
import Lottie from "lottie-react";
import birthdayAnimation from "../../assets/Birthday cake slice.json"; // তোমার লোটি ফাইল

const Navbar = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMusic = () => {
    setShowVideo(!showVideo);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700 text-white py-3 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">

        {/* Left — Logo + Lottie Animation */}
        <div className="flex items-center space-x-2">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            🎉 Wife Of Paradise  
            <br className="sm:hidden" /> Happy Birthday 💖
          </h1>

          {/* Small Cute Lottie Animation */}
          <div className="w-10 h-10 sm:w-12 sm:h-12">
            <Lottie animationData={birthdayAnimation} loop={true} />
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleMusic}
            className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-200 transition text-sm md:text-base"
          >
            {showVideo ? "⏸️ Stop Music" : "🎵 Play Music"}
          </button>

          <span className="text-2xl md:text-3xl animate-pulse">🎂</span>
          <span className="text-2xl md:text-3xl animate-bounce">🎈</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white text-pink-600 px-3 py-2 rounded-full font-semibold hover:bg-yellow-200 transition text-sm"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-600 py-3 text-center space-y-2">
          <button
            onClick={toggleMusic}
            className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-200 transition"
          >
            {showVideo ? "⏸️ Stop Music" : "🎵 Play Music"}
          </button>

          <div className="flex justify-center space-x-3 mt-2">
            <span className="text-2xl animate-pulse">🎂</span>
            <span className="text-2xl animate-bounce">🎈</span>
          </div>
        </div>
      )}

      {/* Hidden YouTube Player */}
      {showVideo && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/K2aJTT29ZdU?autoplay=1"
            title="Birthday Song"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
