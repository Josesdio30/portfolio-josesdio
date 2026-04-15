"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`paddingX
			w-full flex items-center py-6 fixed top-0 z-50 transition-all duration-300 ${
				scrolled ? "glass-morphism py-4" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<div
					className="flex items-center gap-2 cursor-pointer group"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform">
						D
					</div>
					<p className="text-white text-[20px] font-bold cursor-pointer flex tracking-tight">
						DIOO &nbsp; <span className="sm:block hidden text-secondary font-light">| PORTFOLIO</span>
					</p>
				</div>

				<ul className="list-none hidden sm:flex flex-row gap-10 items-center">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-accent" : "text-secondary"
							} hover:text-white text-[16px] font-semibold cursor-pointer transition-colors uppercase tracking-widest`}
							onClick={() => setActive(nav.title)}
						>
							<Link href={`#${nav.id}`}>{nav.title}</Link>
						</li>
					))}
					<li className="ml-4">
						<ResumeButton />
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-8 glass-morphism absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl flex-col gap-6 scale-up-center`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-medium cursor-pointer text-[18px] uppercase tracking-wider ${
										active === nav.title ? "text-accent" : "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<Link href={`#${nav.id}`}>{nav.title}</Link>
								</li>
							))}
						</ul>
						<div className="w-full h-[1px] bg-white/10" />
						<ResumeButton />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

