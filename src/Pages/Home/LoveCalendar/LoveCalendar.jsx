import React, { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const LoveCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const showLove = currentMonth === 11; // December

  useEffect(() => {
    if (showLove) {
      toast.success("❤️ Special Month Started – December Memories ❤️", {
        duration: 3000,
      });
    }
  }, [currentMonth]);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const ref1 = useRef(null);
  const ref3 = useRef(null);
  const [heartOffset, setHeartOffset] = useState({ x: 0, y: 0 });

  // Calculate offset for heart animation
  useEffect(() => {
    if (showLove && ref1.current && ref3.current) {
      const rect1 = ref1.current.getBoundingClientRect();
      const rect3 = ref3.current.getBoundingClientRect();

      setHeartOffset({
        x: rect1.left - rect3.left,
        y: rect1.top - rect3.top,
      });
    }
  }, [currentMonth, currentYear]);

  const goNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const goPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.etsystatic.com/57421994/r/il/ae1ca6/7210401398/il_fullxfull.7210401398_1qr7.jpg')",
      }}
    >
      <Toaster />

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black z-10 relative text-center">
        {monthNames[currentMonth]} {currentYear}
      </h1>

      <div className="flex gap-2 sm:gap-4 mb-6 z-10 relative">
        <button
          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white text-pink-600 rounded font-semibold hover:bg-yellow-200 transition"
          onClick={goPrev}
        >
          Prev
        </button>
        <button
          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white text-pink-600 rounded font-semibold hover:bg-yellow-200 transition"
          onClick={goNext}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-4 p-2 sm:p-4 bg-white/30 border rounded shadow-lg z-10 relative w-full max-w-2xl">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              ref={day === 1 ? ref1 : day === 3 ? ref3 : null}
              className="relative w-full sm:w-20 h-20 sm:h-24 flex justify-center items-center border rounded bg-white/70"
            >
              <span className="text-sm sm:text-lg font-semibold z-20">
                {day}
              </span>

              {/* Heart on day 1 */}
              {showLove && day === 1 && (
                <div className="absolute inset-0 flex justify-center items-center z-20">
                  <FaHeart size={20} className="text-red-500" />
                </div>
              )}

              {/* Heart animation to day 3 */}
              {showLove && day === 3 && heartOffset.x !== 0 && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                  animate={{
                    x: [0, heartOffset.x, 0],
                    y: [0, heartOffset.y, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                  }}
                >
                  <FaHeart size={20} className="text-red-500" />
                </motion.div>
              )}

              {/* Heart on day 3 */}
              {showLove && day === 3 && (
                <div className="absolute inset-0 flex justify-center items-center z-20">
                  <FaHeart size={20} className="text-red-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoveCalendar;
