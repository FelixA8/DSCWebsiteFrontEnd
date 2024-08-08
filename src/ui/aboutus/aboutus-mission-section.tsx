"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const variants = {
  hidden: { opacity: 0, y: 0, x: -50 }, // Start below the view
  show: { opacity: 1, y: 0, x: 0 }, // End at its original position
};
const AboutusMission = () => {
  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className={
        "bg-[#fbfbfb] w-screen flex flex-col align-middle p-10 space-y-6 md:space-y-0 md:flex-row-reverse md:p-24 md:h-screen md:space-x-reverse md:space-x-24"
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variants}
        className="md:w-full md:flex md:flex-col md:align-middle md:justify-center"
      >
        <Image
          src={"/backgrounds/vision-bg.png"}
          alt="Vision Background"
          width={1000}
          height={1000}
          className="mx-auto my-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variants}
        className="flex flex-col align-middle justify-center md:space-y-9"
      >
        <br />
        <br />
        <h2
          className={"text-4xl md:text-5xl lg:text-8xl " + poppins700.className}
        >
          Our Mission
        </h2>
        <p
          className={
            poppins500.className +
            " font-bold text-justify text-sm md:text-xl lg:text-2xl"
          }
        >
          <span style={{ color: "#303F9A" }}>Deep Education:</span> Provide a
          high-level learning platform and advanced training in various aspects
          of Data Science, from data processing to predictive model creation.
          <br />
          <br />
          <span style={{ color: "#303F9A" }}>
            Inspiring Collaboration:
          </span>{" "}
          Encourage collaboration among members to generate innovative solutions
          through the exchange of ideas, collaborative projects, and in-depth
          discussions.
          <br />
          <br />
          <span style={{ color: "#303F9A" }}>Knowledge Sharing:</span>{" "}
          Disseminate knowledge and expertise in the field of Data Science
          through seminars, workshops, and online publications, enabling each
          member to continually grow.
          <br />
          <br />
          <span style={{ color: "#303F9A" }}>
            Practical Skill Development:
          </span>{" "}
          Offer hands-on experience through real-world projects, allowing
          members to sharpen their skills and achieve success in the field.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutusMission;
