import Grafic1 from "@/components/vectors/home-grafic-1";
import Vector6 from "@/components/vectors/home-vector-6";
import { Poppins } from "next/font/google";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainHero = () => {
  return (
    <section className="flex flex-col px-5 py-20 align-middle justify-center relative lg:min-h-screen lg:p-10 md:flex-row lg:space-x-[20%]">
      <div className="flex flex-col md:w-[100%] xl:my-auto">
        <motion.h1
          className={
            "text-7xl min-h-max md:text-7xl lg:text-9xl text-303F9A " +
            poppins700.className
          }
          initial={{ rotateX: 0, rotateY: 0, perspective: 1000 }}
          animate={{ rotateX: [0, 15, 0], rotateY: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          style={{ perspective: "1000px" }}
        >
          DATA <br />
          SCIENCE <br />
          CLUB
        </motion.h1>
        <Vector6 />
        <Typing
          className="text-[#7C5295] border-l-4 p-2 mt-10 md:text-lg"
            text={[
              // "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions.",
              
              "Join Data Science Club",
              "Interesting Events",
              "Monthly Class",
              "Be a Member",
              "Be an Activist"
            ]}
            speed={50}
            eraseSpeed={50}
            eraseDelay={3000}
          />
        <motion.button
          className="text-left bg-303F9A w-fit px-7 py-2 rounded-3xl text-white font-medium mt-5 tracking-wide md:text-xl transition-transform duration-100 ease-in-out hover:bg-gradient-to-r hover:from-303F9A hover:to-[#D4A5D4] hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          Read More
        </motion.button>
      </div>
      <Grafic1 />
    </section>
  );
};

export default MainHero;
