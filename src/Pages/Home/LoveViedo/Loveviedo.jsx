import React from "react";
import loveVideo from "../../../assets/New folder/viedo.mp4.mp4";
import love from "../../../assets/New folder/love.mp4.mp4";

const Lovevideo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-10 px-4">
      {/* ভিডিও ১ */}
      <div className="w-full sm:w-11/12 md:w-1/2 flex justify-center">
        <video
          src={loveVideo}
          controls
          autoPlay={false}
          className="rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl hover:scale-105 transition-transform duration-300"
          playsInline
        />
      </div>

      {/* ভিডিও ২ */}
      <div className="w-full sm:w-11/12 md:w-1/2 flex justify-center">
        <video
          src={love}
          controls
          autoPlay={false}
          className="rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl hover:scale-105 transition-transform duration-300"
          playsInline
        />
      </div>
    </div>
  );
};

export default Lovevideo;
