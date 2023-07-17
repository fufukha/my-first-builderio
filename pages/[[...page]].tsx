import React from "react";
import { useRouter } from "next/router";
import { builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import { GetStaticProps } from "next";
import { getAllContentModel, getAllPages, getContentModel, GetContentOptions } from '@/api/builder';
import { Model, GenericBuilderContent, PageBuilderContent, NavLinkBuilderContent } from '@/types';
import MainLayout from '@/layouts/MainLayout/MainLayout';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlPath = '/' + ((params?.page as string[]).join('/') || '');
  const options: GetContentOptions = { userAttributes: { urlPath }}
  
  // Fetch the builder content for the given page
  const page = params?.page ? await getContentModel(Model.Page, options) : null
  const announcement = params?.page ? await getContentModel(Model.Announcement, options) : null
  const navLinks = getAllContentModel(Model.NavLink)

  // Return the page content as props
  return {
    props: {
      page: page || undefined,
      announcement: announcement || undefined,
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


export interface PageProps {
  page?: PageBuilderContent,
  announcement?: GenericBuilderContent,
  navLinks?: NavLinkBuilderContent,
  params: any
}
export default function Page({
  page,
  announcement,
  navLinks,
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

  return (
    <MainLayout
      page={page}
      announcement={announcement}
      navLinks={navLinks}
    />
  )
}



