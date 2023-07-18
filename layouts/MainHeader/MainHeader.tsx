import React from 'react'
import styles from './MainHeader.module.css'
import { MainLayoutProps } from '../MainLayout/MainLayout'
import Link from 'next/link'

interface MainHeaderProps {
	navLinks?: MainLayoutProps['navLinks']
}

export default function MainHeader({
	navLinks
}: MainHeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				My first Builder.io
			</div>
			{Boolean(navLinks?.length) && 
				<nav className={styles.headerNav}>
					<ul className={styles.headerNavUl}>
						{navLinks?.map((link) => {
							const LinkEl = link?.data?.externalLink ? 'a' : Link;
							return (
								<li key={link.id}>
									<Link href={link?.data?.url as string}>
										{link?.data?.label}
									</Link>
								</li>
						)})}
					</ul>
				</nav>
			}
		</header>
	)
}
