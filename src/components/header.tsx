'use client';

import { FC, useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navlinks = [
    { link: "/", name: "Home" },
    { link: "/events", name: "Events" },
    // { link: "/classes", name: "Classes" },
    // { link: "/articles", name: "Articles" },
    { link: "/aboutus", name: "About Us" },
    { link: "/contact", name: "Contact Us" },
  ];

  return (
    <header className={`fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="flex flex-row justify-start mx-12 py-3 items-center">
        <Image
          src={"/main-logo.png"}
          alt="Main-Logo"
          width={100}
          height={100}
          className="my-auto h-10 w-10"
        />
        <nav className="flex-row align-middle hidden xl:flex h-full">
          {navlinks.map((navobject, index) => {
            const isActive = path === navobject.link;
            return (
              <Link
                key={index}
                href={navobject.link}
                onClick={() => setActiveLink(navobject.link)}
                className={`ml-5 my-auto flex flex-col items-center justify-center ${isActive ? 'text-[#3E4D9E] font-bold' : 'text-[#767676]'}`}
              >
                <motion.span
                  initial={{ color: '#767676', scale: 0.7 }}
                  animate={{ color: isActive ? '#3E4D9E' : '#767676', fontWeight: isActive ? 'bold' : 'normal' }}
                  whileHover={{ scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className={`${poppins.className} text-center text-xl`}
                >
                  {navobject.name}
                </motion.span>
              </Link>
            );
          })}

          {/* <Link
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
        </Link> */}
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
      </div>
    </header>
  );
};

export default HeaderComponent;
