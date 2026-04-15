"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
			<Tilt
				options={{
					max: 15,
					scale: 1,
					speed: 450,
				}}
				className="glass-morphism p-5 rounded-3xl sm:w-[360px] w-full h-full flex flex-col group shadow-glass"
			>
				<div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
					/>

					<div className="absolute inset-0 flex justify-end m-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{source_code_link && (
							<Link
								href={source_code_link}
								target="_blank"
								className="bg-primary/80 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-all transform hover:scale-110 border border-white/10"
							>
								<Image
									src="/tech/github.webp"
									width={24}
									height={24}
									alt="source-code"
									className="object-contain"
								/>
							</Link>
						)}
						<Link
							href={deploy_link}
							target="_blank"
							className="bg-accent/80 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-all transform hover:scale-110 border border-white/10"
						>
							<Image
								src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/tech/figma.webp"}
								width={24}
								height={24}
								alt="deploy"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-6 flex-1">
					<h3 className="text-white font-bold text-[24px] tracking-tight">{name}</h3>
					<p className="mt-3 text-secondary text-[15px] leading-[24px] font-medium">{description}</p>
				</div>

				<div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
					{tags.map((tag) => (
						<span
							key={`${name}-${tag.name}`}
							className={`text-[12px] font-semibold px-3 py-1 rounded-full glass-morphism border border-white/10 text-accent-light`}
						>
							#{tag.name}
						</span>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Case Studies</p>
				<h2 className="sectionHeadText">Signature Works.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-6 text-secondary text-[18px] max-w-4xl leading-[32px] font-medium"
				>
					A curated selection of my most impactful projects. Each piece reflects a commitment 
					to code quality, user-centric design, and scalable architecture. 
					From complex dashboard systems to immersive 3D landing pages, 
					these examples demonstrate my ability to translate vision into digital reality.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center xl:justify-start">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");

