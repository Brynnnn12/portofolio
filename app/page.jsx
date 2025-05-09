import Photo from "@/components/Photo";
import Socials from "@/components/Socials";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full mb-10">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Mahasiswa</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Bryan</span>
            </h1>
            <p className="text-white/80 max-w-[500px] mb-8">
              Saya seorang mahasiswa yang sedang menempuh pendidikan di jurusan
              Sistem Informasi UBSI Tegal.
            </p>

            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="https://drive.google.com/file/d/1VClLDM6Zot0l8KXz7FSg9e2uDNZEYp21/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2  text-white rounded-md hover:bg-accent/90 transition"
                >
                  Download CV
                </a>

                <FiDownload className="text-xl" />
              </Button>
              <div className=" mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="order-1 pt-12 xl:pt-0 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
