'use client';

import { FC, useState } from "react";
import Image from "next/image";
import SideNav from "./sidenav";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const HeaderComponent: FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const path = usePathname();

  const navlinks = [
    { link: "/", name: "Home" },
    { link: "/events", name: "Events" },
    { link: "/classes", name: "Classes" },
    { link: "/articles", name: "Articles" },
    { link: "/aboutus", name: "About Us" },
    { link: "/contact", name: "Contact Us" },
  ];

  return (
    <header className="flex flex-row p-2 px-8 justify-between">
      <div
        id="logo-section"
        className="flex flex-row align-middle justify-center space-x-3"
      >
        <Image
          src={"/main-logo.png"}
          alt="Main-Logo"
          width={50}
          height={50}
          className="my-auto"
        />
        <span className="font-bold text-303F9A">
          DATA
          <br />
          SCIENCE
          <br />
          CLUB
        </span>
      </div>
      <nav className="flex-row align-middle space-x-4 hidden xl:flex">
        {navlinks.map((navobject, index) => {
          const isActive = path === navobject.link;
          return (
            <Link
              key={index}
              href={navobject.link}
              onClick={() => setActiveLink(navobject.link)}
              className={`w-36 h-3/5 my-auto flex flex-col items-center align-middle justify-center ${isActive ? 'text-[#3E4D9E] font-bold' : 'text-[#767676]'}`}
            >
              <motion.span
                initial={{ color: '#767676', scale: 1 }}
                animate={{ color: isActive ? '#3E4D9E' : '#767676', fontWeight: isActive ? 'bold' : 'normal' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`${poppins.className} text-center text-xl`}
              >
                {navobject.name}
              </motion.span>
            </Link>
          );
        })}

        <Link
          href={"/auth/login"}
          className={`w-36 h-3/5 my-auto flex flex-col align-middle justify-center ${path === "/auth/login" ? "bg-303F9A rounded-xl" : ""}`}
        >
          <motion.span
            initial={{ color: '#767676', scale: 1 }}
            animate={{ color: path === "/auth/login" ? '#FFFFFF' : '#767676', fontWeight: path === "/auth/login" ? 'bold' : 'normal' }}
            whileHover={{ scale: 1.1 }}  // Only scale on hover, no color change
            transition={{ duration: 0.3 }}
            className={`${poppins.className} text-center text-xl ${path === "/auth/login" ? '' : 'text-[#767676]'}`}
          >
            Login
          </motion.span>
        </Link>
        <Link
          href={"/profile"}
          className="flex flex-row my-auto w-36 h-3/5 space-x-2 hover:cursor-pointer"
        >
          <Image
            src={"https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg"}
            width={40}
            height={40}
            alt="Profile Pic"
            className="rounded-full my-auto"
          />
          <span className="w-full text-center flex break-words align-middle my-auto">
            Felix
          </span>
        </Link>
      </nav>
      <div
        className="xl:hidden peer transition flex flex-col justify-center align-middle text-center"
        tabIndex={1}
      >
        <Image
          src={"/icons/nav-button.svg"}
          alt="Navigation Button"
          width={30}
          height={30}
          className="mx-auto"
        />
      </div>
      <SideNav navlinks={navlinks} user={null} />
    </header>
  );
};

export default HeaderComponent;
