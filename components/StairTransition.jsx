"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HashLoader } from "react-spinners";

const StairTransition = () => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/50 backdrop-blur-xl pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <HashLoader color="#36d7b7" size={60} />
          </motion.div>

          <motion.div
            className="w-16 h-4 bg-black/30 rounded-full mt-4"
            initial={{ scaleX: 1, opacity: 0.5 }}
            animate={{ scaleX: [1, 0.6, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
