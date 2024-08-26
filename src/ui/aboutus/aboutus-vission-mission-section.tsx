"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
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

const AboutusVisionMission = () => {
    const sectionRef = useRef(null);
    return <motion.section
        ref={sectionRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.3, duration: 1 }}
        className={
            "w-screen flex flex-col align-middle justify-between text-white bg-no-repeat bg-cover bg-opacity-60 overflow-x-hidden relative lg:bg-[center_bottom_-20rem] lg:px-10 lg:py-14 mb-10" +
            inter700.className
        }
    >
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={variants}
            className="mx-16"
        >
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <div className="w-full bg-white p-4 border rounded-lg shadow">
                        <h1 className={`text-3xl lg:text-5xl ${inter700.className} text-303F9A mb-10 text-center`}>VISION</h1>
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>The vision of the Data Science Club is to become one of the largest organizations at Bina Nusantara University through innovation and achievement.</p>
                    </div>
                </div>
                <div className="w-px bg-gray-400 mx-4"></div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="w-full bg-white p-4 border rounded-lg shadow">
                        <h1 className={`text-3xl lg:text-5xl ${inter700.className} text-303F9A mb-10 text-center`}>MISSION</h1>
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>1. Provide a platform that facilitates learning and exchanging ideas for its members.</p>
                        <br />
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>2. Organize activities aimed at improving members' data science skills, such as workshops, seminars, and collaborative projects.</p>
                        <br />
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>3. Offer opportunities for members to expand their networks and develop their skills through various activities.</p>
                        <br />
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>4. Provide assistance to organizations in need of help managing and analyzing their data.</p>
                        <br />
                        <p className={`text-md lg:text-xl ${inter300.className} text-black`}>5. Educate the general public about data science so that they can understand its importance and how it can benefit society.</p>
                    </div>
                </div>
            </div>

        </motion.div>
    </motion.section>
}

export default AboutusVisionMission;