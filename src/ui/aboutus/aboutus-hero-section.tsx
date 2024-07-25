"use client";
import Vector1 from "@/components/vectors/aboutus-vector-1";
import Vector2 from "@/components/vectors/aboutus-vector-2";
import Vector3 from "@/components/vectors/aboutus-vector-3";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const variants = {
  hidden: { opacity: 0, y: 50, x: 0 }, 
  show: { opacity: 1, y: 0, x: 0 }, 
};
const AboutusHero = () => {
  const sectionRef = useRef(null);
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className={
        "min-h-[600px] w-screen flex flex-col align-middle justify-between text-white bg-aboutus-main bg-no-repeat bg-cover bg-opacity-60 overflow-x-hidden relative lg:bg-[center_bottom_-20rem] lg:min-h-[800px] lg:p-14 " +
        poppins700.className
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variants}
        className="mx-8 my-10 space-y-10"
      >
        <h1 className="text-5xl lg:text-9xl">Who Are We?</h1>
        <p
          className={
            "text-lg text-justify lg:text-3xl  " + poppins300.className
          }
        >
          Welcome to the Data Science Club, a hub of creativity and knowledge in
          the world of Data Science! We are a passionate community dedicated to
          exploring and unlocking the extraordinary potential within the field
          of data.
        </p>
      </motion.div>
      <Vector1 />
      <Vector2 />
      <Vector3 />
    </motion.section>
  );
};

export default AboutusHero;
