"use client";

import Link from "next/link";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiLaravel,
  SiReact,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "Tentang Saya",
  description: `Saya adalah mahasiswa Sistem Informasi di UBSI Tegal dan memiliki minat besar dalam bidang Cyber Security dan pengembangan backend. Saya fokus mempelajari Laravel (TALL Stack), Express.js (MERN Stack), dan keamanan aplikasi web, termasuk Penetration Testing dan Red Team. Saya senang belajar secara mandiri dan aktif mengembangkan berbagai proyek untuk meningkatkan keterampilan teknis saya.`,

  info: [
    {
      fieldName: "Nama",
      fieldValue: "Brillyan Kurnia Akbar",
    },
    {
      fieldName: "Telepon",
      fieldValue: "(+62) 851 5070 4897",
    },
    {
      fieldName: "Alamat",
      fieldValue: "Pemalang, Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "bryankurniaakbar12@gmail.com",
    },
  ],
};

const experience = {
  icon: "../../public/assets/resume/badge.svg",
  title: "Pengalaman",
  description: `Saya adalah mahasiswa Sistem Informasi di UBSI Tegal yang memiliki minat besar dalam pengembangan web dan keamanan siber. Fokus utama saya saat ini adalah pada pengembangan backend menggunakan Express.js, Laravel, serta eksplorasi teknologi seperti TALL Stack dan MERN Stack. Selain itu, saya juga mendalami bidang Cyber Security, khususnya Web Application Security, Penetration Testing, dan Red Team Operations. Saya aktif mengembangkan berbagai proyek dan terus belajar teknologi terbaru untuk mengasah kemampuan teknis saya.`,
  items: [
    {
      company: "Proyek Sistem Informasi Desa",
      position: "Pengembang Backend (Laravel & Tailwind CSS)",
      duration: "2024",
    },
    {
      company: "Proyek Portofolio Pribadi",
      position: "Pengembang Web (Next.js & Tailwind CSS)",
      duration: "2022",
    },
  ],
};

const education = {
  icon: "../../public/assets/resume/cap.svg",
  title: "Pendidikan Saya",
  description:
    "Riwayat pendidikan saya dari sekolah dasar hingga perguruan tinggi.",

  items: [
    {
      institution: "SDN 03 Purwosari",
      degree: "Sekolah Dasar",
      duration: "2007 - 2015",
    },
    {
      institution: "SMP Islam Comal",
      degree: "Sekolah Menengah Pertama",
      duration: "2016 - 2019",
    },
    {
      institution: "SMK Nusa Mandiri",
      degree: "Sekolah Menengah Kejuruan",
      duration: "2019 - 2022",
    },
    {
      institution: "Universitas Bina Sarana Informatika",
      degree: "Sarjana Sistem Informasi",
      duration: "2022 - sekarang",
    },
  ],
};

const skills = {
  title: "Keahlian Saya",
  description: `Saya sedang belajar pengembangan web dengan fokus pada Next.js, Express.js, dan Laravel. 
  Saya memiliki pemahaman dasar tentang cara kerja framework tersebut dan terus berlatih untuk meningkatkan keterampilan saya dalam pengembangan web.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiReact />,
      title: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next JS",
    },
    {
      icon: <SiExpress />,
      title: "Express JS",
    },
    {
      icon: <SiLaravel />,
      title: "Laravel",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full mb-10">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center ld:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center ld:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" max-w[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
