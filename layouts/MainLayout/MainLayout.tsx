import React from 'react'
import CustomHead, { CustomHeadProps} from '../CustomHead'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'
import { BuilderComponent } from '@builder.io/react'
import { BuilderContent } from "@builder.io/sdk";
import { Model } from '@/utils/constants'

interface MainLayoutProps extends CustomHeadProps {
	page?: BuilderContent | null
	announcement?: BuilderContent | null
}

export default function MainLayout({
	title,
	description,
	announcement,
	page,
}: MainLayoutProps) {
	return (
		<>
			<CustomHead title={title} description={description} />
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
