import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Use react-intersection-observer

const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const useNumberCounter = (
  target: number,
  duration: number,
  trigger: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return; // Only run if in view

    let start = 0;
    const end = target;
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let timer: NodeJS.Timeout;

    const updateCount = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        timer = setTimeout(updateCount, stepTime);
      }
    };

    updateCount();

    return () => clearTimeout(timer);
  }, [target, duration, trigger]);

  return count;
};

const NumFact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const count95k = useNumberCounter(95, 2000, inView); // Count in increments of 5000
  const count60Percent = useNumberCounter(60, 2000, inView); // Standard count for 60%
  const count2_7M = useNumberCounter(27, 2000, inView); // Count in increments of 100000

  return (
    <section
      className={`p-14 space-y-10 flex flex-col align-middle justify-center lg:flex-row lg:pr-0 lg:space-x-3 ${poppins500.className}`}
    >
      <h2 className="text-4xl font-semibold text-303F9A text-center lg:text-left lg:h-fit lg:my-auto lg:text-5xl">
        Our numbers tell <br /> more about data science
      </h2>
      <div className="bg-[#F9ECEC] rounded-3xl w-full p-10 lg:rounded-r-none">
        <div className="divide-y-4 text-303F9A border-303FA flex flex-col lg:flex-row lg:divide-y-0 lg:divide-x-4">
          <motion.div
            ref={ref}
            className="text-center space-y-2 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-7xl font-semibold lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              ${count95k.toLocaleString()}K
            </motion.h2>
            <p className="text-2xl font-normal lg:text-left lg:text-xl">
              The median starting salary for a data scientist remains high.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            className="text-center space-y-2 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-7xl font-semibold lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {count60Percent}%
            </motion.h2>
            <p className="text-2xl font-normal lg:text-left lg:text-xl">
              of companies around the world use data and analytics to drive
              process and cost-efficiency (MicroStrategy, 2020).
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            className="text-center space-y-2 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-7xl font-semibold lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {count2_7M.toLocaleString()}M
            </motion.h2>
            <p className="text-2xl font-normal lg:text-left lg:text-xl">
              open jobs in data analysis, data science and related careers in
              2020 (source: IBM).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NumFact;
