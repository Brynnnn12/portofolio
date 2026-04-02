"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PulseLoader } from "react-spinners";

const StairTransition = () => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "circIn" }}
      >
        {/* Simple Matrix Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00ff99_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="flex flex-col items-center z-10">
          {/* Terminal-style Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 font-mono text-sm text-accent uppercase tracking-wider"
          >
            Accessing Secure System...
          </motion.div>

          {/* Simple Pulse Loader */}
          <PulseLoader color="#00ff99" size={12} margin={6} />

          {/* Simple Progress Bar */}
          <div className="w-48 h-[2px] bg-white/20 mt-6 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent"
            />
          </div>

          {/* Simple Terminal Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono text-xs text-white/60 text-center"
          >
            <p>$ ./breach_security.exe</p>
            <p className="mt-1">[✓] Connection established</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;