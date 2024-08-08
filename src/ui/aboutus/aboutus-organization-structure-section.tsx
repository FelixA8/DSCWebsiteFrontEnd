"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const inter700 = Inter({ weight: "700", subsets: ["latin"] });
const inter500 = Inter({ weight: "500", subsets: ["latin"] });
const inter300 = Inter({ weight: "300", subsets: ["latin"] });
const variants = {
    hidden: { opacity: 0, y: 50, x: 0 },
    show: { opacity: 1, y: 0, x: 0 },
};
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

const AboutusOrganizationStructure = () => {
    const sectionRef = useRef(null);
    return <motion.section
        ref={sectionRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.3, duration: 1 }}
        className={
            "bg-[#00031E] w-screen flex flex-col align-middle justify-between text-white bg-no-repeat" +
            inter700.className
        }
    >
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={variants}
            className="mx-16 mt-10"
        >
            <motion.h1
                initial="hidden"
                whileInView="show"
                variants={variant3}
                className={`text-3xl font-semibold bg-gradient-to-r text-white bg-clip-text text-center lg:text-5xl ${inter700.className}`}
            >
                ORGANIZATION STRUCTURE 2024/2025
            </motion.h1>
            <Image src={"/organization-structure.png"} width={1600} height={900} alt="structure"/>
        </motion.div>
    </motion.section>
}

export default AboutusOrganizationStructure;