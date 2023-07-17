import Head from 'next/head'

export interface CustomHeadProps {
	title: string;
	description?: string;
}

export default function CustomHead({
	title,
	description,
}: CustomHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} key="title" />
			{description &&
				<meta name="description" content={description} key="description" />
			}
		</Head>
	)
}
