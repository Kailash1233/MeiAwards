import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Anbalagan P",
    role: "CEO",
    image: "/images/Team1.jpg",
  },
  {
    name: "Jayaseelan S",
    role: "Festival Producer",
    image: "/images/Team2.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-pink-500 text-sm font-bold mb-2"
      >
        <h1>
          OUR TEAM
        </h1>
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-3xl font-extrabold leading-tight text-center"
      >
        Meet With Our <br /> Professional Team
      </motion.h1>

      {/* Responsive Card Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-sm mx-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-full h-[26rem] object-cover"
            />
            <h4 className="text-pink-500 font-bold mt-6 text-2xl text-center">
              {member.name}
            </h4>
            <p className="text-gray-400 text-lg mt-3 text-center">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
