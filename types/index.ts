import { BuilderContent } from "@builder.io/sdk";

export enum Model {
	Page = 'page',
	Announcement = 'announcement-bar',
	NavLink = 'nav-link',
	Symbol = 'symbol'
}

export type GenericBuilderContent = BuilderContent 

interface PageDataFields {
	title?: string;
	description?: string;
}

interface NavLinkDataFields {
	label: string;
	url: string;
	behavior: '_self' | '_blank';
	externalLink: boolean;
}

export interface NavLinkBuilderContent extends BuilderContent {
  data?: BuilderContent['data'] & NavLinkDataFields
}

export interface PageBuilderContent extends BuilderContent {
	data?: BuilderContent['data'] & PageDataFields
}