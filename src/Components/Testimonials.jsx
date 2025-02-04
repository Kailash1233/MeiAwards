import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 space-y-10 md:space-y-0 md:space-x-10">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-black p-6 rounded-xl shadow-lg max-w-md text-center md:text-left"
      >
        <h2 className="text-pink-500 text-sm font-bold mb-2">TESTIMONIALS</h2>
        <h1 className="text-3xl font-extrabold leading-tight flex flex-col space-y-2 my-6">
          <span>WHAT</span>
          <span>OUR</span>
          <span>CLIENT</span>
          <span>SAY</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg text-center md:text-left"
      >
        <p className="text-white">
          "What a marvellous festival. From start to finish, this festival was
          run impeccably. Then to top it all, 'Too Young For Love' won! What an
          absolute thrill and I would encourage all producers to enter this
          festival. Excellent!"
        </p>

        {/* Client Info */}
        <div className="flex flex-col items-center md:flex-row md:items-center mt-6">
          <img
            src="/images/client.webp"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="mt-3 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-pink-500 font-bold">Chrystal Rose</h4>
            <p className="text-gray-400 text-sm">Designer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

