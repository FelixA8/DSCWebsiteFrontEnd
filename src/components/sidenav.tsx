"use client"

import { FC } from "react";
import { Poppins } from "next/font/google";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import type User from "../../types/user";
import { usePathname } from "next/navigation";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });

interface Props {
	navlinks: {
		link: string;
		name: string;
	}[];
	user: User | null;
	currPath: String;
}
const SideNav: FC<Props> = ({ navlinks, user, currPath }) => {
	const router = usePathname();
	console.log(router);
	return (
		<>
			<div className="z-50 fixed top-0 -right-full xl:hidden h-screen w-screen bg-[#303F9A] peer-focus:right-0  peer:transition ease-in-out delay-100 duration-300 px-5">
				<div className=" w-full border-b  border-white p-4 flex flex-row align-middle justify-end bg-[#303F9A]">
					<div
						className="rounded-full"
						tabIndex={1}
						onClick={(e) => {
							e.currentTarget.focus();
						}}
					>
						<IoCloseSharp size={45} color="white" />
					</div>
				</div>
				<nav className="h-auto flex flex-col align-middle justify-center">
					{navlinks.map((navobject, index) => {
						return navobject.link == router ? (
							<Link
								href={navobject.link}
								className={`h-min my-auto font-bold text-767676 w-full p-6 flex flex-row align-middle space-x-6`}
								key={index}
								passHref
							>
								<span
									className={`my-auto text-xl text-white ${poppins700.className}`}
								>
									{navobject.name}
								</span>
							</Link>
						) : (
							<Link
								href={navobject.link}
								className={`h-min my-auto font-bold text-767676 w-full p-6 flex flex-row align-middle space-x-6`}
								key={index}
								passHref
							>
								<span
									className={`my-auto text-xl text-white ${poppins300.className}`}
								>
									{navobject.name}
								</span>
							</Link>
						)
					})}
					{/* {user === null && (
						<Link
							href={"/auth/login"}
							className={`h-min my-auto font-bold ${poppins.className} text-767676 w-full p-6 h-16 flex flex-row align-middle last:border-t-2 last:border-[#767676] last:border-opacity-50 space-x-6`}
							passHref
						>
							<Image
								src={`/icons/sign-in.svg`}
								alt={"sign in"}
								width={25}
								height={25}
							/>
							<span className={`my-auto text-xl text-[#767676] `}>Login</span>
						</Link>
					)}
					{user !== null && (
						<Link
							href={"/profile"}
							className={`h-min my-auto font-bold ${poppins.className} text-767676 w-full p-6 h-16 flex flex-row align-middle last:border-t-2 last:border-[#767676] last:border-opacity-50 space-x-6`}
							passHref
						>
							<Image
								src={`https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg`}
								alt={"Profile Picture"}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<span className={`my-auto text-xl text-[#767676] `}>
								{user.name}
							</span>
						</Link>
					)} */}
				</nav>
			</div>
		</>
	);
};
export default SideNav;
