"use client";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[42px] font-bold leading-none text-white mb-6">
            My Projects
          </h2>
          <p className="text-white/60 mb-8 max-w-[600px]">
            Check out all my projects on GitHub. They are well-documented and complete there.
          </p>
          <Link href="https://github.com/Brynnnn12" className="flex items-center gap-2">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="">Visit My GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
