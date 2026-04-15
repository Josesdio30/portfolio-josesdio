"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-accent" />
					<div className="w-1 sm:h-80 h-40 emerald-gradient opacity-50" />
				</div>
				<div>
					<h1 className="heroHeadText">
						Elevating <span className="emerald-text-gradient">Digital</span> Experiences
					</h1>
					<p className="heroSubText mt-4 max-w-2xl">
						Full-stack architect & creative designer crafting immersive, 
						high-performance web solutions with modern technology.
					</p>
					<button className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
						Explore My Work
					</button>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[30px] h-[55px] rounded-3xl border-2 border-secondary/30 flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 18, 0] }}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
								ease: "easeInOut"
							}}
							className="w-2 h-2 rounded-full bg-secondary"
						/>
					</div>
				</a>
			</div>

		</section>
	);
};

export default Hero;
