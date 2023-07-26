import React from 'react'
import { CustomBuilderComponent, CustomLink, Theme } from '@/types'
import Link, {LinkProps} from 'next/link'
import Image from 'next/image'
import styles from './Button.module.css'
import ThemeWrapper from '../ThemeWrapper'

interface ButtonProps extends Omit<CustomLink, 'url'>, CustomBuilderComponent  {
	theme: Theme,
	linkUrl: string;
}

export default function Button({
	label ='',
	linkUrl='#',
	behavior='_blank',
	image,
	theme='accent',
	externalLink,
	builderState,
	builderBlock,
	...props

}: ButtonProps) {
	const ButtonEl = externalLink ? 'a' :  Link;

	return (
		<ButtonEl 
			href={linkUrl as string}
			target={behavior}
			{...props}
		>
			<ThemeWrapper hover className={styles.button} theme={theme}>
				{(label && !image) && label}
				{image &&
					<Image src={image} alt={label} />
				}
			</ThemeWrapper>
		</ButtonEl>
	)
}
