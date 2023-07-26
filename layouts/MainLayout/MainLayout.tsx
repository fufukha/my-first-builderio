import React from 'react'
import CustomHead from '../CustomHead'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'
import { BuilderComponent } from '@builder.io/react'
import { PageProps } from '@/pages/[[...page]]'
import { Model } from '@/types'
import Button from '@/components/Button/Button'

export interface MainLayoutProps {
	navLinks: PageProps['navLinks'];
	announcement: PageProps['announcement'];
	page: PageProps['page'];
}

export default function MainLayout({
	navLinks,
	announcement,
	page,
}: MainLayoutProps) {
	return (
		<>
			<CustomHead title={page?.data?.title} description={page?.data?.description} />
			{announcement &&
				<BuilderComponent model={Model.Announcement} content={announcement} />
			}
			<MainHeader navLinks={navLinks} />
			{page &&
				<BuilderComponent model={Model.Page} content={page || undefined} options={{includeRefs: true}} />
			}
			{/* <MainFooter /> */}
		</>
	)
}
