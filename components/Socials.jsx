import Link from "next/link";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/brynnnn12" },
  { icon: <FaFacebookF />, path: "https://www.facebook.com/Bryan Akbar" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/brynnnn12" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
