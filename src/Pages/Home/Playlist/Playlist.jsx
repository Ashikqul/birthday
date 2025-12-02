import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const Playlist = () => {
  const songs = [
    { title: "💖 শোনো না রূপসী", url: "dT9haFk4sAc" },
    { title: "❤️ তুমি ছাড়া আমি — লাভ মিক্স", url: "cQfJH9DMdyI" },
    { title: "🍁 ভাবনা আমার শিমুল ডালে", url: "cYJHSAZnGpE" },
    { title: "🌻 নাম রেখেছি বনলতা", url: "GHqfNGFno8" },
    { title: "🎶 গা ছুঁয়ে বলো", url: "SqR6cvvgVrs" },
    { title: "😂 আমার গরুর গাড়িতে বউ সাজিয়ে", url: "Gvy9Jp49eC0" },
    { title: "💘 তুমি আমার নীল প্রজাপতি", url: "Kg8t41o6qQ" },
    { title: "💞 ভালোবাসা ফুরায় না", url: "8Y_76uSTMAU" },
    { title: "🌙 ডুবেছি আমি তোমার চোখে", url: "4MRmXjmJpFQ" },
    { title: "❤️ Humko Sirf Tumse Pyar Hai", url: "3fMlgRVt9dI" },
  ];

  const [current, setCurrent] = useState("");

  const playSong = (id) => {
    if (current === id) {
      setCurrent(""); // Stop
    } else {
      setCurrent(id); // Start
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/silhouette-couple-kissing-front-sunset_984237-42364.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow">
        🎵 I Love You
      </h2>

      <ul className="space-y-3 w-full max-w-lg px-4">
        {songs.map((song, i) => (
          <li
            key={i}
            onClick={() => playSong(song.url)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${current === song.url ? "bg-green-200" : "bg-white/70 hover:bg-white"}`}
          >
            <FaPlayCircle className="text-red-600 text-2xl" />
            <span className="text-lg font-medium">{song.title}</span>
          </li>
        ))}
      </ul>

      {/* Hidden Autoplay Player */}
      {current && (
        <iframe
          src={`https://www.youtube.com/embed/${current}?autoplay=1&playsinline=1`}
          allow="autoplay"
          style={{
            width: 1,
            height: 1,
            opacity: 0,
            position: "absolute",
            left: "-9999px",
          }}
        />
      )}
    </div>
  );
};

export default Playlist;
