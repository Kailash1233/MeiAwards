import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-black text-white py-16 px-2 md:px10">
      <div className="max-w-7.5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image/Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            {isPlaying ? (
              <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                <div className="relative w-full max-w-4xl">
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="absolute -top-10 right-0 text-white text-xl"
                  >
                    ✕
                  </button>
                  <video
                    src="https://meifilmfestival.com/wp-content/uploads/2024/09/Awards-LOGO-Final.mp4"
                    className="w-full rounded-lg"
                    controls
                    autoPlay
                  />
                </div>
              </div>
            ) : (
              <>
                <video
                  src="https://meifilmfestival.com/wp-content/uploads/2024/09/Awards-LOGO-Final.mp4"
                  alt="MEI Awards"
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-105"
                  autoPlay
                  loop
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button 
                    onClick={handlePlayClick}
                    className="bg-white text-black p-4 rounded-full text-3xl font-bold hover:bg-pink-400 hover:text-white transition-colors"
                  >
                    ▶
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Rest of the component remains the same */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 text-left"
        >
          {/* ... existing text content ... */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 text-left"
        >
          <p className="text-pink-400 uppercase font-semibold tracking-widest mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Pioneering The Future Of Cinema
            </motion.span>
          </h2>
          <p className="text-lg max-w-1xl text-gray-300 py-4">
            Mei International Film Festival continues to explore and promote the
            great directors of tomorrow. With a passion for visionary
            filmmaking, the festival keeps on pushing forward the boundaries of
            cinema. Our mission is to promote the directors of tomorrow. With a
            passion for visionary filmmaking, we celebrate creativity, diversity,
            and independence in the art of cinema.
          </p>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
