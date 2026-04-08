"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="min-h-[70vh] w-full mb-10">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-16 w-full max-w-[600px]" />
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                {Array(4).fill().map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}