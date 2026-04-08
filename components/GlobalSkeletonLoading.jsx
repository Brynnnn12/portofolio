"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlobalSkeletonLoading = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show skeleton for at least 5 seconds during initial load
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to complete before hiding
      setTimeout(() => {
        setShowSkeleton(false);
      }, 800); // 800ms for smooth fade out animation
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSkeleton && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isFading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="h-full mb-10">
            <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-24">
                <div className="text-center xl:text-left order-2 xl:order-none">
                  <Skeleton className="h-6 w-48 mb-6" />
                  <Skeleton className="h-12 w-64 mb-6" />
                  <Skeleton className="h-20 w-full max-w-[500px] mb-8" />
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Skeleton className="h-12 w-40" />
                    <div className="flex gap-6">
                      <Skeleton className="w-9 h-9 rounded-full" />
                      <Skeleton className="w-9 h-9 rounded-full" />
                      <Skeleton className="w-9 h-9 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="order-1 pt-12 xl:pt-0 xl:order-none mb-8 xl:mb-0">
                  <Skeleton className="w-80 h-80 rounded-full" />
                </div>
              </div>
              <div className="flex justify-center gap-8">
                <Skeleton className="h-20 w-32" />
                <Skeleton className="h-20 w-32" />
                <Skeleton className="h-20 w-32" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalSkeletonLoading;