"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const Projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Portofolio",
    description:
      "Ini adalah website portofolio saya yang dibangun dengan Next.js dan Tailwind CSS. Website ini menampilkan keterampilan, proyek, dan pengalaman saya.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/image.png",
    live: "",
    github: "https://github.com/bryankurniaakbar/portfolio",
  },
  {
    num: "02",
    category: "Pengembangan Web",
    title: "Sistem Informasi Desa",
    description:
    "Ini adalah proyek PKL yang dikembangkan di Balai Desa Purwosari. Sistem ini dirancang untuk membantu administrasi desa dalam pengelolaan data warga, surat-menyurat, dan layanan desa secara digital.",
    stack: [
      {
        name: "Laravel",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "MySQL",
      },
      {
        name: "AlpineJs",
      }
    ],
    image: "/assets/work/image2.png",
    live: "https://desa-psi.vercel.app/",
    github: "https://github.com/Brynnnn12/desapurwosari",
  },
  {
    num: "03",
    category: "Pengembangan Web",
    title: "Blog",
    description:
      "Ini adalah blog yang dibangun dengan Next.js dan Tailwind CSS dan MongoDB. Blog ini menampilkan keterampilan, proyek, dan pengalaman saya.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "MongoDB",
      }
    ],
    image: "/assets/work/image3.png",
    live: "",
    github: "https://github.com/Brynnnn12/next-blog-app",
  },
  {
    num: "04",
    category: "Pengembangan Web",
    title: "Todo App",
    description:
      "Ini adalah aplikasi to-do yang dibangun dengan NextJs dan Tailwind CSS dan MongoDB. Aplikasi ini memungkinkan Anda untuk menambahkan, mengedit, dan menghapus tugas.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "MongoDB",
      },
    
    ],
    image: "/assets/work/image4.png",
    live: "https://todo-next-app-blue.vercel.app/",
    github: "https://github.com/Brynnnn12/todo-next-app",
  },
  {
    num: "05",
    category: "Pengembangan Web",
    title: "Course Online",
    description:
      "Ini adalah aplikasi course online yang dibangun dengan laravel dan alpinejs dan tailwind css. Aplikasi ini memungkinkan Anda untuk menambahkan, mengedit, dan menghapus course.",
    stack: [
      {
        name: "laravel",
      },
      {
        name: "AlpineJs",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Mysql",
      },
    ],
    image: "/assets/work/image5.png",
    live: "",
    github: "https://github.com/Brynnnn12/course-online",
  }

];



const Work = () => {
  const [project, setProject] = useState(Projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(Projects[currentIndex]);
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none   ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <span className="">{project.category}</span>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}

                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4 ">
                <Link href={project.live} className="flex items-center gap-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} className="flex items-center gap-2">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnSyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center h-[44px] rounded-full items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
