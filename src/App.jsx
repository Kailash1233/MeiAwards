import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Mei International Film Festival - Awards</title>
        <meta
          name="description"
          content="Mei International Film Festival, Film Festival, Cinema, Independent Films, Visionary Filmmakers, Diversity in Cinema, Creativity in Cinema, Directors of Tomorrow"
        />
        <meta name="keywords" content="Home" />
      </Helmet>
        {/* Background Wrapper */}
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://meifilmfestival.com//wp-content//uploads//2024//07//MEI-AWARD-LOGO-4k.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 text-center p-4 sm:p-6 md:p-12 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 leading-tight">
              Celebrating <br />
              Visionary <br />
              Filmmaking
            </h1>
            <p className="text-white text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
              Welcome to the Mei International Film Festival, where we celebrate the
              creativity, diversity, and independence in the art of cinema.
            </p>
            <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300">
              FILMFREEWAY
            </button>
          
            {/* Laurel Images Section */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 px-4">
              <img src="/images/Mei International film Awards_files/Laurel-Design-1.png" alt="Official Selection" className="h-8 sm:h-10 md:h-12" />
              <img src="/images/Mei International film Awards_files/Laurel-Design-1.png" alt="Quarter-Finalist" className="h-8 sm:h-10 md:h-12" />
              <img src="/images/Mei International film Awards_files/Laurel-Design-1.png" alt="Semi-Finalist" className="h-8 sm:h-10 md:h-12" />
              <img src="/images/Mei International film Awards_files/Laurel-Design-1.png" alt="Finalist" className="h-8 sm:h-10 md:h-12" />
              <img src="/images/Mei International film Awards_files/Laurel-Design-1.png" alt="Winner" className="h-8 sm:h-10 md:h-12" />
            </div>
          </div>
        </div>
    </>
  );
};

export default App;
