import { ReactElement } from "react";
import type { Metadata } from "next";

import PostsPageContainer from "@/src/widgets/page-containers/posts/posts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function PostsPage(): Promise<ReactElement> {
  return <PostsPageContainer />;
}
