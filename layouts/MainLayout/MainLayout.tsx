import React from 'react'
import CustomHead from '../CustomHead'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'
import { BuilderComponent } from '@builder.io/react'
import { BuilderContent } from "@builder.io/sdk";
import { PageProps } from '@/pages/[[...page]]'
import { Model } from '@/types'

interface MainLayoutProps extends Omit<PageProps, 'params'> {}

export default function MainLayout({
	announcement,
	page,
}: MainLayoutProps) {
	return (
		<>
			<CustomHead title={page?.data?.title} description={page?.data?.description} />
			{announcement &&
				<BuilderComponent model={Model.Announcement} content={announcement} />
			}
			<MainHeader />
			{page &&
				<BuilderComponent model={Model.Page} content={page || undefined} />
			}
			<MainFooter />
		</>
	)
}
