import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const MissionSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
        <div 
        className="relative overflow-hidden min-h-screen text-white flex items-center justify-center px-8"
        style={{
          backgroundImage: "url('/images/veltech.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative h-full w-full">
          {/* Logo Section */}
          <div 
            className={`absolute left-20 top-1/4 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <h1 className="text-5xl font-bold text-orange-600 mb-2">MEI</h1>
            <div className="text-2xl text-orange-400 font-light">
              <div>INTERNATIONAL</div>
              <div>FILM FESTIVAL</div>
            </div>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
  
          {/* Mission Statement Section */}
          <div 
            className={`absolute right-20 top-1/3 max-w-md text-right transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <h2 className="text-fuchsia-600 font-semibold mb-4">WHY CHOOSE US</h2>
            <h3 className="text-4xl font-bold text-[#2C3E50] leading-tight mb-6">
              Our Mission Is
              <br />
              To Promote The
              <br />
              Directors Of
              <br />
              Tomorrow
            </h3>
            <button 
              className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-black hover:text-fuchsia-600"
            >
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    );
  };

export default MissionSection;
