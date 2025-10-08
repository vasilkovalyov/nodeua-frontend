import { ReactElement } from "react";
import type { Metadata } from "next";

import { Stack, Typography } from "@mui/material";

import { BlockCart } from "@/src/widgets/blocks";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function CartPage(): Promise<ReactElement> {
  return (
    <Stack gap="20px">
      <Typography variant="h1">Cart</Typography>
      <BlockCart />
    </Stack>
  );
}
