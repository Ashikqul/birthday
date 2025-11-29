import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const Playlist = () => {
  const songs = [
    { title: "💖 শোনো না রূপসী", url: "https://www.youtube.com/shorts/dT9haFk4sAc" },
    { title: "❤️ তুমি ছাড়া আমি — লাভ মিক্স", url: "https://www.youtube.com/shorts/cQfJH9DMdyI" },
    { title: "🍁 ভাবনা আমার শিমুল ডালে", url: "https://www.youtube.com/shorts/cYJHSAZnGpE" },
    { title: "🌻 নাম রেখেছি বনলতা", url: "https://www.youtube.com/shorts/-GHqfNGFno8" },
    { title: "🎶 গা ছুঁয়ে বলো", url: "https://www.youtube.com/shorts/SqR6cvvgVrs" },
    { title: "😂 আমার গরুর গাড়িতে বউ সাজিয়ে", url: "https://www.youtube.com/shorts/Gvy9Jp49eC0" },
    { title: "💘  তুমি আমার অনেক শখের খুঁজে পাওয়া এক প্রজাপতি নীল ", url: "https://www.youtube.com/shorts/_Kg8t41o6qQ" },
    { title: "💞 ভালোবাসা ফুরায় না", url: "https://www.youtube.com/shorts/8Y_76uSTMAU" },
    { title: "🌙 ডুবেছি আমি তোমার চোখে", url: "https://www.youtube.com/shorts/4MRmXjmJpFQ" },
    { title: "❤️ Humko Sirf Tumse Pyar Hai", url: "https://www.youtube.com/shorts/3fMlgRVt9dI" },
  ];

  const [currentSong, setCurrentSong] = useState("");

  const convertToEmbed = (url) => {
    if (url.includes("shorts")) {
      const id = url.split("shorts/")[1];
      return `https://www.youtube.com/embed/${id}?autoplay=1&controls=0&modestbranding=1`;
    }
    return url;
  };

  const handleSongClick = (url) => {
    const embed = convertToEmbed(url);

    // যদি একই গান আবার ক্লিক করা হয় → বন্ধ হবে
    if (currentSong === embed) {
      setCurrentSong("");
    } else {
      setCurrentSong(embed);
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

    <ul className="space-y-3">
      {songs.map((song, index) => (
        <li
          key={index}
          className="flex items-center gap-3 bg-white/70 hover:bg-white p-3 rounded-lg cursor-pointer"
          onClick={() => handleSongClick(song.url)}
        >
          <FaPlayCircle className="text-red-600 text-2xl" />
          <span className="text-lg font-medium">{song.title}</span>
        </li>
      ))}
    </ul>

    {/* Hidden audio player */}
    {currentSong && (
      <iframe
        src={currentSong}
        style={{
          width: "1px",
          height: "1px",
          opacity: 0,
          position: "absolute",
          left: "-9999px",
        }}
        allow="autoplay"
      />
    )}
  </div>
);
};

export default Playlist;
