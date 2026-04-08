"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <Skeleton className="h-12 w-64 mb-6" />
          <Skeleton className="h-16 w-full max-w-[600px] mb-8" />
          <Skeleton className="w-16 h-16 rounded-full" />
        </div>
      </div>
    </motion.section>
  );
}