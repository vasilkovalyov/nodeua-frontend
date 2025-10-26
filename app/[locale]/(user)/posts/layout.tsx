import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface PostsLayoutProps {
  children: ReactNode;
}

export default function PostsLayout(props: PostsLayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
