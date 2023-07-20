import { BuilderChild, Theme } from '@/types'
import { Builder, BuilderBlocks, BuilderElement } from '@builder.io/react'
import cn from 'classnames'

export const getTextTheme = (theme: Theme) => {
	const primaryTextTheme: Theme[] = ['primary', 'tertiary', 'accent']
	
	return primaryTextTheme?.includes(theme) ? 'primaryText' : 'secondaryText'
}

export const getThemeClasses = (theme: Theme) => {
	return ( 
		{
			theme: cn({
				'text-primaryText bg-secondary': theme === 'secondary',
				'bg-primary text-secondaryText': theme === 'primary',
				'bg-tertiary text-secondaryText': theme === 'tertiary',
				'bg-accent text-secondaryText': theme === 'accent',
			})
		}
	)
}

export const getBuildChild = (children: BuilderElement[], tag: string) => {
	const child = children?.find((child) => child?.component?.tag === tag);
	return child
}