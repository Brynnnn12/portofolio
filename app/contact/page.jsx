"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />, 
    title: "Telepon", 
    description: "(+62) 851 5070 4897",
  },
  {
    icon: <FaEnvelope />, 
    title: "Email", 
    description: "bryankurniaakbar12@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />, 
    title: "Alamat", 
    description: "Comal, Pemalang, Jawa Tengah",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Mari Bekerja Sama</h3>
              <p className="text-white/60">
                Silakan isi formulir di bawah ini untuk menghubungi kami dan 
                mendiskusikan proyek yang Anda butuhkan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nama Depan" />
                <Input type="text" placeholder="Nama Belakang" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Nomor Telepon" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih layanan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Layanan</SelectLabel>
                    <SelectItem value="web">Pengembangan Web</SelectItem>
                    <SelectItem value="uiux">UI/UX</SelectItem>
                    <SelectItem value="logo">Desain Logo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Pesan" />
              <Button size="md" className="max-w-40">Kirim Pesan</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:order-none mb-8 xl:mb-0">
            <div className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
