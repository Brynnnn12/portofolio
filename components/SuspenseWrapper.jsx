"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

const HackerLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#00ff99_1px,transparent_1px)] [background-size:50px_50px]"></div>

      <div className="flex flex-col items-center z-10">
        {/* Simple Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Loading System...
        </motion.div>

        {/* Pulse Loader */}
        <PulseLoader color="#00ff99" size={10} margin={4} />

        {/* Simple Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 font-mono text-xs text-white/60"
        >
          $ sudo load_components
        </motion.div>
      </div>
    </motion.div>
  );
};

const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense fallback={<HackerLoading />}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;