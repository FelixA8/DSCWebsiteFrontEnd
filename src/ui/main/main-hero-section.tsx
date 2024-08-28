import Grafic1 from "@/components/vectors/home-grafic-1";
import Vector6 from "@/components/vectors/home-vector-6";
import { Poppins } from "next/font/google";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";
import { ImageSlider } from "@/components/image-slider";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const MainHero = () => {
  return (
    <section className="flex flex-col py-20 overflow-x-hidden justify-center lg:min-h-screen lg:flex-row lg:space-x-[20%] g:bg-[center_bottom_-20rem] lg:p-14 mx-0 lg:mx-12">
      <div className="flex flex-col md:w-[100%] justify-center text-center lg:text-start items-center lg:items-start mb-8 lg:mb-0">
        <motion.h1
          className={
            "text-7xl lg:text-8xl text-303F9A " +
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
        <div className="hidden lg:block">
        <Vector6 />
        </div>
        <Typing
          className={"text-xl lg:border-l-4 p-2 mt-10 md:text-lg" + poppins500.className}
          text={[
            // "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions.",

            "Build your Future with Data Science",
            "Interesting Events",
            "Learn Data Science",
            "Create Podcasts",
            "Be part of us!"
          ]}
          speed={50}
          eraseSpeed={50}
          eraseDelay={3000}
        />
        <a
          href="#footer"
          className="text-left bg-303F9A w-fit px-7 py-2 rounded-3xl text-white font-medium mt-5 md:text-xl hover:bg-white hover:text-[#303F9A] hover:border transition "
        >
          Reach us
        </a>
      </div>
      
      <ImageSlider />
    </section>
  );
};

export default MainHero;
