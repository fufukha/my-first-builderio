import React from "react";
import { useRouter } from "next/router";
import { builder, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import { GetStaticProps } from "next";
import { getAllPages, getModelContent, GetContentOptions } from '@/api/builder';
import { Model } from 'utils/constants';
import MainLayout from '@/layouts/MainLayout/MainLayout';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlPath = '/' + ((params?.page as string[]).join('/') || '');
  const options: GetContentOptions = { userAttributes: { urlPath }}
  
  // Fetch the builder content for the given page
  const page = params?.page ? await getModelContent(Model.Page, options) : null
  const announcement = params?.page ? await getModelContent(Model.Announcement, options) : null

  // Return the page content as props
  return {
    props: {
      page: page || null,
      announcement: announcement || null,
      params: params
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await getAllPages();

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map((page) => `${page.data?.url}`).filter(url => url !== '/'),
    fallback: true,
  };
}
interface PageProps {
  page: BuilderContent | null,
  announcement: BuilderContent | null,
  params: any
}
export default function Page({
  page,
  announcement,
  params
}: PageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  // return (
  //   <>
  //     <CustomHead title={page?.data?.title} description={page?.data?.description} />
  //     {announcement &&
  //       <BuilderComponent model={Model.Announcement} content={announcement} />
  //     }
  //     {/* <MainHeader /> */}
  //     {page &&
  //       <BuilderComponent model={Model.Page} content={page || undefined} />
  //     }
  //     <MainFooter />
  //   </>
  // );
  return (
    <MainLayout
      page={page}
      announcement={announcement}
    />
  )
}



