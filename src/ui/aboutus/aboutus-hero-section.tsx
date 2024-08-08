"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useRef } from "react";
const inter700 = Inter({ weight: "700", subsets: ["latin"] });
const inter500 = Inter({ weight: "500", subsets: ["latin"] });
const inter300 = Inter({ weight: "300", subsets: ["latin"] });
const variants = {
  hidden: { opacity: 0, y: 50, x: 0 },
  show: { opacity: 1, y: 0, x: 0 },
};
const AboutusHero = () => {
  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className={
        "w-screen flex flex-col align-middle justify-between text-white bg-no-repeat bg-cover bg-opacity-60 overflow-x-hidden relative lg:bg-[center_bottom_-20rem] lg:p-14 " +
        inter700.className
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variants}
        className="mx-16 mt-10"
      >
        <h1 className={`text-3xl lg:text-5xl ${inter700.className} text-303F9A mb-10`}>BACKGROUND</h1>
        <p className={`text-sm lg:text-xl ${inter500.className} text-black mb-5`}><span className={inter700.className}>DATA SCIENCE CLUB</span> is an organization founded in 2023 that prioritizes collaboration, self-development, and an unbounded passion for learning. The goal of the DATA SCIENCE CLUB is to serve as a platform for students to learn and hone their soft skills in organizational contexts and to increase students' desire to delve deeper into the fields of Data Science and AI.</p>
      </motion.div>
    </motion.section>
  );
};

export default AboutusHero;
