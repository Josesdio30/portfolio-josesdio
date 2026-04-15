"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		// Placeholder for actual email service integration
		setTimeout(() => {
			setLoading(false);
			alert("Thank you for your message! I will get back to you soon.");
			setForm({ name: "", email: "", message: "" });
		}, 1500);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] glass-morphism p-10 rounded-[32px] shadow-glass"
			>
				<p className="sectionSubText">Get in Touch</p>
				<h3 className="sectionHeadText">Contact.</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-6"
				>
					<label className="flex flex-col">
						<span className="text-white font-semibold mb-3 ml-1">Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Your name"
							className="bg-white/5 py-4 px-6 placeholder:text-secondary/50 text-white rounded-2xl outline-none border border-white/10 focus:border-accent/50 transition-all font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-semibold mb-3 ml-1">Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Your email address"
							className="bg-white/5 py-4 px-6 placeholder:text-secondary/50 text-white rounded-2xl outline-none border border-white/10 focus:border-accent/50 transition-all font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-semibold mb-3 ml-1">Message</span>
						<textarea
							rows={5}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="How can I help you?"
							className="bg-white/5 py-4 px-6 placeholder:text-secondary/50 text-white rounded-2xl outline-none border border-white/10 focus:border-accent/50 transition-all font-medium resize-none"
						/>
					</label>
					<button
						type="submit"
						className="bg-accent py-4 px-12 outline-none w-fit text-primary font-extrabold shadow-lg shadow-accent/20 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 mt-4"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);

};

export default SectionWrapper(Contact, "contact");
