import React from 'react'
import styles from './Hero.module.css'
import { CustomBuilderComponent, Theme } from '@/types';
import Container from '@/components/Container/Container'
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
		<Container
			className={styles['hero-container']}
			theme={theme}
			element='section'
		>
			<h2 className={styles['hero-title']}>{title}</h2>
			{description &&
				<p className={styles['hero-description']}>{description}</p>
			}
		</Container>
	)
}
