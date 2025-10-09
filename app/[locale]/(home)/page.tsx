import { ReactElement } from "react";
import type { Metadata } from "next";
import HomePageContainer from "@/src/widgets/page-containers/home/home";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function HomePage(): Promise<ReactElement> {
  return <HomePageContainer />;
}
