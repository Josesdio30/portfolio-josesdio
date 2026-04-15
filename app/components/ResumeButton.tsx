import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="/resume/Resume.pdf"
			target="_blank"
			download
		>
			<button
				type="button"
				className="font-bold text-center px-6 py-3 flex gap-2 justify-center items-center rounded-full transition-all duration-300 bg-white/5 hover:bg-accent text-white hover:text-primary border border-white/10 hover:border-accent shadow-lg hover:shadow-accent/40 group"
			>
				<Image
					src="/resume.svg"
					width={20}
					height={20}
					alt="resume"
					className="object-contain brightness-0 invert group-hover:invert-0 transition-all"
				/>
				<span className="text-sm uppercase tracking-widest">Resume</span>
			</button>
		</Link>

	);
};

export default ResumeButton;
