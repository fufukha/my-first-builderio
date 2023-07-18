import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps } from "next";
import { getAllContentModel, GetContentOptions } from '@/api/builder';
import { Model, GenericBuilderContent} from '@/types';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async () => {
	const symbols =  await getAllContentModel(Model.Symbol) || null

  // Return the page content as props
  return {
    props: {
      symbols: symbols || undefined,
    },
    // Revalidate the content every 5 seconds
    // revalidate: 5,
  };
};

export interface EditSymbolPageProps {
  symbols?: GenericBuilderContent[],
  params: any
}
export default function EditSymbolPage({
  symbols,
  params
}: EditSymbolPageProps) {
  const router = useRouter();
  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {symbols && symbols?.map((symbol) => (
        <BuilderComponent key={symbol.id} model={Model.Symbol} />
      ))}
    </>
  )
}



