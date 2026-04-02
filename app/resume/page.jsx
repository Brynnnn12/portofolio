"use client";

import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiKalilinux,
  SiBurpsuite,
  SiWireshark,
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
  title: "About Me",
  description: `I am a fresh graduate from Diploma 3 in Information Systems and currently pursuing my Bachelor's degree at UBSI Tegal. I have a strong interest in Cyber Security, especially penetration testing, and backend development. I focus on learning Laravel (TALL Stack), Express.js (MERN Stack), and web application security, including Penetration Testing and Red Team activities. I enjoy self-learning and actively developing various projects to improve my technical skills.`,

  info: [
    {
      fieldName: "Name",
      fieldValue: "Brillyan Kurnia Akbar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 851 5070 4897",
    },
    {
      fieldName: "Address",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "bryankurniaakbar12@gmail.com",
    },
  ],
};

const education = {
  icon: "../../public/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My educational background from elementary school to university.",

  items: [
    {
      institution: "Universitas Bina Sarana Informatika",
      degree: "Diploma 3 in Information Systems",
      duration: "2022 - 2025",
    },
    {
      institution: "Universitas Bina Sarana Informatika",
      degree: "Bachelor of Information Systems",
      duration: "2022 - present",
    },
  ],
};

const skills = {
  title: "Technologies I'm Learning",
  description: `I am currently focusing on backend development using Express.js to build RESTful APIs, as well as building frontend interfaces using React and Next.js. In addition to web development, I have a special interest in Cyber Security, especially web application security, penetration testing, and vulnerability exploration. I continue to develop my skills through various projects and exploration of modern security tools.`,
  skillList: [
    { icon: <FaHtml5 />, title: "HTML" },
    { icon: <FaCss3 />, title: "CSS" },
    { icon: <FaJs />, title: "JavaScript" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { icon: <SiReact />, title: "React JS" },
    { icon: <SiNextdotjs />, title: "Next JS" },
    { icon: <SiExpress />, title: "Express JS" },
    { icon: <SiLaravel />, title: "Laravel" },
    { icon: <SiMysql />, title: "MySQL" },
    { icon: <SiGithub />, title: "Git & GitHub" },
    { icon: <SiKalilinux />, title: "Kali Linux" },
    { icon: <SiBurpsuite />, title: "Burp Suite" },
    { icon: <SiWireshark />, title: "Wireshark" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full mb-10">
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
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
