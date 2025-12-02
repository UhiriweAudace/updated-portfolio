import { Github, Linkedin, Twitter, Mail, Code2, Globe, Database, Server, Terminal, Cpu, Layers, Box } from "lucide-react";
import { Project, ExperienceItem, Skill, SocialLink } from "@/types";

export const RESUME_LINK = "https://docs.google.com/document/d/132rCcBemDD6DfXY9mHLPreiiNGzdH1TQYr5Dtxqf0V8/edit?usp=sharing";

// Placeholder for the user's picture since no file was uploaded in the context.
// Using a high quality professional headshot placeholder.
export const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop";

export const HERO_TITLE = "Full Stack Engineer";
export const HERO_SUBTITLE = "Building scalable, high-performance web applications with modern technologies.";
export const ABOUT_TEXT =
	"I am a Senior Fullstack Engineer with over 5 years of experience in building robust web applications. My expertise spans across the entire development lifecycle, from designing intuitive user interfaces to architecting secure and scalable backend systems.";

export const EXPERIENCES: ExperienceItem[] = [
	{
		role: "Software Engineer",
		company: "Bouletteproof., Port Louis",
		period: "May 2023 - Current",
		description:
			"Built new features for HikrLink and Hikr web applications. Implemented key features for the HikrLink URL shortener platform, focusing on performance optimization and user experience.",
		technologies: ["React", "Next.js", "Node.js", "Nest.js", "TypeScript", "PostgreSQL"],
	},
	{
		role: "Senior Fullstack Engineer",
		company: "Plastiq Inc., San Francisco, US",
		period: "Nov 2022 - May 2023",
		description:
			"Conducted full stack web application development in Agile environment. Built RESTful Web APIs, designed and implemented user interfaces. Conducted technical troubleshooting and developed new features for existing applications.",
		technologies: ["React", "Redux-saga", "Node.js", "AWS", "MySQL", "Redis"],
	},
	{
		role: "Fullstack Developer",
		company: "Space Next Door, SGP",
		period: "Oct 2021 - Aug 2022",
		description:
			"Built and maintained the SND website, implementing key features and optimizing performance. Worked with React/Next.js, Node.js, and various cloud services to deliver seamless user experiences.",
		technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Nest.js", "AWS"],
	},
	{
		role: "Software Developer",
		company: "Gerayo Ltd, Kigali",
		period: "Feb 2020 - Sep 2020",
		description:
			"Developed web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions and implemented responsive designs.",
		technologies: ["JavaScript", "Vue.js", "Vuex", "Node.js", "PostgreSQL"],
	},
	{
		role: "Software Developer",
		company: "Andela, Kigali",
		period: "May 2019 - Oct 2019",
		description:
			"Participated in distributed team projects, building scalable applications. Focused on test-driven development and best practices while working on different projects.",
		technologies: ["JavaScript", "React", "Redux", "Node.js", "Jest", "Git"],
	},
];

export const PROJECTS: Project[] = [
	{
		title: "HikrLink",
		type: "Professional",
		description:
			"A comprehensive URL shortener platform built with React and Node.js, featuring analytics, custom short URLs, and enterprise-level performance.",
		tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
		link: "https://bouletteproof.com",
	},
	{
		title: "Space Next Door",
		type: "Professional",
		description:
			"E-commerce platform for storage space rentals. Features include real-time booking, payment integration, and location-based search.",
		tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Google Maps"],
		link: "https://www.spacenextdoor.com",
	},
	{
		title: "Banka",
		type: "Personal",
		description:
			"A light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals with secure authentication.",
		tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
		link: "#",
		github: "#",
	},
	{
		title: "Just Chat App",
		type: "Personal",
		description:
			"Real-time chat application with instant messaging capabilities and user theme customization. Features include group chats, file sharing, and emoji support.",
		tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
		link: "#",
		github: "#",
	},
];

export const SKILLS: Skill[] = [
	{ name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
	{ name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
	{ name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
	{ name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
	{ name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/white" },
	{ name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
	{ name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
	{ name: "GraphQL", iconUrl: "https://cdn.simpleicons.org/graphql/E10098" },
	{ name: "AWS", iconUrl: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
	{ name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
	{ name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
	{ name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
	{ name: "Angular", iconUrl: "https://cdn.simpleicons.org/angular/DD0031" },
	{ name: "C#", iconUrl: "https://cdn.simpleicons.org/csharp/239120" },
	{ name: "ASP.NET", iconUrl: "https://cdn.simpleicons.org/dotnet/512BD4" },
	{ name: "Flask", iconUrl: "https://cdn.simpleicons.org/flask/white" },
	{ name: "Vue.js", iconUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
];

export const SOCIALS: SocialLink[] = [
	{ name: "GitHub", url: "https://github.com", icon: Github },
	{ name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
	{ name: "Email", url: "mailto:hello@example.com", icon: Mail },
];
