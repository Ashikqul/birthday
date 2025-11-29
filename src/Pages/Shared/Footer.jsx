import React, { useState } from "react";
import birthdayImg from "../../assets/image1.png.webp";

const Footer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => setShowVideo(!showVideo);

  return (
    <footer className="bg-[#35435B] text-white py-10 mt-20 text-center shadow-inner">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img
          src={birthdayImg}
          alt="Birthday Decoration"
          onClick={handleClick}
          className={`w-20 h-20 rounded-full shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-300 ${
            showVideo ? "animate-spin-slow" : ""
          }`}
        />

        {showVideo && (
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/JqevNztgkOw?autoplay=1"
            title="Birthday Song"
            allow="autoplay"
          ></iframe>
        )}

        <p className="text-2xl font-bold">
          🎂 Happy Birthday Liza! 💖 Sending lots of love your way ❤️
        </p>
        <p className="text-xl">🎈🎉✨</p>
      </div>
    </footer>
  );
};

export default Footer;
