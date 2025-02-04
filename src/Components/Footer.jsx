import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="col-span-1">
          <div className="h-40 px-4 mb-6">
          <img 
            src="/images/Logo-1.png" 
            alt="MEI Logo" 
            className="h-full w-auto"
          />
        </div>
            <p className="text-gray-300 mb-6">
              Welcome to the Mei International Film Festival, 
              where we celebrate the creativity, diversity, and 
              independence in the art of cinema.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Youtube, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="bg-purple-900 p-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-fuchsia-600 font-semibold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Winners', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h3 className="text-fuchsia-600 font-semibold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy & Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-span-1">
            <h3 className="text-fuchsia-600 font-semibold text-lg mb-4">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-fuchsia-600 mt-1" size={20} />
                <p className="text-gray-300">
                  Nirvikalpa Road Ramakrishna Nagar
                  <br />
                  Mysuru, Karnataka 570023 India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-fuchsia-600" size={20} />
                <a href="mailto:meifilmfestival@gmail.com" className="text-gray-300 hover:text-white">
                  meifilmfestival@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2 pl-8">
                <a href="tel:+917550022429" className="text-gray-300 hover:text-white">
                  +91 7550022429
                </a>
                <a href="tel:+919994930083" className="text-gray-300 hover:text-white">
                  +91 9994930083
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © Mei International Film Festival 2024. All Right Reserved. Design by{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Marvice Media Pvt Ltd
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;