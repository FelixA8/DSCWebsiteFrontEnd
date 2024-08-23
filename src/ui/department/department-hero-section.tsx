import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Department, listDepartment } from "../../../lib/departments";
const inter700 = Inter({ weight: "700", subsets: ["latin"] });
const inter500 = Inter({ weight: "500", subsets: ["latin"] });
const inter300 = Inter({ weight: "300", subsets: ["latin"] });

const DepartmentHero: React.FC<{ department: Department }> = ({ department }) => {
    return <>
        <section className="bg-white">
            <div className="flex flex-col md:flex-row md:justify-between max-w-screen-xl px-4 mx-auto py-16">
                <div className="place-self-center">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-start">{department.name}</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center md:text-start">Department of Data Science Club</p>

                </div>
                <div className="mt-0 col-span-5 flex justify-center md:justify-start">
                    <Image width={500} height={500} src={`${department.logo}`} alt="mockup" />
                </div>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                    {department.description}
                </p>
            </div>
            <div className="bg-[#00031E]">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex flex-col items-center">
                    <h3 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">HEAD OF DEPARTMENT</h3>
                    <Image className="py-4" src={`${department.hodImage}`} alt="Marvel" width={250} height={250} />
                    <p className={`mb-6 font-bold lg:mb-8 md:text-lg lg:text-xl ${inter700.className} text-white`} >{department.hodName}</p>
                </div>
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex flex-col items-center">
                    <h3 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">SUB DEPARTMENT</h3>
                    {
                        department.subdivision.map(((subdivision) => {
                            if (subdivision.picName.length > 1) {
                                return <div className="my-4 flex flex-col w-full">
                                    <div className="w-full mr-auto place-self-center lg:col-span-7">
                                        <h1 className="mb-4 text-xl font-bold leading-none md:text-2xl xl:text-3xl text-white">{subdivision.name}</h1>
                                        <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">{subdivision.description}</p>

                                    </div>
                                    <div className="flex flex-col md:flex-row mb-8">
                                        <div className="w-full flex flex-col items-center">
                                            <Image className="py-4" src={`${subdivision.picImage[0]}`} alt="Marvel" width={250} height={250} />
                                            <p className={`font-bold md:text-lg lg:text-xl ${inter700.className} text-white`} >{subdivision.picName[0]}</p>
                                            <p className="font-light text-gray-300 md:text-lg lg:text-xl">PIC of {subdivision.name}</p>
                                        </div>
                                        <div className="w-full flex flex-col items-center">
                                            <Image className="py-4" src={`${subdivision.picImage[1]}`} alt="Marvel" width={250} height={250} />
                                            <p className={`font-bold md:text-lg lg:text-xl ${inter700.className} text-white`} >{subdivision.picName[1]}</p>
                                            <p className="font-light text-gray-300 md:text-lg lg:text-xl">PIC of {subdivision.name}</p>
                                        </div>
                                    </div>
                                    <hr color="white" />
                                </div>
                            }

                            return <div className="my-4 flex flex-col justify-between w-full md:flex-row">
                                <div className="max-w-2xl  mr-auto place-self-center lg:col-span-7">
                                    <h1 className="mb-4 text-xl font-bold leading-none md:text-2xl xl:text-3xl text-white">{subdivision.name}</h1>
                                    <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">{subdivision.description}</p>

                                </div>
                                <div className="w-full flex flex-col md:items-end text-center md:pr-12">
                                    <div className="flex flex-col items-center">
                                        <Image className="py-4" src={`${subdivision.picImage[0]}`} alt="Marvel" width={250} height={250} />
                                        <p className={`font-bold md:text-lg lg:text-xl ${inter700.className} text-white`} >{subdivision.picName[0]}</p>
                                        <p className="font-light text-gray-300 md:text-lg lg:text-xl">PIC of {subdivision.name}</p>
                                    </div>
                                </div>
                            </div>
                        }))
                    }
                </div>
            </div>
        </section>
    </>
}

export default DepartmentHero;