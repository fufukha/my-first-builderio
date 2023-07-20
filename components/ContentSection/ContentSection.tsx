import React from 'react'
import styles from './ContentSection.module.css'
import { CustomBuilderComponent, Theme } from '@/types';
import { getBuildChild, getThemeClasses } from '@/utils';
import {BuilderBlocks, withChildren } from '@builder.io/react';


interface ContentSectionProps extends CustomBuilderComponent {
	title: string;
	description?: string;
	theme?: Theme;
}
export default function ContentSection({
	description,
	theme,
	builderBlock
}
: ContentSectionProps) {
	return (
		<section className={theme ? getThemeClasses(theme) : undefined}>
			<div className={styles['contentSection-container']}>
				<div className={styles['contentSection-title']}>
						<BuilderBlocks
							blocks={builderBlock.children}
							parentElementId={builderBlock.id}
							dataPath="this.children"
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