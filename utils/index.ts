import { BuilderChild, Theme } from '@/types'
import { Builder, BuilderBlocks, BuilderElement } from '@builder.io/react'
import cn from 'classnames'

export const getTextTheme = (theme: Theme) => {
	const primaryTextTheme: Theme[] = ['primary', 'tertiary', 'accent']
	
	return primaryTextTheme?.includes(theme) ? 'primaryText' : 'secondaryText'
}

export const getThemeClasses = (theme: Theme) => {
	return cn({
		'text-primaryText': theme === 'secondary',
		'text-secondaryText': theme !== 'secondary',
		'bg-primary': theme === 'primary',
		'bg-secondary': theme === 'secondary',
		'bg-tertiary': theme === 'tertiary',
		'bg-accent': theme === 'accent',
	})
}

export const getBuildChild = (children: BuilderElement[], tag: string) => {
	const child = children?.find((child) => child?.component?.tag === tag);
	return child
}