import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  const socialsTags = [
    {
      name: "Github",
      href: "https://github.com/r-tom90/",
      icon: <FaGithub />,
    },
    {
      name: "Email",
      href: "mailto:richardtom1203@protonmail.com",
      icon: <MdEmail />,
    },
    {
      name: "XTwitter",
      href: "https://x.com/CryptoFallen",
      icon: <FaXTwitter />,
    },
    {
      name: "Medium",
      href: "https://medium.com/@richardtom_79153",
      icon: <FaMedium />,
    },
  ];
  return (
    <div
      id="Footer"
      className="w-full h-auto bg-[black]/50 backdrop-blur-md  text-gray-200 shadow-lg shadow-[black]/90 p-[15px] 630:p-0"
    >
      <div className=" w-full 1000:w-[1000px] h-auto 630:h-[100px] flex flex-col items-center  justify-center m-auto">
        <div className="flex flex-col 420:flex-row mb-[20px] text-[15px] text-center space-x-0 420:space-x-4">
          <p>
            &copy; {new Date().getFullYear()} Richard Tom. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4">
            {socialsTags.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                target="blank"
                className="text-white hover:text-stone-300 hover:ease-in duration-300"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
