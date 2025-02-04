import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EventSection = () => {
  // Cursor Position State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white flex items-center justify-center px-8">
      {/* Background Image with Cursor Glow Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "/images/veltech.png",
        }}
      >
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 blur-3xl rounded-full pointer-events-none"
          animate={{
            x: cursorPos.x - 250, // Center effect
            y: cursorPos.y - 250,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Text (Down to Up Motion) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-4 ml-3">
          <p className="text-pink-400 font-bold uppercase">Event Type</p>
          <h1 className="text-5xl font-extrabold leading-tight mt-2">
            Integer Pulvinar Accumsan <br/> Tincidunt
          </h1>
          </div>
        </motion.div>

        {/* Right Side Cards (Out-in Motion) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {[
            {
              title: "FILM FESTIVAL",
              text: "Join us for an extraordinary celebration of cinema at the Mei International Film Festival!",
            },
            {
              title: "SCREENWRITING CONTEST",
              text: "Our Screenwriting Contest showcases your talent for crafting compelling narratives.",
            },
            {
              title: "MUSIC CONTEST",
              text: "Submit your best tracks and compete for a chance to win exciting prizes.",
            },
            {
              title: "PHOTOGRAPHY CONTEST",
              text: "Whether you're a professional or an amateur, this is your chance to shine.",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-50 p-4 pt-2 rounded-lg shadow-lg border border-gray-700 max-w-[250px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            >
              <h3 className="text-pink-400 font-bold text-sm">
                {event.title}
              </h3>
              <p className="text-gray-300 mt-2 text-xs">
                {event.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EventSection;

