import { Model } from '@/utils/constants';
import { builder, Builder } from "@builder.io/react";

export type GetContentOptions = Parameters<Builder['get']>[1];

export const getModelContent = async (
	modelName: Parameters<Builder['get']>[0],
	options: Parameters<Builder['get']>[1],
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

export const getPageContent = async (
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
