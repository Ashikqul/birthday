import React, { useState } from "react";
import Lottie from "lottie-react";

// closed & open envelope animation
import closedEnvelope from "../../../assets/Gift.json";
import openEnvelope from "../../../assets/Gift (1).json";

import birthdayAnimation from "../../../assets/Balloons.json";

const Letter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-pink-400 to-pink-200 p-6">

      {/* Envelope */}
      <div
        className="relative w-64 sm:w-72 md:w-80 h-40 sm:h-48 cursor-pointer transition-transform hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        {/* Closed Envelope Lottie */}
        {!open && (
          <Lottie
            animationData={closedEnvelope}
            loop={true}
            className="w-full h-full"
          />
        )}

        {/* Open Envelope Lottie */}
        {open && (
          <Lottie
            animationData={openEnvelope}
            loop={true}
            className="w-full h-full"
          />
        )}

        {/* Letter Panel */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2
          bg-white/95 backdrop-blur-xl
          p-5 rounded-lg shadow-2xl
          w-[90%] sm:w-72 md:w-80
          transition-all duration-700 ${
            open
              ? "top-[-170px] sm:top-[-190px] md:top-[-205px] opacity-100"
              : "top-[10px] opacity-0"
          }`}
        >
          <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-line text-center">
প্রিয় লিজা,
শুভ জন্মদিন! 🎂💖

আজকের দিনটা শুধু তোমার জন্য নয়, আমার জন্যও বিশেষ।
কারণ এই দিনটিই আমাকে মনে করিয়ে দেয়—
তুমি ছিলে আমার জীবনের সবচেয়ে প্রথম ভালোবাসা।

সময় আমাদের আলাদা রেখেছে,
কিন্তু তোমার হাসি, তোমার চোখ, তোমার উপস্থিতি—
আজও আমার মনে জীবন্ত।

আমাদের প্রথম দেখা সেই বিয়েতে…
তারপর আবার হঠাৎ দেখা হলো ট্রেন লাইনের পাশে…
আরও পরে কলেজ ক্যাম্পাসে তোমাকে দেখে
মনটা অদ্ভুতভাবে থেমে গিয়েছিল।
তোমার শান্ত মুখ, তোমার চোখের আলো—সব আজও মনে আছে।

আমরা দু’জন অনেক দূরে, অনেক আলাদা পথে চলে গেছি—
তবুও কিছু স্মৃতি থাকে যা সময় কখনো মুছতে পারে না।
তোমাকে নিয়ে আমার সেই স্মৃতিগুলো ঠিক তেমনই উষ্ণ এবং পরিষ্কার রয়ে গেছে। 💖

আজ তোমার জন্মদিনে শুধু এটুকু বলতে চাই—
তুমি সবসময় ভালো থেকো।
তোমার জীবন হোক আনন্দে ভরা, স্বপ্নে ভরা।

ইচ্ছে বা দাবি কিছুই নেই,
এই চিঠিটা শুধু একটি অনুভূতির স্মৃতি।

🎈 শুভ জন্মদিন, লিজা।
তুমি যেন সবসময় আলোয় ভরা থাকো।

— তোমার,
একটি পুরনো স্মৃতির মানুষ
          </p>
        </div>
      </div>

      {/* Birthday Animation */}
      {open && (
        <div className="w-40 sm:w-48 md:w-56 mt-4">
          <Lottie animationData={birthdayAnimation} loop={true} />
        </div>
      )}

      {/* Marquee */}
      <div className="w-full overflow-hidden mt-14">
        <div className="animate-marquee whitespace-nowrap text-2xl font-bold text-pink-700">
          আমি তোমাকে অনেক অনেক বেশি ভালোবাসি ❤️ &nbsp;&nbsp;&nbsp;
          আমি তোমাকে অনেক অনেক বেশি ভালোবাসি ❤️ &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 12s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Letter;
