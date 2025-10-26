import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import PostsPageContainer from "@/src/widgets/page-containers/posts/posts";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("posts_page_meta_title"),
    description: t("posts_page_meta_description")
  };
}

export default async function PostsPage(): Promise<ReactElement> {
  return <PostsPageContainer />;
}
