import { BuilderContent } from "@builder.io/sdk";

export enum Model {
	Page = 'page',
	Announcement = 'announcement-bar',
	NavLink = 'nav-link'
}

export type GenericBuilderContent = BuilderContent 

interface PageDataFields {
	title?: string;
	description?: string;
}

interface NavLinkDataFields {

}

export interface NavLinkBuilderContent extends BuilderContent {
  data?: BuilderContent['data'] & NavLinkDataFields
}

export interface PageBuilderContent extends BuilderContent {
	data?: BuilderContent['data'] & PageDataFields
}