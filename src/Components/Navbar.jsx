  import React, { useState } from 'react';
  import { ChevronDown } from 'lucide-react';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
      { name: 'Home', hasDropdown: false },
      { name: 'About Us', hasDropdown: false },
      { 
        name: 'Gallery', 
        hasDropdown: true,
        dropdownItems: [
          'Photo Gallery 2023',
          'Photo Gallery 2022',
          'Video Gallery 2023',
          'Video Gallery 2022',
          'Award Ceremony Highlights'
        ]
      },
      { 
        name: 'Winners', 
        hasDropdown: true,
        dropdownItems: [
          'Winners 2023',
          'Winners 2022',
          'Winners 2021',
          'Hall of Fame'
        ]
      },
      { 
        name: 'Official Selection', 
        hasDropdown: true,
        dropdownItems: [
          'Official Selection 2023',
          'Official Selection 2022',
          'Official Selection 2021'
        ]
      },
      { 
        name: 'Press', 
        hasDropdown: true,
        dropdownItems: [
          'Press Releases'
        ]
      },
      { name: 'Contact Us', hasDropdown: false },
    ];

    const toggleDropdown = (index) => {
      setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
      <nav className="bg-purple-900 px-4 lg:px-8 py-4 lg:py-8 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="h-16 lg:h-28">
            <img 
              src="/images/Logo-1.png" 
              alt="MEI Logo" 
              className="h-full w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <div className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    onClick={() => item.hasDropdown && toggleDropdown(index)}
                    className="w-full text-left text-white hover:text-white/80 flex items-center justify-between lg:justify-start py-2 lg:py-0"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  {item.hasDropdown && (
                    <div className={`
                      ${activeDropdown === index ? 'block lg:hidden' : 'hidden'}
                      lg:group-hover:block lg:absolute left-0 right-0 mt-0 w-full lg:w-48 bg-purple-800 lg:bg-purple-900 rounded-md
                      shadow-lg z-10
                    `}>
                      {item.dropdownItems.map((dropdownItem, dropIndex) => (
                        <a 
                          key={dropIndex} 
                          href="#" 
                          className="block px-2 py-2 text-sm text-white hover:bg-purple-700"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="px-6 py-2 text-white border-2 border-white rounded hover:bg-white hover:text-purple-900 transition-colors duration-300">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;