import React from "react";
import { Helmet } from "react-helmet";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Mei Awards - Coming Soon</title>
        <meta
          name="description"
          content="Mei Awards - Celebrating visionary filmmakers and independent cinema. Stay tuned for the grand event."
        />
        <meta
          name="keywords"
          content="Mei Awards, Cinema, Independent Films, Film Festival"
        />
      </Helmet>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-b from-black to-purple-950">
        <div className="p-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-400 mb-4">
            Mei Awards - Coming Soon
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Get ready to celebrate visionary filmmaking and groundbreaking
            cinema.
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
