import React from "react";
import { Helmet } from "react-helmet";

const Rules = () => {
  return (
    <>
      <Helmet>
        <title>Mei International Film Festival - Rules and Regulations</title>
        <meta
          name="description"
          content="Mei International Film Festival rules and regulations for participation, including eligibility, submission guidelines, and film requirements."
        />
        <meta name="keywords" content="Film Festival, Rules, Guidelines" />
      </Helmet>
      <div className="bg-gradient-to-br from-purple-950 to-black min-h-screen flex flex-col items-center justify-center text-gold p-4">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide uppercase text-transparent bg-clip-text relative">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-text-gradient">
              RULES & REGULATIONS
            </span>
          </h1>
          <p className="text-lg md:text-2xl italic mb-8 text-gray-300">
            Participation Guidelines for Mei International Film Festival
          </p>
        </header>

        {/* Rules Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-center py-4 px-6 mb-12 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Rules for Registration
          </h2>
          <ul className="list-disc list-inside text-left text-gray-100 text-lg md:text-xl">
            <li>Participants can be of any age.</li>
            <li>Multiple entries are allowed per participant.</li>
            <li>
              Entries can include documentaries, short films, animations,
              experimental art forms, or album songs.
            </li>
            <li>Films must be original.</li>
            <li>
              The duration of the short film must range from{" "}
              <strong>1 minute to 25 minutes</strong>.
            </li>
            <li>
              The submitted films must be of the{" "}
              <strong>highest possible quality</strong>.
            </li>
          </ul>
        </div>

        {/* Enquiry Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-center py-4 px-6 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            For Enquiries
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Office phone number
          </p>
          <p className="text-xl md:text-2xl font-bold text-white">
            +91 755 002 2429
            <br />
            +91 999 493 0083
          </p>
        </div>
      </div>
    </>
  );
};

export default Rules;
