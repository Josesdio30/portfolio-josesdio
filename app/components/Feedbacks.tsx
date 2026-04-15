"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
	index: number;
	testimonial: string;
	name: string;
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.2, 0.75)}
		className="glass-morphism p-8 rounded-[24px] xs:w-[320px] w-full flex flex-col justify-between group hover:border-accent/40 transition-all shadow-glass"
	>
		<div>
			<p className="text-accent font-black text-[60px] leading-none opacity-20">&quot;</p>
			<p className="text-white tracking-wide text-[16px] leading-[26px] mt-2 font-medium italic">
				{testimonial}
			</p>
		</div>

		<div className="mt-8 flex justify-between items-center gap-4 pt-6 border-t border-white/5">
			<div className="flex-1">
				<p className="text-white font-bold text-[16px] tracking-tight">
					<span className="emerald-text-gradient">@</span>{name}
				</p>
			</div>
			<Link href={link} target="_blank" className="transform group-hover:scale-110 transition-transform">
				<div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-accent overflow-hidden shadow-lg">
					<Image
						src={image}
						width={40}
						height={40}
						alt={`social-${name}`}
						className="w-6 h-6 object-contain brightness-125"
					/>
				</div>
			</Link>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 glass-morphism rounded-[32px] overflow-hidden border border-white/5">
			<div className="padding bg-white/3 outline-none min-h-[300px] flex flex-col justify-center">
				<motion.div variants={textVariant()}>
					<p className="sectionSubText">Digital Footprint</p>
					<h2 className="sectionHeadText">Connect & Explore.</h2>
				</motion.div>
			</div>
			<div className="paddingX -mt-20 pb-14 flex flex-wrap gap-8 justify-center lg:justify-start">
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "social");
