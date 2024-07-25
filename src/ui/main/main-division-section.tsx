import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainDivision = () => {
  return (
    <section
      className={
        "bg-[#EBF2FF] rounded-3xl flex-col align-middle justify-center text-center p-8 space-y-8 md:p-20 " +
        poppins500.className
      }
    >
      <h1 className="text-[#2A6FA6] font-bold text-5xl">Our Divisions</h1>
      <div className="flex flex-col align-middle justify-center w-full space-y-5 md:grid md:grid-cols-2 md:space-y-0  md:gap-5 lg:gap-10">
        <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
          {/* <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Education & Development Logo"
                src={"/icons/edu.svg"}
                width={70}
                height={70}
                className="my-auto mx-auto w-32 h-32"
              />
            </div> */}
          <div className="flex flex-col align-middle text-left space-y-3 my-auto">
            <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
              Education & Development
            </h3>
            <p className="text-sm text-[#07819C] text-justify md:text-lg md">
              The Education & Development Department at Data Science Club is
              dedicated to fostering continuous learning and skill enhancement
              within the field of Data Science. Our primary focus is on
              providing comprehensive educational resources, training programs,
              and practical experiences to empower our members in their journey
              of professional and intellectual growth.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
          {/* <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Human Capital Logo"
                src={"/icons/hc.svg"}
                width={100}
                height={100}
                className="my-auto mx-auto"
              />
            </div> */}
          <div className="flex flex-col align-middle text-left space-y-3 my-auto">
            <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
              Human Capital
            </h3>
            <p className="text-sm text-[#07819C] text-justify md:text-lg md">
              The Human Capital (HC) Department is like the powerhouse of an
              organization. Its main job is to handle people stuff – like
              helping them grow, managing them well, and making sure everyone is
              working together to reach the company's goals. It's kind of like a
              behind-the-scenes maestro, making sure everything runs smoothly
              and people are utilized in the best way possible.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
          {/* <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Creative Department Logo"
                src={"/icons/creative.svg"}
                width={80}
                height={80}
                className="my-auto mx-auto"
              />
            </div> */}
          <div className="flex flex-col align-middle text-left space-y-3 my-auto">
            <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
              Creative
            </h3>
            <p className="text-sm text-[#07819C] text-justify md:text-lg md">
              The Creative Department, a symphony of creativity collaborative
              workspace, where we combine our talents to transform ideas into a
              masterpiece with a hint of brilliance. Our main works are to
              create aesthetic visual designs and interesting videos. Together,
              we turn concepts into captivating visuals and harmony for Data
              Science Club
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
          {/* <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Media Department Logo"
                src={"/icons/media.svg"}
                width={100}
                height={100}
                className="my-auto mx-auto"
              />
            </div> */}
          <div className="flex flex-col align-middle text-left space-y-3 my-auto">
            <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
              Media
            </h3>
            <p className="text-sm text-[#07819C] text-justify md:text-lg md">
              The Media Department is the department responsible for managing
              social media accounts and creating content that will be uploaded
              on social media for the public to read, as well as promoting the
              Data Science Club organization.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
          {/* <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Public Relations"
                src={"/icons/pr.svg"}
                width={100}
                height={100}
                className="my-auto mx-auto"
              />
            </div> */}
          <div className="flex flex-col align-middle text-left space-y-3 my-auto">
            <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
              Public Relations
            </h3>
            <p className="text-sm text-[#07819C] text-justify md:text-lg md">
              Public Relations is a department that focuses on building and
              maintaining relations with external parties. Through this
              department, activist will be involved in various Z such as
              marketing, funding, and partnerships which will enhance their
              organizational skills and soft skills, especially in
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDivision;
