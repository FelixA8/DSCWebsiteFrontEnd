"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { listDepartment } from "../../../lib/departments";

const inter700 = Inter({ weight: "700", subsets: ["latin"] });
const inter500 = Inter({ weight: "500", subsets: ["latin"] });
const inter300 = Inter({ weight: "300", subsets: ["latin"] });

const variant1 = {
  hidden: { opacity: 0, y: 0, x: -50 },
  show: { opacity: 1, y: 0, x: 0 },
};

const variant2 = {
  hidden: { opacity: 0, y: 0, x: 50 },
  show: { opacity: 1, y: 0, x: 0 },
};

const variant3 = {
  hidden: { opacity: 0, y: 50, x: 0 },
  show: { opacity: 1, y: 0, x: 0 },
};

const AboutusDepartment = () => {
  const sectionRef = useRef(null);
  const sliceFirstThreeDepartment = listDepartment.slice(0, 3)
  const sliceLastTwoDepartment = listDepartment.slice(-2)
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={variant1}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className={`bg-[#00031E] min-h-screen w-screen flex flex-col align-middle p-10 space-y-6 lg:p-14 ${inter500.className}`}
    >
      <motion.h1
        initial="hidden"
        whileInView="show"
        variants={variant3}
        className={`text-3xl font-semibold bg-gradient-to-r text-white bg-clip-text text-center lg:text-5xl ${inter700.className}`}
      >
        DEPARTMENTS
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant2}
        className="flex-col flex justify-center items-center text-center text-white p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <div className="grid grid-cols-3 justify-center gap-8">

          {
            sliceFirstThreeDepartment.map((department) => <Link href={`/aboutus/${department.slug}`}>
              <Image
                alt="Computer"
                src={`${department.logo}`}
                width={300}
                height={300}
                className="hidden lg:block bg-white hover:-translate-y-3 transition-all hover:cursor-pointer hover:shadow-white border rounded-md"
              />
            </Link>)
          }
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 justify-center gap-8">
            {
              sliceLastTwoDepartment.map((department) => <Link href={`/aboutus/${department.slug}`}>
                <Image
                  alt="Computer"
                  src={`${department.logo}`}
                  width={300}
                  height={300}
                  className="hidden lg:block bg-white hover:-translate-y-3 transition-all hover:cursor-pointer hover:shadow-white border rounded-md"
                />
              </Link>)
            }
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutusDepartment;