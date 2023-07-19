import { Theme } from '@/types'
import { getTextTheme } from '@/utils';
import React, { ReactNode } from 'react'
import cn from 'classnames'

interface ThemeWrapperProps {
	theme?: Theme;
	children: ReactNode;
}
export default function ThemeWrapper({
	theme = 'primary',
	children
}: ThemeWrapperProps) {
	const textTheme = getTextTheme(theme)
	return (
		<div className={cn({
			'bg-accent text-primaryText': theme === 'accent'
		})}>
			{children}
		</div>
	)
}
