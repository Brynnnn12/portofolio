"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaFootballBall, FaBookOpen, FaGamepad } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const Hobbies = () => {
  const hobbies = [
    {
      num: "01",
      title: "Fotografi",
      description:
        "Menangkap momen indah dengan lensa kamera dan menciptakan kenangan abadi.",
      icon: (
        <SiAdobephotoshop className="text-4xl text-black group-hover:text-black transition-all" />
      ),
    },
    {
      num: "02",
      title: "Sepak Bola",
      description:
        "Menikmati permainan yang penuh strategi dan kebersamaan di lapangan hijau.",
      icon: (
        <FaFootballBall className="text-4xl text-black group-hover:text-black transition-all" />
      ),
    },
    {
      num: "03",
      title: "Membaca Buku Sejarah",
      description:
        "Menambah wawasan dengan memahami perjalanan sejarah dunia dan peradaban manusia.",
      icon: (
        <FaBookOpen className="text-4xl text-black group-hover:text-black transition-all" />
      ),
    },
    {
      num: "04",
      title: "Bermain Game",
      description:
        "Menikmati dunia virtual dan mengasah kemampuan strategi serta reflex melalui berbagai genre game.",
      icon: (
        <FaGamepad className="text-4xl text-black group-hover:text-black transition-all" />
      ),
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center mb-6 px-10 py-12 xl:py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {hobbies.map((hobby) => (
            <div
              key={hobby.num}
              className="flex flex-col gap-6 group transition-all duration-500"
            >
              <div className="flex justify-between items-center">
                <div className="text-5xl font-extrabold text-white group-hover:text-accent transition-all">
                  {hobby.num}
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-white  group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                  {hobby.icon}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {hobby.title}
              </h2>
              <p className="text-gray-400">{hobby.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
