import { Theme } from '@/types'
import React, { ReactNode } from 'react'
import styles from './Container.module.css'
import cn from 'classnames'
import ThemeWrapper from '../ThemeWrapper'
import { withChildren } from '@builder.io/react';

interface ContainerProps {
	theme?: Theme;
	className?: string;
	element?: keyof JSX.IntrinsicElements;
	children?: ReactNode;
}

export default function Container({
	theme,
	className='',
	element='div',
	children
}: ContainerProps) {
	const ContainerWrapperEl = theme ? 'div' : element;
	const ThemeWrapperEl = theme ? ThemeWrapper : React.Fragment;

	return (
		<ThemeWrapperEl element={element} theme={theme}>
			<ContainerWrapperEl className={cn(styles.container, className)}>
				{children}
			</ContainerWrapperEl>
		</ThemeWrapperEl>
	)
}

export const ContainerWithChildren = withChildren(Container);