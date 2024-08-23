import Grafic1 from "@/components/vectors/home-grafic-1";
import Vector6 from "@/components/vectors/home-vector-6";
import { Poppins } from "next/font/google";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });


const MainAboutus = () => {
  return (
    <section className="flex flex-col px-5 py-10 align-middle justify-center mx-12">
      <div className="flex flex-col">
        <h1 className={`${poppins500.className} text-5xl mb-4`}>What is Data Science Club?</h1>
        <p className={`text-xl ${poppins300.className}`}>
          DATA SCIENCE CLUB is an organization founded in 2023 that prioritizes collaboration, self-development, and an unbounded passion for learning. The goal of the DATA SCIENCE CLUB is to serve as a platform for students to learn and hone their soft skills in organizational contexts and to increase students' desire to delve deeper into the fields of Data Science and AI.
        </p>
      </div>
    </section>
  );
};

export default MainAboutus;
