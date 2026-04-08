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
      className="min-h-[80vh] flex flex-col justify-center mb-6 px-10 py-12 xl:py-8 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Array(5).fill().map((_, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="w-16 h-16 rounded-full" />
              </div>
              <Skeleton className="h-12 w-64" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-1 w-full" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}