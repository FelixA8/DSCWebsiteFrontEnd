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

const AboutusLogoInformation = () => {
    const sectionRef = useRef(null);
    return <motion.section
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
            <h1 className={`text-3xl lg:text-5xl ${inter700.className} text-303F9A mb-10`}>LOGO</h1>
            <Image src={"/logo-meaning.svg"} alt="logo" height={400} width={900} />
        </motion.div>
    </motion.section>
}

export default AboutusLogoInformation;