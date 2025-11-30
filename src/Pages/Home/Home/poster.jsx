import React from 'react';
import Lottie from 'lottie-react';
// import loveAnimation from '../../../assets/Love.json';
import birthdayAnimation from '../../../assets/Stream of Hearts.json';
// import heartsAnimation from '../../../assets/Emoji 30 - Lovely Kiss.json';

const Poster = () => {
  return (
      <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-pink-200 via-pink-400 to-pink-600 space-y-6 p-4 bg-cover  bg-no-repeat"
      style={{
        backgroundImage:
         
          "url('https://img.freepik.com/premium-photo/couple-kissing-beach-sunset_984237-43374.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
     
    >
      
      {/* Centered Love Animation
      <div className="w-72 sm:w-96 md:w-[500px] ">
        <Lottie animationData={loveAnimation} loop={true} />
      </div> */}

      {/* Right-aligned Stream of Hearts Animation */}
      <div className="w-72 sm:w-96 md:w-[500px] -ml-2">
        <Lottie animationData={birthdayAnimation} loop={true} />
      </div>

      {/* Centered Hearts Animation
      <div className="w-72 sm:w-96 md:w-[500px] mx-auto">
        <Lottie animationData={heartsAnimation} loop={true} />
      </div> */}

    </div>
  );
};

export default Poster;
