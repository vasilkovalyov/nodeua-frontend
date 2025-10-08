import { ReactElement } from "react";
import type { Metadata } from "next";

import { BlockNodes } from "@/src/widgets/blocks";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function HomePage(): Promise<ReactElement> {
  return <BlockNodes />;
}
