"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

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
      variants={variant1}
      transition={{ staggerChildren: 0.3, duration: 1 }}
      className={`bg-[#ebf2ff] min-h-screen w-screen flex flex-col align-middle p-10 space-y-6 lg:p-24 ${poppins500.className}`}
    >
      <motion.h1
        initial="hidden"
        whileInView="show"
        variants={variant3}
        className={`text-4xl font-semibold bg-gradient-to-r from-[#2A6FA6] to-[#7088C6] bg-clip-text text-transparent text-center mb-7 lg:text-9xl ${poppins700.className}`}
      >
        Our Divisions
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant2}
        className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <h2 className="text-3xl lg:text-start lg:text-5xl">
          Education & Development
        </h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Computer"
            src={"/icons/edu.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <div className="text-xl lg:text-3xl lg:text-justify">
            The Education & Development Department at Data Science Club is
            dedicated to fostering continuous learning and skill enhancement
            within the field of Data Science. Our primary focus is on providing
            comprehensive educational resources, training programs, and
            practical experiences to empower our members in their journey of
            professional and intellectual growth.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant1}
        className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <h2 className="text-3xl lg:text-start lg:text-5xl">Human Capital</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="People"
            src={"/icons/hc.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <div className="text-xl lg:text-3xl lg:text-justify">
            The Human Capital (HC) Department is like the powerhouse of an
            organization. Its main job is to handle people stuff – like helping
            them grow, managing them well, and making sure everyone is working
            together to reach the company's goals. It's kind of like a
            behind-the-scenes maestro, making sure everything runs smoothly and
            people are utilized in the best way possible.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant2}
        className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <h2 className="text-3xl lg:text-start lg:text-5xl">Creative</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Art"
            src={"/icons/creative.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <div className="text-xl lg:text-3xl lg:text-justify">
            The Creative Department, a symphony of creativity collaborative
            workspace, where we combine our talents to transform ideas into a
            masterpiece with a hint of brilliance. Our main works are to create
            aesthetic visual designs and interesting videos. Together, we turn
            concepts into captivating visuals and harmony for Data Science Club.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant1}
        className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <h2 className="text-3xl lg:text-start lg:text-5xl">Media</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Camera"
            src={"/icons/media.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <div className="text-xl lg:text-3xl lg:text-justify">
            The Media Department is the department responsible for managing
            social media accounts and creating content that will be uploaded on
            social media for the public to read, as well as promoting the Data
            Science Club organization.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={variant2}
        className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start"
      >
        <h2 className="text-3xl lg:text-start lg:text-5xl">Public Relation</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Camera"
            src={"/icons/pr.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <div className="text-xl lg:text-3xl lg:text-justify">
            Public Relations is a department that focuses on building and
            maintaining relations with external parties. Through this
            department, activists will be involved in various activities such as
            marketing, funding, and partnerships which will enhance their
            organizational skills and soft skills, especially in communication.
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutusDepartment;