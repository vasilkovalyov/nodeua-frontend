import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PostsPageContainer from "@/src/widgets/page-containers/posts/posts";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("posts_page_meta_title"),
    description: t("posts_page_meta_description")
  };
}

export default async function PostsPage(): Promise<ReactElement> {
  return <PostsPageContainer />;
}
