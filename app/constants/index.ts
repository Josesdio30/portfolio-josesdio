export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Architect",
		icon: "/web.webp",
	},
	{
		title: "Full Stack Engineer",
		icon: "/mobile.webp",
	},
	{
		title: "Workflow Automation",
		icon: "/backend.webp",
	},
	{
		title: "UI/UX Strategist",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "Next.js 16",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "React 19",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "Laravel",
		icon: "/tech/wordpress.webp", // Using placeholder icon for Laravel
	},
	{
		name: "Node.js",
		icon: "/tech/javascript.webp",
	},
	{
		name: "MongoDB",
		icon: "/tech/figma.webp", // Using placeholder icon
	},
];

const experiences = [
	{
		title: "Quality Assurance Analyst",
		company_name: "Infotech Digital Nusantara",
		icon: "/company/wtw.jpg", // Using placeholder icon
		iconBg: "#020617",
		date: "Jan 2026 - Present",
		points: [
			"Performing comprehensive End-to-End (E2E) testing and quality assurance for enterprise-grade platforms.",
			"Executing rigorous testing on 'Waicast' to ensure the stability of official WABA features.",
			"Validating the Human Core Management System (HCMS) to maintain high performance and reliability.",
			"Improving overall system quality by identifying edge cases and streamlining the bug reporting process."
		],
	},
	{
		title: "Frontend Developer",
		company_name: "PT Permata Azzuri Sehat",
		icon: "/company/sparkbright.webp",
		iconBg: "#020617",
		date: "Mar 2026 - Present",
		points: [
			"Lead developer for the RME (Electronic Medical Record) system using Next.js.",
			"Architected a secure and efficient healthcare platform to streamline patient data management.",
			"Implemented advanced medical record workflows ensuring data integrity and fast access.",
			"Focused on delivering a high-performance, responsive UI for clinical environments."
		],
	},
	{
		title: "Junior Frontend Developer",
		company_name: "PT Admin Pintar Kita",
		icon: "/company/avm.webp",
		iconBg: "#020617",
		date: "Feb 2025 - Mar 2026",
		points: [
			"Lead Frontend Developer for the Unified Dashboard at platform.mimin.io, utilizing Next.js, Tailwind CSS, and Shadcn UI.",
			"Architected complex state management using Zustand and handled real-time communication via Socket.io WebSockets.",
			"Developed high-impact features including Gen AI & Campaign Dashboards, and an Omnichannel hub (WA, WABA, IG, Messenger).",
			"Configured sophisticated AI interfaces for Voice AI and Gen AI Chatbots.",
			"Seamlessly integrated Order Management Systems (OMS) and Reservation Management Systems (RMS) into a single unified portal."
		],
	},
	{
		title: "Software Engineer Intern",
		company_name: "PT Admin Pintar Kita",
		icon: "/company/avm.webp",
		iconBg: "#020617",
		date: "Feb 2024 - Feb 2025",
		points: [
			"Focused on backend-driven frontend development using Laravel Blade for core business systems.",
			"Developed features for Order Management Systems (OMS) and Reservation Management Systems (RMS).",
			"Worked extensively with official WhatsApp Business API (WABA) and WhatsApp Business (WAB) integrations.",
			"Designed and deployed a responsive company profile for therapyum.id using Webflow."
		],
	},
];



const testimonials = [
	{
		id: 1,
		testimonial: "Expert in workflow automation and modern web architectures.",
		name: "Mimin Team",
		image: "/tech/github.webp",
		link: "https://github.com/josesdio",
	},
	{
		id: 2,
		testimonial: "Delivered a high-performance CMS platform beyond expectations.",
		name: "IDPlay Stakeholders",
		image: "/tech/github.webp",
		link: "https://github.com/josesdio",
	},
];

const projects: {
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
}[] = [
		{
			name: "Unified Dashboard Mimin.io",
			description:
				"A centralized enterprise ecosystem featuring low-code workflow builders, Voice AI, and Gen AI integrations. Serving as the core hub for automation at platform.mimin.io.",
			tags: [
				{
					name: "Voice AI",
					color: "blue-text-gradient",
				},
				{
					name: "Gen AI",
					color: "green-text-gradient",
				},
				{
					name: "Workflow",
					color: "pink-text-gradient",
				},
				{
					name: "Next.js 16",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/mern.png",
			platform: "Web",
			deploy_link: "https://platform.mimin.io",
		},
		{
			name: "IDPlay Company Profile",
			description:
				"Full-featured corporate platform for IDPlay, showcasing interactive product catalogs and seamless CMS-driven content for idplay.co.id.",
			tags: [
				{
					name: "Leaflet",
					color: "blue-text-gradient",
				},
				{
					name: "Framer Motion",
					color: "green-text-gradient",
				},
				{
					name: "Next.js",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/sparkbright.png",
			platform: "Web",
			deploy_link: "https://idplay.co.id",
		},
		{
			name: "Beautica KPI Dashboard",
			description:
				"Specialized data analytics tool designed for tracking sales performance, calculating KPIs, and monitoring growth metrics for Beautica's sales force.",
			tags: [
				{
					name: "Recharts",
					color: "blue-text-gradient",
				},
				{
					name: "Mongoose",
					color: "green-text-gradient",
				},
				{
					name: "KPI Analytics",
					color: "pink-text-gradient",
				},
			],
			image: "/projectimg/hoobank.webp",
			platform: "Vercel",
			deploy_link: "#",
		},
		{
			name: "Flix Cinema",
			description:
				"Premium cinema portal for ASRI (like XXI), featuring movie discovery, interactive seat selection, and ticket booking at flixcinema.mimin.io.",
			tags: [
				{
					name: "Chakra UI",
					color: "blue-text-gradient",
				},
				{
					name: "Booking Engine",
					color: "green-text-gradient",
				},
				{
					name: "Next.js",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/metaverse.png",
			platform: "Web",
			deploy_link: "https://flixcinema.mimin.io",
		},
		{
			name: "WhatsApp Official Campaign",
			description:
				"Enterprise blast dashboard for monitoring traffic, designing official WhatsApp templates, and managing large-scale messaging campaigns.",
			tags: [
				{
					name: "Laravel",
					color: "blue-text-gradient",
				},
				{
					name: "WABA Official",
					color: "green-text-gradient",
				},
				{
					name: "Blast Traffic",
					color: "pink-text-gradient",
				},
			],
			image: "/projectimg/avm.webp",
			platform: "Web",
			deploy_link: "#",
		},

	];

export { services, technologies, experiences, testimonials, projects };

