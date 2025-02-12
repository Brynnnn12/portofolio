import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  const phone = "(+62) 851 5070 4897";
  const message = "Hi, I'm Bryan Kurnia Akbar";
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Bryan <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-6">
          <Navbar />
          <Link href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}>
            <Button className="ml-auto">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
