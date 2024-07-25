import Grafic1 from "@/components/vectors/home-grafic-1";
import Vector6 from "@/components/vectors/home-vector-6";
import { Poppins } from "next/font/google";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainHero = () => {
  return (
    <section className="flex flex-col px-5 py-10 align-middle justify-center relative lg:min-h-[70vh] lg:p-10 md:flex-row lg:space-x-[20%]">
      <div className="flex flex-col md:w-[100%] xl:my-auto">
        <p className="text-[#7C5295] p-2 md:text-3xl text-center">
          Data science is the domain of study that deals with vast volumes of
          data using modern tools and techniques to find unseen patterns, derive
          meaningful information, and make business decisions.
        </p>
      </div>
    </section>
  );
};

export default MainHero;
