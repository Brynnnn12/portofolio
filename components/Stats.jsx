"use client";
import Countup from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 110, text: "GitHub Repositories" },
  { num: 4, text: "Vulnerabilities Discovered" },
  { num: 10, text: "OWASP Top 10 Covered" },
  { num: 500, text: "Learning Hours" },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-12 xl:pb-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.5, ease: "easeInOut" },
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                key={index}
              >
                <Countup
                  end={item.num}
                  duration={5}
                  delay={1.5}
                  className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-accent mb-2"
                />
                <p className="text-sm md:text-base text-white/80 leading-tight">
                  {item.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
