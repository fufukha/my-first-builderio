import { BuilderStore } from '@builder.io/react';
import { BuilderContent, BuilderElement } from "@builder.io/sdk";

export enum Model {
	Page = 'page',
	Announcement = 'announcement-bar',
	NavLink = 'nav-link',
	Symbol = 'symbol',
	Navigation = 'navigation-links'
}

export interface CustomLink {
	image?: string;
	label?: string;
	url?: string;
	behavior?: '_self' | '_blank',
	externalLink?: boolean;
}

export type GenericBuilderContent = BuilderContent 

interface PageDataFields {
	title?: string;
	description?: string;
}

interface NavLinkDataFields {
	label: string;
	url: string;
	behavior: LinkBehavior;
	externalLink: boolean;
}

interface NavigationLink extends CustomLink {
	children: NavigationLinkBuilderContent;
}
interface NavigationLinksDataFields {
	links: NavigationLink[]
}

export interface NavigationLinkBuilderContent extends BuilderContent {
	data?: BuilderContent['data'] & NavigationLinksDataFields;
}
export interface NavLinkBuilderContent extends BuilderContent {
  data?: BuilderContent['data'] & NavLinkDataFields
}

export interface PageBuilderContent extends BuilderContent {
	data?: BuilderContent['data'] & PageDataFields
}

export const theme = ['primary', 'secondary', 'tertiary', 'accent'] as const
export type Theme = typeof theme[number]

export const linkBehavior = ['_self', '_blank'] as const
export type LinkBehavior = typeof linkBehavior[number]

export interface BuilderChild {
	readonly $$typeof: string;
	readonly key: string;
	props: {
		block: BuilderElement;
	}
}

export interface CustomBuilderComponent {
	builderBlock: BuilderElement;
	builderState: BuilderStore;
}