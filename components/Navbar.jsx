'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "hobbies",
    path: "/hobbies",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // }
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8"> {/* Ganti Navbar dengan nav */}
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all duration-500`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      );
      
  
}

export default Navbar