import React, { useState, useEffect } from 'react';

const WinnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);

  const winners = [
    {
      id: 1,
      title: "Born Again",
      year: "2024",
      image: "/images/born.jpg"
    },
    {
      id: 2,
      title: "Kadavul",
      year: "2024",
      image: "/images/win2.jpg"
    },
    {
      id: 3,
      title: "Jamaa",
      year: "2024",
      image: "/images/win3.jpg"
    },
    {
      id: 4,
      title: "Vaazhai",
      year: "2024",
      image: "/images/win4.jpg"
    }
  ];

  useEffect(() => {
    // Animate header
    setIsVisible(true);
    
    // Animate cards one by one
    winners.forEach((_, index) => {
      setTimeout(() => {
        setCardsVisible(prev => [...prev, index]);
      }, index * 200); // 200ms delay between each card
    });
  }, []);

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-fuchsia-600 font-semibold mb-2">LATEST WINNERS</h3>
          <h2 className="text-4xl font-bold text-white mb-12">
            July 2024 -Sep 2024
          </h2>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {winners.map((winner, index) => (
            <div 
              key={winner.id}
              className={`transform transition-all duration-700 ${
                cardsVisible.includes(index) 
                  ? 'scale-100 opacity-100 rotate-0' 
                  : 'scale-50 opacity-0 rotate-12'
              }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  {/* Winner Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-1 px-3 rounded">
                    WINNER
                  </div>
                  
                  {/* Main Image */}
                  <img 
                    src={winner.image} 
                    alt={winner.title}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-fuchsia-600 text-xl font-semibold mb-1">
                    {winner.title}
                  </h3>
                  <p className="text-gray-400">
                    {winner.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-black hover:text-fuchsia-600 border-2 border-transparent hover:border-fuchsia-600">
            SEE MORE WINNERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnersSection;