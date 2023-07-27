import React from 'react'
import styles from './ContentSection.module.css'
import { CustomBuilderComponent, Theme } from '@/types';
import {BuilderBlocks, BuilderElement, withChildren } from '@builder.io/react';
import ThemeWrapper from '../ThemeWrapper';

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
		<ThemeWrapper element='section'>
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
		</ThemeWrapper>
	)
}

// export const ContentSectionWithChildren = withChildren(ContentSection);