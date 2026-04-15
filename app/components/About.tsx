"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<Tilt
			options={{ max: 25, scale: 1.05, speed: 450 }}
			className="xs:w-[280px] w-full"
		>
			<motion.div
				variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
				className="w-full glass-morphism p-[1px] rounded-[24px] shadow-glass group overflow-hidden"
			>
				<div className="bg-primary/40 rounded-[24px] py-10 px-8 min-h-[300px] flex justify-center items-center flex-col relative overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
					<div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:border-accent/40 transition-all">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-10 h-10 object-contain brightness-125"
						/>
					</div>
					<h3 className="text-white text-[22px] font-bold text-center tracking-tight px-4 leading-[28px]">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="sectionHeadText">The Vision.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-6 text-secondary text-[18px] max-w-4xl leading-[32px] font-medium"
			>
				I architect digital landscapes where performance meets aesthetics. With deep expertise in 
				<span className="text-accent"> Next.js, TypeScript, and Three.js</span>, I specialize in 
				building premium web experiences that don&apos;t just function—they inspire. 
				My approach blends data-driven engineering with high-fidelity design, 
				ensuring every pixel serves a purpose and every interaction feels intuitive.
			</motion.p>
			
			<div className="mt-20 flex flex-wrap gap-12 justify-center lg:justify-start">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};


export default SectionWrapper(About, "about");
