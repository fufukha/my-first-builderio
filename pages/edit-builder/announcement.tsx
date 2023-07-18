import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder } from "@builder.io/react";
import { GetStaticProps } from "next";
import { getAllContentModel } from '@/api/builder';
import { Model, GenericBuilderContent} from '@/types';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async () => {
	const announcement =  await getAllContentModel(Model.Announcement) || null;

  // Return the page content as props
  return {
    props: {
      announcement: announcement || undefined,
    },
    // Revalidate the content every 5 seconds
    // revalidate: 5,
  };
};

export interface EditAnnouncementPageProps {
  announcement?: GenericBuilderContent,
}
export default function EditAnnouncementPage({
  announcement,
}: EditAnnouncementPageProps) {
  const router = useRouter();
  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {announcement &&
        <BuilderComponent model={Model.Announcement} />
      }
    </>
  )
}



