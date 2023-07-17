import React from 'react'
import CustomHead from '../CustomHead'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'
import { BuilderComponent } from '@builder.io/react'
import { BuilderContent } from "@builder.io/sdk";
import { Model } from '@/utils/constants'

interface PageDataFields {
	title?: string;
	description?: string;
}
interface PageBuilderContent extends BuilderContent {
	data?: BuilderContent['data'] & PageDataFields
}
interface MainLayoutProps {
	page?: PageBuilderContent | null
	announcement?: BuilderContent | null
}

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
