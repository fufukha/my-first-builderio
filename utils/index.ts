import { BuilderChild, Theme } from '@/types'
import { Builder, BuilderBlocks, BuilderElement } from '@builder.io/react'
import cn from 'classnames'

export const getTextTheme = (theme: Theme) => {
	const primaryTextTheme: Theme[] = ['primary', 'tertiary', 'accent']
	
	return primaryTextTheme?.includes(theme) ? 'primaryText' : 'secondaryText'
}


export const getBuildChild = (children: BuilderElement[], tag: string) => {
	const child = children?.find((child) => child?.component?.tag === tag);
	return child
}