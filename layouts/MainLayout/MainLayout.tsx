import React from 'react'
import CustomHead, { CustomHeadProps} from '../CustomHead'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'
import { BuilderComponent } from '@builder.io/react'
import { BuilderContent } from "@builder.io/sdk";

interface MainLayoutProps extends CustomHeadProps {
	page?: BuilderContent | null
}

export default function MainLayout({
	title,
	description,
	page,
}: MainLayoutProps) {
	console.log(page)
	return (
		<>
			<CustomHead title={title} description={description} />
			<MainHeader />
			{page &&
				<BuilderComponent model="page" content={page || undefined} />
			}
			<MainFooter />
		</>
	)
}
