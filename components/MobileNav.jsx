"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Hobbies", path: "/hobbies" },
  { name: "Work", path: "/work" },
  { name: "Resume", path: "/resume" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <CiMenuFries className="text-2xl text-accent" />
        </motion.div>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 mb-8 text-center"
        >
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
            onClick={() => setOpen(false)}
          >
            Bryan<span className="text-accent">.</span>
          </Link>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 flex items-center rounded-lg transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-accent/10 text-accent font-medium"
                    : "hover:bg-gray-700 dark:hover:bg-gray-800"
                }`}
              >
                <span className="relative">
                  {link.name}
                  {pathname === link.path && (
                    <motion.span
                      layoutId="mobileNavActive"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Footer/Extra Space */}
        <div className="flex-1"></div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
