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
      <div className="bg-gradient-to-br from-purple-950 to-black min-h-screen flex flex-col items-center justify-center text-gold p-4">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide uppercase text-transparent bg-clip-text relative">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-text-gradient">
              MEI INTERNATIONAL FILM FESTIVAL
            </span>
          </h1>
          <p className="text-lg md:text-2xl italic mb-8 text-gray-300">
            In association with Vel Tech Rangarajan Dr. Sagunthala R&D Institute
            of Science and Technology
          </p>
        </header>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <a
            href="https://meifilmfestival.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/mei.png"
              alt="Mei International Film Festival"
              className="w-28 md:w-36 h-28 md:h-36 object-contain rounded-lg"
            />
          </a>
          <img
            src="/images/veltech.png"
            alt="Vel Tech"
            className="w-28 md:w-36 h-28 md:h-36 object-contain rounded-lg"
          />
          <img
            src="/images/ugcnaac.png"
            alt="UG NAAC"
            className="w-28 md:w-36 h-28 md:h-36 object-contain rounded-lg"
          />
          <img
            src="/images/a+.png"
            alt="NAAC A+"
            className="w-28 md:w-36 h-28 md:h-36 object-contain rounded-lg"
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-center py-4 px-1 mb-12 rounded-lg shadow-lg w-full max-w-3xl">
          <p className="text-3xl font-extrabold text-white">
            30 Categories, 30 Awards, Given to 30 Winners!
          </p>
          <p className="text-lg text-gray-200 mt-2">
            Be a part of this prestigious event and showcase your talent.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href="https://registration.meifilmfestival.com/student-registration/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-extrabold py-3 px-6 rounded-lg shadow-lg w-60 text-xl text-center"
          >
            Student Category
            <br />
            Entry Fees
          </a>
          <a
            href="https://registration.meifilmfestival.com/common-category/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-extrabold py-3 px-6 rounded-lg shadow-lg w-60 text-xl text-center"
          >
            Common Category
            <br />
            Entry Fees
          </a>
        </div>

        {/* Arrow Button Section */}
        <div className="mt-8 flex justify-center">
          <a
            href="#rules"
            className="animate-bounce text-yellow-400 text-3xl font-bold"
          >
            ↓ Rules Down ↓
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
