import React from 'react'
import styles from './ContentSection.module.css'
import { CustomBuilderComponent, Theme } from '@/types';
import { getThemeClasses } from '@/utils';
import {BuilderBlocks, BuilderElement, withChildren } from '@builder.io/react';

interface ContentSectionProps extends CustomBuilderComponent {
	title: BuilderElement[];
	description?: string;
	theme?: Theme;
}
export default function ContentSection({
	description,
	theme = 'primary',
	title,
	builderBlock,
}
: ContentSectionProps) {
	return (
		<section className={theme ? getThemeClasses(theme).theme : undefined}>
			<div className={styles['contentSection-container']}>
				<div className={styles['contentSection-title']}>
					<BuilderBlocks
							blocks={title}
							parentElementId={builderBlock.id}
							dataPath="component.options.title"
						/>
					</div>
				{description &&
					<p className={styles['contentSection-description']}>{description}</p>
				}
			</div>
		</section>
	)
}

export const ContentSectionWithChildren = withChildren(ContentSection);