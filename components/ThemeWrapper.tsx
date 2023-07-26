import { Theme } from '@/types'
import { getTextTheme } from '@/utils';
import React, { ReactNode } from 'react'
import cn from 'classnames'

interface ThemeWrapperProps {
	theme?: Theme;
	hover?: boolean;
	className?: string;
	element?: keyof JSX.IntrinsicElements;
	children: ReactNode;
}
export default function ThemeWrapper({
	theme = 'primary',
	hover,
	className='',
	element='div',
	children
}: ThemeWrapperProps) {
	const ThemeWrapperEl = element;
	return (
		<ThemeWrapperEl className={cn({
				'bg-primary text-secondaryText': theme === 'primary',
				'bg-secondary text-primaryText': theme === 'secondary',
				'bg-tertiary text-secondaryText': theme === 'tertiary',
				'bg-accent text-primaryText': theme === 'accent',
				'bg-primary text-secondaryText hover:bg-primaryDark': theme === 'primary'  && hover,
				'text-primaryText bg-secondary hover:bg-secondaryDark': theme === 'secondary' && hover,
				'bg-tertiary text-secondaryText hover:bg-tertiaryDark': theme === 'tertiary' && hover,
				'bg-accent text-primaryText hover:bg-accentDark': theme === 'accent' && hover,
				[className]: className,
			})
		}>
			{children}
		</ThemeWrapperEl>
	)
}
