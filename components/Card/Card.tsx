import { CustomBuilderComponent, Theme } from '@/types';
import { BuilderBlocks, BuilderElement, withChildren } from '@builder.io/react';
import React from 'react'

interface CardProps extends CustomBuilderComponent {
	eyebrow: string;
	title: string;
	description?: string;
	action: BuilderBlocks[],
	theme?: Theme;
}
export default function Card({
	eyebrow,
	title,
	description,
	action,
	builderBlock
}: CardProps) {
	return (
		<div>
			<h2>{eyebrow}</h2>
			<h3>{title}</h3>
			<p>{description}</p>
			{builderBlock &&
				<BuilderBlocks
					blocks={action}
					parentElementId={builderBlock.id}
					// dataPath="component.options.title"
				/>
			}
		</div>
	)
}

export const  CardWithChildren = withChildren(Card)