"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Tambahkan ini
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Hobbies", path: "/hobbies" },
  { name: "Work", path: "/work" },
  { name: "Resume", path: "/resume" },

];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Tombol Menu */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Konten Navigasi */}
      <SheetContent side="right" className="flex flex-col items-center">
        {/* Tambahkan DialogTitle untuk aksesibilitas */}
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

        {/* Logo */}
        <div className="mt-16 mb-4 text-2xl text-center">
          <Link href="/" className="text-4xl font-semibold">
            Bryan <span className="text-accent">.</span>
          </Link>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex flex-col gap-4 text-lg">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`px-6 py-2 flex items-center group transition-all duration-300 ${
                pathname === link.path ? "text-accent border-b-2 border-accent" : "hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
            
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
