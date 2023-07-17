import { Model } from '@/types';
import { builder, Builder } from "@builder.io/react";

export type GetContentOptions = Parameters<Builder['get']>[1];

export const getContentModel = async (
	modelName: string,
	options?: GetContentOptions,
	url?: string[],
) => {
	const urlPath = url ?  '/' + (url?.join('/') || '') : undefined;

	const model = await builder.get(
		modelName,
		{
			...options,
			...url && {userAttributes: { urlPath }}
		}
	).toPromise();

	return model;
}

export const getAllContentModel = async (
	modelName: string,
	options?: GetContentOptions
) => {
	const allModels = await builder.getAll(
		modelName,
		options
	)

	return allModels
}

export const getPageModel = async (
	urls: string[],
) => {
	const pageContent = await builder
	.get(Model.Page, {
			userAttributes: {
				urlPath: "/" + ((urls)?.join("/") || ""),
			},
		})
		.toPromise();

	return pageContent;
}

export const getAllPages = async () => {
	const pages = await builder.getAll(Model.Page, {
		// We only need the URL field
		fields: "data.url",
		options: { noTargeting: true },
	});

	return pages;
}
