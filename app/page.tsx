import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans overflow-x-hidden">
			{/* Dynamic Background Glows */}
			<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
			</div>

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
				<Navbar />
				<Hero />
			</div>
			
			<div className="relative z-10">
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0 pb-20">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</div>

	);
}
