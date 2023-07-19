import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { Theme } from '@/types';

interface HeaderProps {
	navLinks: any;
	theme: Theme;
}
export default function Header({
	navLinks,
	theme,
}: HeaderProps) {
	console.log(navLinks, theme)
	return (
		<header className={styles.header}>
			{/* {Boolean(navLinks?.length) && 
				<nav className={styles.headerNav}>
					<ul className={styles.headerNavUl}>
						{navLinks?.map((link: any) => {
							const LinkEl = link?.data?.externalLink ? 'a' : Link;
							return (
								<li key={link.id}>
									<LinkEl href={link?.data?.url as string}>
										{link?.data?.label}
									</LinkEl>
								</li>
						)})}
					</ul>
				</nav>
			} */}
		</header>
	)
}
