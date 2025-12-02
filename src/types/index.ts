import { LucideIcon } from "lucide-react";

export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	github?: string;
	image?: string;
	type?: string;
}

export interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
	technologies?: string[];
}

export interface Skill {
	name: string;
	icon?: LucideIcon;
	iconUrl?: string;
	color?: string;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: LucideIcon;
}
