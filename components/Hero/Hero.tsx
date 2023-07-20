import React from 'react'
import styles from './Hero.module.css'
import { CustomBuilderComponent, Theme } from '@/types';
import { getThemeClasses } from '@/utils';

interface HeroProps extends CustomBuilderComponent {
	title: string;
	description?: string;
	theme?: Theme;
}
export default function Hero({
	title,
	description,
	theme = 'primary',
}: HeroProps) {
	return (
		<section className={getThemeClasses(theme)}>
			<div className={styles['hero-container']}>
				<h2 className={styles['hero-title']}>{title}</h2>
				{description &&
					<p className={styles['hero-description']}>{description}</p>
				}
			</div>
		</section>
	)
}
